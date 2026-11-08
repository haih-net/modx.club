import type { PageSeo } from '../../../seo'
export const seo: PageSeo = {
  path: '/services/modx-support',
  title: 'Поддержка сайта на MODX',
  description: 'Поддержка и сопровождение существующих сайтов на MODX.',
  type: 'WebPage',
  breadcrumbs: [
    {
      name: 'Главная',
      path: '/',
    },
    {
      name: 'Услуги',
      path: '/services',
    },
    {
      name: 'Поддержка сайта на MODX',
      path: '/services/modx-support',
    },
  ],
  entity: {
    '@type': 'Service',
    name: 'Поддержка сайта на MODX',
    serviceType: 'Поддержка и сопровождение сайтов на MODX',
    provider: {
      '@type': 'Organization',
      name: 'MODX.Club',
      url: 'https://modx.club/',
    },
  },
}
