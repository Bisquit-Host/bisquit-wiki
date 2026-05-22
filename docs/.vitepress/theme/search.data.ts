import { createContentLoader } from 'vitepress'
import { buildSearchDocuments, type SearchDocument } from './search/searchDocuments'

export default createContentLoader<SearchDocument[]>('**/*.md', {
  includeSrc: true,
  render: true,
  transform(entries) {
    return buildSearchDocuments(entries)
  }
})
