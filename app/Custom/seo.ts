import type { MetaDescriptor } from 'react-router'
import type { PageData } from './interfaces'
import type { SchemaNode } from '../components/seo/JsonLd/types'

export interface PageSeo {
  path: string
  title: string
  description: string
  type: 'WebPage' | 'CollectionPage' | 'AboutPage'
  breadcrumbs: { name: string; path: string }[]
  items?: { name: string; path: string }[]
  entity?: SchemaNode
  image?: { src: string; alt: string; width: number; height: number }
}

const canonicalUrl = (path: string): string =>
  new URL(path, 'https://modx.club').href

export const createPageMeta = (seo?: PageSeo): MetaDescriptor[] => {
  if (!seo) {
    return [
      { title: '404 — modx.club' },
      { name: 'robots', content: 'noindex' },
    ]
  }
  const url = canonicalUrl(seo.path)
  const graph: SchemaNode[] = [
    {
      '@type': 'WebSite',
      '@id': 'https://modx.club/#website',
      name: 'MODX.Club',
      url: 'https://modx.club/',
      inLanguage: 'ru',
    },
    {
      '@type': seo.type,
      '@id': `${url}#webpage`,
      url,
      name: seo.title,
      description: seo.description,
      inLanguage: 'ru',
      isPartOf: { '@id': 'https://modx.club/#website' },
      breadcrumb: { '@id': `${url}#breadcrumbs` },
      ...(seo.entity ? { mainEntity: { '@id': `${url}#entity` } } : {}),
      ...(seo.items ? { mainEntity: { '@id': `${url}#items` } } : {}),
      ...(seo.image ? { primaryImageOfPage: { '@id': `${url}#image` } } : {}),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumbs`,
      itemListElement: seo.breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: canonicalUrl(crumb.path),
      })),
    },
  ]
  if (seo.items) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#items`,
      numberOfItems: seo.items.length,
      itemListElement: seo.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: canonicalUrl(item.path),
      })),
    })
  }
  if (seo.entity) {
    graph.push({
      ...seo.entity,
      '@id': `${url}#entity`,
      url,
      description: seo.description,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      ...(seo.entity['@type'] === 'Article' ? { inLanguage: 'ru' } : {}),
    })
  }
  const tags: MetaDescriptor[] = [
    { title: seo.title },
    { name: 'description', content: seo.description },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:site_name', content: 'MODX.Club' },
    { property: 'og:locale', content: 'ru_RU' },
    { property: 'og:title', content: seo.title },
    { property: 'og:description', content: seo.description },
    { property: 'og:url', content: url },
    {
      property: 'og:type',
      content: seo.entity?.['@type'] === 'Article' ? 'article' : 'website',
    },
    {
      name: 'twitter:card',
      content: seo.image ? 'summary_large_image' : 'summary',
    },
    { name: 'twitter:title', content: seo.title },
    { name: 'twitter:description', content: seo.description },
  ]
  if (seo.image) {
    const imageUrl = canonicalUrl(seo.image.src)
    graph.push({
      '@type': 'ImageObject',
      '@id': `${url}#image`,
      url: imageUrl,
      width: seo.image.width,
      height: seo.image.height,
      caption: seo.image.alt,
    })
    tags.push(
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:alt', content: seo.image.alt },
      { property: 'og:image:width', content: String(seo.image.width) },
      { property: 'og:image:height', content: String(seo.image.height) },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:image:alt', content: seo.image.alt },
    )
  }
  tags.push({
    'script:ld+json': { '@context': 'https://schema.org', '@graph': graph },
  })
  return tags
}
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
      ]
    : [{ title: '404 — modx.club' }, { name: 'robots', content: 'noindex' }]
