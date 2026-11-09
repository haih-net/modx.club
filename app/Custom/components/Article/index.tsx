import type * as React from 'react'
import { Link } from 'react-router'
import { ArticleStyled, ArticleCardStyled, ArticleTitleStyled } from './styles'
import { MarkdownStyled } from '../Markdown/styles'
import { ArticleData } from './interfaces'
import { ArticleByline } from './ArticleByline'

export const Article: React.FC<
  React.PropsWithChildren<{
    data: ArticleData
    titleTag?: 'h1' | 'h3'
  }>
> = ({ data, titleTag: Heading = 'h1', children }) => (
  <ArticleStyled>
    <ArticleCardStyled>
      <Link to={data.path}>
        <ArticleTitleStyled
          as={Heading}
          tabIndex={Heading === 'h1' ? -1 : undefined}
        >
          {data.title}
        </ArticleTitleStyled>
      </Link>
      <MarkdownStyled>{children}</MarkdownStyled>
      <ArticleByline data={data} />
    </ArticleCardStyled>
  </ArticleStyled>
)
