import type { PageSeo } from '../../../seo'
export const seo: PageSeo = {
  path: '/services/modx-migration',
  title: 'Постепенная миграция сайта с MODX',
  description:
    'Постепенная и управляемая миграция существующего сайта с MODX на современный стек.',
  type: 'WebPage',
  breadcrumbs: [
    {
      name: 'Главная',
      path: '/',
    },
    {
      name: 'Постепенная миграция сайта с MODX',
      path: '/services/modx-migration',
    },
  ],
  entity: {
    '@type': 'Service',
    name: 'Постепенная миграция сайта с MODX',
    provider: {
      '@type': 'Organization',
      name: 'MODX.Club',
      url: 'https://modx.club/',
    },
  },
}
