import type { PageSeo } from '../../seo'
export const seo: PageSeo = {
  path: '/why-not',
  title: 'Почему мы этого не делаем',
  description:
    'Что мы принципиально не предлагаем владельцам MODX-сайтов и почему.',
  type: 'CollectionPage',
  breadcrumbs: [
    {
      name: 'Главная',
      path: '/',
    },
    {
      name: 'Почему мы этого не делаем',
      path: '/why-not',
    },
  ],
  items: [
    {
      name: 'Почему мы не разрабатываем новые сайты на MODX',
      path: '/why-not/modx-development',
    },
    {
      name: 'Почему мы не переписываем MODX-сайт целиком с нуля',
      path: '/why-not/big-bang-rewrite',
    },
  ],
}
