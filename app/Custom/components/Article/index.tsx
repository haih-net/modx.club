import type * as React from 'react'
import { Link } from 'react-router'
import { ArticleStyled } from './styles'
import { ArticleData } from './interfaces'
import { ArticleByline } from './ArticleByline'

export const Article: React.FC<
  React.PropsWithChildren<{
    data: ArticleData
    titleTag?: 'h1' | 'h3'
  }>
> = ({ data, titleTag: Heading = 'h1', children }) => (
  <ArticleStyled className="sc-8c77d27c-1 hQpjlf">
    <div className="sc-26117dc-4 kRxhDO">
      <Link to={data.path}>
        <Heading
          className="sc-26117dc-1 iXbHTl"
          tabIndex={Heading === 'h1' ? -1 : undefined}
        >
          {data.title}
        </Heading>
      </Link>
      <div className="sc-393fa0b6-0 laHoxW">{children}</div>
      <ArticleByline data={data} />
    </div>
  </ArticleStyled>
)
