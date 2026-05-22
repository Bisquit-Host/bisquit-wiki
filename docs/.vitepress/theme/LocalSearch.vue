<script setup lang="ts">
import MiniSearch, { type SearchResult } from 'minisearch'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'
import { useRouter } from 'vitepress'
import { data as searchDocuments } from './search.data'
import {
  getUsefulQueryTerms,
  normalizeSearchText,
  processSearchTerm,
  tokenizeSearchText
} from './search/searchTerms'
import type { SearchDocument } from './search/searchDocuments'

type Result = SearchResult & SearchDocument & { snippet: string; rank: number }

const SUGGESTED_URLS = [
  '/services/faq',
  '/services/choose-plan',
  '/server-configuration/port-allocation',
  '/server-configuration/server-properties',
  '/server-configuration/installcore',
  '/server-configuration/basic-optimization',
  '/modpacks-plugins/plugins',
  '/modpacks-plugins/spark'
]

const PAGE_TITLE_MATCH_BOOST = 5000

const props = withDefaults(
  defineProps<{
    globalShortcut?: boolean
  }>(),
  {
    globalShortcut: true
  }
)

const router = useRouter()
const query = ref('')
const isOpen = ref(false)
const selectedIndex = ref(0)
const input = ref<HTMLInputElement>()
const dialog = ref<HTMLElement>()

const searchIndex = shallowRef(createSearchIndex())

const pageSuggestions = computed(() =>
  searchDocuments
    .filter((document) => document.isPageTitle && document.url !== '/')
    .sort((a, b) => getSuggestionOrder(a.url) - getSuggestionOrder(b.url))
    .slice(0, 8)
)

const queryTerms = computed(() => getUsefulQueryTerms(query.value))

const results = computed<Result[]>(() => {
  const normalizedQuery = normalizeSearchText(query.value).trim()
  if (!normalizedQuery) {
    return pageSuggestions.value.map((document, index) => ({
      ...document,
      id: document.id,
      terms: [],
      queryTerms: [],
      match: {},
      score: 0,
      rank: pageSuggestions.value.length - index,
      snippet: makeSnippet(document.text, [])
    }))
  }

  const strictResults = runSearch(normalizedQuery, 'AND')
  const broadResults = strictResults.length >= 6 ? [] : runSearch(normalizedQuery, 'OR')
  const merged = mergeResults(strictResults, broadResults)

  return merged
    .map((result) => ({
      ...result,
      rank: getResultRank(result, normalizedQuery),
      snippet: makeSnippet(result.text, queryTerms.value)
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 12)
})

watch(results, () => {
  selectedIndex.value = results.value.length ? 0 : -1
})

function createSearchIndex() {
  const index = new MiniSearch<SearchDocument>({
    fields: ['title', 'titles', 'text', 'keywords'],
    storeFields: ['title', 'titles', 'text', 'keywords', 'category', 'url', 'isPageTitle'],
    tokenize: tokenizeSearchText,
    processTerm: processSearchTerm,
    searchOptions: {
      boost: { title: 10, keywords: 7, titles: 4, text: 1 },
      fuzzy: (term) => (term.length >= 7 ? 1 : term.length >= 5 ? 0.18 : false),
      maxFuzzy: 2,
      prefix: (term) => term.length >= 2,
      weights: { fuzzy: 0.35, prefix: 0.65 },
      boostTerm: (term) => {
        if (/^(minecraft|майнкрафт|server|сервер|хостинг)$/.test(term)) return 0.55
        return term.length >= 8 ? 1.2 : 1
      }
    }
  })

  index.addAll(searchDocuments)
  return index
}

function runSearch(value: string, combineWith: 'AND' | 'OR'): Result[] {
  return searchIndex.value.search(value, { combineWith }) as Result[]
}

function mergeResults(primary: Result[], secondary: Result[]): Result[] {
  const byId = new Map<string, Result>()

  for (const result of [...secondary, ...primary]) {
    const existing = byId.get(result.id)
    byId.set(result.id, existing && existing.score > result.score ? existing : result)
  }

  return [...byId.values()]
}

function getResultRank(result: Result, normalizedQuery: string): number {
  const title = normalizeSearchText(result.title)
  const titles = normalizeSearchText(result.titles.join(' '))
  const text = normalizeSearchText(result.text)
  const keywords = normalizeSearchText(result.keywords)
  const compactQuery = normalizedQuery.replace(/[._:+#/-]+/g, '')
  const compactUrl = normalizeSearchText(result.url).replace(/[._:+#/-]+/g, '')

  let rank = result.score
  if (title === normalizedQuery) rank += 120
  if (title.includes(normalizedQuery)) rank += 55
  if (titles.includes(normalizedQuery)) rank += 30
  if (keywords.includes(normalizedQuery)) rank += 25
  if (text.includes(normalizedQuery)) rank += 15
  if (result.isPageTitle && title.includes(normalizedQuery)) rank += PAGE_TITLE_MATCH_BOOST
  if (result.isPageTitle && compactQuery.length >= 4 && compactUrl.includes(compactQuery)) {
    rank += PAGE_TITLE_MATCH_BOOST
  }
  if (result.isPageTitle) rank += 24

  return rank
}

function getSuggestionOrder(url: string): number {
  const index = SUGGESTED_URLS.indexOf(url)
  return index === -1 ? SUGGESTED_URLS.length : index
}

function makeSnippet(text: string, terms: string[]): string {
  const normalized = normalizeSearchText(text)
  const positions = terms
    .map((term) => normalized.indexOf(term))
    .filter((position) => position >= 0)
  const start = positions.length ? Math.max(0, Math.min(...positions) - 90) : 0
  const end = Math.min(text.length, start + 240)
  const prefix = start > 0 ? '...' : ''
  const suffix = end < text.length ? '...' : ''

  return `${prefix}${text.slice(start, end).trim()}${suffix}`
}

function highlight(value: string): string {
  const escaped = escapeHtml(value)
  const terms = queryTerms.value
    .filter((term) => term.length >= 3)
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)

  if (!terms.length) return escaped

  return escaped.replace(new RegExp(`(${terms.join('|')})`, 'giu'), '<mark>$1</mark>')
}

function openSearch() {
  isOpen.value = true
  nextTick(() => input.value?.focus())
}

function closeSearch() {
  isOpen.value = false
}

function goToResult(result: Result | SearchDocument) {
  router.go(result.id)
  closeSearch()
}

function moveSelection(offset: number) {
  if (!results.value.length) return
  selectedIndex.value = (selectedIndex.value + offset + results.value.length) % results.value.length
}

function submitSelection() {
  const selected = results.value[selectedIndex.value]
  if (selected) goToResult(selected)
}

function onGlobalKeydown(event: KeyboardEvent) {
  const isMacShortcut = event.metaKey && event.key.toLowerCase() === 'k'
  const isCtrlShortcut = event.ctrlKey && event.key.toLowerCase() === 'k'

  if (isMacShortcut || isCtrlShortcut) {
    event.preventDefault()
    openSearch()
  }
}

function onDialogKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    moveSelection(1)
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    moveSelection(-1)
  } else if (event.key === 'Enter') {
    event.preventDefault()
    submitSelection()
  } else if (event.key === 'Escape') {
    event.preventDefault()
    closeSearch()
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

onMounted(() => {
  if (props.globalShortcut) window.addEventListener('keydown', onGlobalKeydown)
})

onBeforeUnmount(() => {
  if (props.globalShortcut) window.removeEventListener('keydown', onGlobalKeydown)
})
</script>

<template>
  <button class="local-search-button" type="button" @click="openSearch">
    <span class="vpi-search local-search-icon" aria-hidden="true"></span>
    <span class="local-search-label">Поиск</span>
    <span class="local-search-keys" aria-hidden="true">⌘K</span>
  </button>

  <Teleport to="body">
    <div v-if="isOpen" class="local-search-overlay" @click.self="closeSearch">
      <section
        ref="dialog"
        class="local-search-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Поиск по Bisquit Wiki"
        @keydown="onDialogKeydown"
      >
        <div class="local-search-input-wrap">
          <span class="vpi-search local-search-input-icon" aria-hidden="true"></span>
          <input
            ref="input"
            v-model="query"
            class="local-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Поиск по wiki"
          />
          <button
            v-if="query"
            class="local-search-reset"
            type="button"
            aria-label="Очистить поиск"
            @click="query = ''"
          >
            ×
          </button>
        </div>

        <div class="local-search-results" role="listbox" aria-label="Результаты поиска">
          <button
            v-for="(result, index) in results"
            :key="result.id"
            class="local-search-result"
            :class="{ selected: index === selectedIndex }"
            type="button"
            role="option"
            :aria-selected="index === selectedIndex"
            @mouseenter="selectedIndex = index"
            @click="goToResult(result)"
          >
            <span class="local-search-result-meta">
              {{ result.category }}
              <span v-if="result.titles.length"> / {{ result.titles.join(' / ') }}</span>
            </span>
            <span class="local-search-result-title" v-html="highlight(result.title)"></span>
            <span
              v-if="result.snippet"
              class="local-search-result-snippet"
              v-html="highlight(result.snippet)"
            ></span>
          </button>

          <div v-if="query && !results.length" class="local-search-empty">
            Нет результатов
          </div>
        </div>
      </section>
    </div>
  </Teleport>
</template>

<style scoped>
.local-search-button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 42px;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid #3a3a3a;
  border-radius: 10px;
  background: #1a1a1a;
  color: var(--vp-c-text-2);
  font: inherit;
  cursor: pointer;
  transition:
    border-color 0.2s,
    background-color 0.2s,
    color 0.2s;
}

.local-search-button:hover {
  border-color: var(--vp-c-brand-1);
  background: #1f1f1f;
  color: var(--vp-c-text-1);
}

.local-search-icon {
  flex: 0 0 auto;
  width: 16px;
  height: 16px;
}

.local-search-label {
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: 14px;
}

.local-search-keys {
  flex: 0 0 auto;
  padding: 3px 7px;
  border: 1px solid #3a3a3a;
  border-radius: 5px;
  background: #262626;
  font-size: 12px;
  line-height: 1;
  color: var(--vp-c-text-3);
}

.local-search-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 80px 16px 24px;
  background: rgba(0, 0, 0, 0.58);
  backdrop-filter: blur(18px);
}

.local-search-dialog {
  width: min(760px, 100%);
  max-height: min(720px, calc(100vh - 112px));
  overflow: hidden;
  border: 1px solid #343434;
  border-radius: 12px;
  background: #111;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
}

.local-search-input-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 58px;
  padding: 0 16px;
  border-bottom: 1px solid #282828;
}

.local-search-input-icon {
  width: 18px;
  height: 18px;
  color: var(--vp-c-brand-1);
}

.local-search-input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--vp-c-text-1);
  font: inherit;
  font-size: 17px;
}

.local-search-input::-webkit-search-cancel-button {
  display: none;
}

.local-search-reset {
  width: 30px;
  height: 30px;
  border: 1px solid #333;
  border-radius: 7px;
  background: #1c1c1c;
  color: var(--vp-c-text-2);
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}

.local-search-results {
  max-height: calc(min(720px, 100vh - 112px) - 59px);
  overflow-y: auto;
  padding: 8px;
}

.local-search-result {
  display: grid;
  width: 100%;
  gap: 5px;
  padding: 12px 13px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.local-search-result.selected,
.local-search-result:hover {
  border-color: rgba(229, 196, 99, 0.32);
  background: rgba(229, 196, 99, 0.09);
}

.local-search-result-meta {
  overflow: hidden;
  color: var(--vp-c-text-3);
  font-size: 12px;
  line-height: 1.35;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.local-search-result-title {
  color: var(--vp-c-text-1);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.35;
}

.local-search-result-snippet {
  display: -webkit-box;
  overflow: hidden;
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.local-search-empty {
  padding: 28px 16px;
  color: var(--vp-c-text-2);
  text-align: center;
}

:deep(mark) {
  border-radius: 3px;
  background: rgba(229, 196, 99, 0.28);
  color: var(--vp-c-text-1);
}

@media (max-width: 640px) {
  .local-search-overlay {
    padding: 56px 10px 14px;
  }

  .local-search-dialog {
    max-height: calc(100vh - 70px);
  }

  .local-search-results {
    max-height: calc(100vh - 129px);
  }
}
</style>
