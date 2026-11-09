import type { PageSeo } from '../../../seo'
export const seo: PageSeo = {
  path: '/services/modx-fixes',
  title: 'Исправление и восстановление сайта на MODX',
  description:
    'Исправление ошибок и восстановление работоспособности сайтов на MODX.',
  type: 'WebPage',
  breadcrumbs: [
    {
      name: 'Главная',
      path: '/',
    },
    {
      name: 'Исправление и восстановление сайта на MODX',
      path: '/services/modx-fixes',
    },
  ],
  entity: {
    '@type': 'Service',
    name: 'Исправление и восстановление сайта на MODX',
    provider: {
      '@type': 'Organization',
      name: 'MODX.Club',
      url: 'https://modx.club/',
    },
  },
}
