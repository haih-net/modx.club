export interface NavigationItem {
  label: string
  href: string
}
export interface FooterData {
  description: string
  columns: { title: string; items: NavigationItem[] }[]
  copyright: string
}
export const navigation: NavigationItem[] = [
  {
    label: 'Услуги',
    href: '/services',
  },
  {
    label: 'База знаний',
    href: '/concepts',
  },
  {
    label: 'О Клубе',
    href: '/about',
  },
]
export const footer: FooterData = {
  description:
    'Управляемая модернизация сайтов на MODX: контейнеризация, параллельный фронтенд, постепенная замена платформы без простоев и потери SEO.',
  columns: [
    {
      title: 'Продукт',
      items: [
        {
          label: 'Как это работает',
          href: '/#how',
        },
        {
          label: 'Этапы переноса',
          href: '/#how',
        },
        {
          label: 'Технологии',
          href: '/#tech',
        },
        {
          label: 'Гарантии',
          href: '/#guarantees',
        },
      ],
    },
    {
      title: 'Ресурсы',
      items: [
        {
          label: 'О Клубе',
          href: '/about',
        },
      ],
    },
  ],
  copyright: '© 2013–2026 modx.club — Безопасная модернизация MODX-сайтов',
}
