import { cp, mkdir, readdir, rm } from 'node:fs/promises'
import { dirname, join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const distDir = join(root, '..', 'docs', '.vitepress', 'dist')

async function listHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      files.push(...await listHtmlFiles(fullPath))
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath)
    }
  }

  return files
}

const htmlFiles = await listHtmlFiles(distDir)

for (const htmlFile of htmlFiles) {
  const relativePath = relative(distDir, htmlFile)

  if (relativePath === 'index.html' || relativePath === '404.html') {
    continue
  }

  if (relativePath.split(sep).at(-1) === 'index.html') {
    continue
  }

  const cleanPath = htmlFile.slice(0, -'.html'.length)
  const cleanIndex = join(cleanPath, 'index.html')

  await rm(cleanPath, { recursive: true, force: true })
  await mkdir(cleanPath, { recursive: true })
  await cp(htmlFile, cleanIndex)
}
