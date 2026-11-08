import type { PageSeo } from '../../seo'
import { conceptPages } from './data'

export const getConceptsSeo = (pageNumber: number): PageSeo => ({
  title: `База знаний MODX${pageNumber > 1 ? ` — страница ${pageNumber}` : ''} | modx.club`,
  description:
    'База знаний MODX-Клуба: архитектура MODX, компоненты, инфраструктура и постепенная модернизация существующих сайтов.',
  path: pageNumber === 1 ? '/concepts' : `/concepts?page=${pageNumber}`,
  type: 'CollectionPage',
  breadcrumbs: [
    { name: 'Главная', path: '/' },
    { name: 'База знаний', path: '/concepts' },
    ...(pageNumber > 1
      ? [
          {
            name: `Страница ${pageNumber}`,
            path: `/concepts?page=${pageNumber}`,
          },
        ]
      : []),
  ],
  items: conceptPages[pageNumber - 1].map((concept) => ({
    name: concept.title,
    path: concept.path,
  })),
})
