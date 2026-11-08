import type { PageSeo } from '../../seo'
export const seo: PageSeo = {
  path: '/about',
  title: 'О Клубе — MODX.Club',
  description:
    'Николай Ланец (Fi1osof) — основатель MODX-Клуба. Помогаю перевести MODX-сайты на современные технологии без потери SEO и данных.',
  type: 'AboutPage',
  breadcrumbs: [
    {
      name: 'Главная',
      path: '/',
    },
    {
      name: 'О Клубе — MODX.Club',
      path: '/about',
    },
  ],
  image: {
    src: '/media/77e7041a77aa7a96.jpg',
    alt: 'Николай Ланец (Fi1osof)',
    width: 881,
    height: 1024,
  },
  entity: {
    '@type': 'Person',
    name: 'Николай Ланец',
    url: 'https://modx.club/about',
    image: 'https://modx.club/media/77e7041a77aa7a96.jpg',
  },
}
