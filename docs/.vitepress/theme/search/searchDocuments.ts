import { CATEGORY_KEYWORDS, PAGE_KEYWORDS, SECTION_LABELS } from './searchMeta'

export interface SearchDocument {
  id: string
  url: string
  title: string
  titles: string[]
  text: string
  keywords: string
  category: string
  isPageTitle: boolean
}

interface ContentEntry {
  url: string
  src?: string
  html?: string
  frontmatter: Record<string, unknown>
}

interface HtmlSection {
  anchor: string
  titles: string[]
  text: string
}

const HEADING_RE = /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi
const ANCHOR_RE = /<a\b[^>]*\bhref="#([^"]+)"[^>]*>/i

export function buildSearchDocuments(entries: ContentEntry[]): SearchDocument[] {
  return entries.flatMap((entry) => buildEntryDocuments(entry))
}

function buildEntryDocuments(entry: ContentEntry): SearchDocument[] {
  if (entry.frontmatter.search === false) return []

  const url = normalizeUrl(entry.url)
  const category = getCategory(url)
  const pageKeywords = getPageKeywords(url)
  const sections = getSections(entry)

  return sections.map((section, index) => {
    const title = section.titles.at(-1) ?? getFallbackTitle(entry)
    const isPageTitle = index === 0 || section.anchor === ''

    return {
      id: section.anchor ? `${url}#${section.anchor}` : url,
      url,
      title,
      titles: section.titles.slice(0, -1),
      text: section.text,
      keywords: pageKeywords,
      category,
      isPageTitle
    }
  })
}

function getSections(entry: ContentEntry): HtmlSection[] {
  const html = entry.html ?? ''
  const sections = splitHtmlIntoSections(html)
  if (sections.length) return sections

  const fallbackTitle = getFallbackTitle(entry)
  const fallbackText = [
    getString(entry.frontmatter.description),
    getNestedString(entry.frontmatter, ['hero', 'text']),
    getNestedString(entry.frontmatter, ['hero', 'tagline']),
    getHomeFeatureText(entry.frontmatter)
  ]
    .filter(Boolean)
    .join(' ')

  return [{ anchor: '', titles: [fallbackTitle], text: fallbackText }]
}

function splitHtmlIntoSections(html: string): HtmlSection[] {
  const matches = [...html.matchAll(HEADING_RE)]
  const sections: HtmlSection[] = []
  const parentTitles: string[] = []

  matches.forEach((match, index) => {
    const level = Number.parseInt(match[1], 10) - 1
    const headingHtml = match[2]
    const title = cleanHtml(headingHtml).trim()
    if (!title) return

    const anchor = ANCHOR_RE.exec(headingHtml)?.[1] ?? ''
    const contentStart = (match.index ?? 0) + match[0].length
    const contentEnd = matches[index + 1]?.index ?? html.length
    const text = cleanHtml(html.slice(contentStart, contentEnd)).trim()
    const titles = parentTitles.slice(0, level)

    titles[level] = title
    sections.push({
      anchor,
      titles: titles.filter(Boolean),
      text
    })

    parentTitles[level] = title
    parentTitles.length = level + 1
  })

  return sections
}

function getPageKeywords(url: string): string {
  const categoryKeywords = Object.entries(CATEGORY_KEYWORDS)
    .filter(([prefix]) => url.startsWith(prefix))
    .flatMap(([, keywords]) => keywords)

  return [...categoryKeywords, ...(PAGE_KEYWORDS[url] ?? []), ...url.split(/[/-]/g)]
    .filter(Boolean)
    .join(' ')
}

function getCategory(url: string): string {
  const segment = url.split('/').filter(Boolean)[0]
  return SECTION_LABELS[segment] ?? 'Bisquit Wiki'
}

function normalizeUrl(url: string): string {
  if (url === '/index' || url === '/index.html') return '/'
  return url.replace(/\.html$/, '').replace(/\/index$/, '') || '/'
}

function getFallbackTitle(entry: ContentEntry): string {
  return (
    getString(entry.frontmatter.title) ||
    getNestedString(entry.frontmatter, ['hero', 'name']) ||
    'Bisquit Wiki'
  )
}

function cleanHtml(value: string): string {
  return decodeHtmlEntities(
    value
      .replace(/&#8203;|\u200B/g, '')
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
  ).trim()
}

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function getString(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

function getNestedString(source: Record<string, unknown>, path: string[]): string {
  let value: unknown = source

  for (const key of path) {
    if (!value || typeof value !== 'object') return ''
    value = (value as Record<string, unknown>)[key]
  }

  return getString(value)
}

function getHomeFeatureText(frontmatter: Record<string, unknown>): string {
  const features = frontmatter.features
  if (!Array.isArray(features)) return ''

  return features
    .flatMap((feature) => {
      if (!feature || typeof feature !== 'object') return []
      const record = feature as Record<string, unknown>
      return [getString(record.title), getString(record.details)]
    })
    .join(' ')
}
