import index from './index.json'
import type { StaticPage, PageData } from '../interfaces'
const pages: StaticPage[] = index
const content: Record<string, string> = import.meta.glob('./pages/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
})
export const findPage = (path: string): PageData | undefined => {
  const page = pages.find((entry: StaticPage): boolean => entry.path === path)
  return page ? { page, html: content[`./pages/${page.file}.html`] } : undefined
}
