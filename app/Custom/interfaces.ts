export interface StaticPage {
  path: string
  file: string
  locale: string
  title: string
  description: string
  alternate: { lang: string; path: string }[]
  header: string
  footer: string
  mainClass: string
  shellClass: string
  outerClass: string
  jsonLd: unknown[]
  raw: string
  count?: number
}
export interface PageData {
  page: StaticPage
  html: string
}

export type SiteLayoutData = Pick<
  StaticPage,
  'locale' | 'header' | 'footer' | 'mainClass' | 'shellClass' | 'outerClass'
>
