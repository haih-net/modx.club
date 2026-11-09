import type { PageSeo } from '../../../seo'
export const seo: PageSeo = {
  path: '/services/modx-audit',
  title: 'Аудит MODX-проекта',
  description:
    'Технический аудит существующего сайта на MODX перед поддержкой, обновлением или миграцией.',
  type: 'WebPage',
  breadcrumbs: [
    {
      name: 'Главная',
      path: '/',
    },
    {
      name: 'Аудит MODX-проекта',
      path: '/services/modx-audit',
    },
  ],
  entity: {
    '@type': 'Service',
    name: 'Аудит MODX-проекта',
    provider: {
      '@type': 'Organization',
      name: 'MODX.Club',
      url: 'https://modx.club/',
    },
  },
}
