import type { PageSeo } from '../../seo'
export const seo: PageSeo = {
  path: '/services',
  title: 'Услуги по поддержке и модернизации MODX',
  description:
    'Поддержка, аудит, доработка, модернизация и постепенная миграция существующих сайтов на MODX.',
  type: 'CollectionPage',
  breadcrumbs: [
    {
      name: 'Главная',
      path: '/',
    },
    {
      name: 'Услуги по поддержке и модернизации MODX',
      path: '/services',
    },
  ],
  items: [
    {
      name: 'Поддержка сайта на MODX',
      path: '/services/modx-support',
    },
    {
      name: 'Доработка существующего сайта на MODX',
      path: '/services/modx-improvements',
    },
    {
      name: 'Исправление и восстановление сайта на MODX',
      path: '/services/modx-fixes',
    },
    {
      name: 'Аудит MODX-проекта',
      path: '/services/modx-audit',
    },
    {
      name: 'Обновление MODX и PHP',
      path: '/services/modx-upgrade',
    },
    {
      name: 'Постепенная миграция сайта с MODX',
      path: '/services/modx-migration',
    },
    {
      name: 'Headless MODX и современный frontend',
      path: '/services/headless-modx',
    },
  ],
}
