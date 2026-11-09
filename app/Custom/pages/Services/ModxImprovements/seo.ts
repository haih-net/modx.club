import type { PageSeo } from '../../../seo'
export const seo: PageSeo = {
  path: '/services/modx-improvements',
  title: 'Доработка существующего сайта на MODX',
  description: 'Доработка и развитие существующих сайтов на MODX.',
  type: 'WebPage',
  breadcrumbs: [
    {
      name: 'Главная',
      path: '/',
    },
    {
      name: 'Доработка существующего сайта на MODX',
      path: '/services/modx-improvements',
    },
  ],
  entity: {
    '@type': 'Service',
    name: 'Доработка существующего сайта на MODX',
    provider: {
      '@type': 'Organization',
      name: 'MODX.Club',
      url: 'https://modx.club/',
    },
  },
}
