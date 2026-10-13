import type { MetaDescriptor } from 'react-router'
import type { PageData } from './interfaces'
export const pageMeta = (data?: PageData): MetaDescriptor[] =>
  data
    ? [
        { title: data.page.title },
        { name: 'description', content: data.page.description },
        {
          tagName: 'link',
          rel: 'canonical',
          href: `https://modx.club${data.page.path}`,
        },
        { property: 'og:title', content: data.page.title },
        { property: 'og:description', content: data.page.description },
        { property: 'og:url', content: `https://modx.club${data.page.path}` },
        { property: 'og:type', content: 'website' },
        ...data.page.alternate.map((alternate): MetaDescriptor => ({
          tagName: 'link',
          rel: 'alternate',
          hrefLang: alternate.lang,
          href: `https://modx.club${alternate.path}`,
        })),
      ]
    : [{ title: '404 — modx.club' }, { name: 'robots', content: 'noindex' }]
