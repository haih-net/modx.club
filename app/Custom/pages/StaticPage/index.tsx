import type * as React from 'react'
import type { PageData } from '../../interfaces'
import { SiteLayout } from '../../components/SiteLayout'
export const StaticPage: React.FC<PageData> = ({ page, html }) => (
  <SiteLayout page={page}>
    <div data-fragment="content" dangerouslySetInnerHTML={{ __html: html }} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: page.title,
          description: page.description,
          url: `https://modx.club${page.path}`,
          inLanguage: page.locale,
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: page.locale === 'en' ? 'Home' : 'Главная',
                item: `https://modx.club${page.locale === 'en' ? '/en/' : '/'}`,
              },
              ...(page.path === '/' || page.path === '/en/'
                ? []
                : [
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: page.title,
                      item: `https://modx.club${page.path}`,
                    },
                  ]),
            ],
          },
        }).replace(/</g, '\\u003c'),
      }}
    />
    {page.jsonLd.map((data: unknown, index: number) => (
      <script
        key={index}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, '\\u003c'),
        }}
      />
    ))}
  </SiteLayout>
)
