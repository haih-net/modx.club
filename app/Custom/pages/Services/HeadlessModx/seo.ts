import type { PageSeo } from '../../../seo'
export const seo: PageSeo = {
  path: '/services/headless-modx',
  title: 'Headless MODX и современный frontend',
  description:
    'Переход существующего MODX-проекта к headless-архитектуре и современному frontend.',
  type: 'WebPage',
  breadcrumbs: [
    {
      name: 'Главная',
      path: '/',
    },
    {
      name: 'Headless MODX и современный frontend',
      path: '/services/headless-modx',
    },
  ],
  entity: {
    '@type': 'Service',
    name: 'Headless MODX и современный frontend',
    provider: {
      '@type': 'Organization',
      name: 'MODX.Club',
      url: 'https://modx.club/',
    },
  },
}
