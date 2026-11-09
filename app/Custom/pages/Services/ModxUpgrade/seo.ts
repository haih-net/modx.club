import type { PageSeo } from '../../../seo'
export const seo: PageSeo = {
  path: '/services/modx-upgrade',
  title: 'Обновление MODX и PHP',
  description:
    'Безопасное обновление MODX Revolution, PHP и зависимостей существующего проекта.',
  type: 'WebPage',
  breadcrumbs: [
    {
      name: 'Главная',
      path: '/',
    },
    {
      name: 'Обновление MODX и PHP',
      path: '/services/modx-upgrade',
    },
  ],
  entity: {
    '@type': 'Service',
    name: 'Обновление MODX и PHP',
    provider: {
      '@type': 'Organization',
      name: 'MODX.Club',
      url: 'https://modx.club/',
    },
  },
}
