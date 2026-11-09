import {
  CatalogPaginationStyled as PaginationStyled,
  PaginationButtonStyled,
  PaginationLinkStyled,
  PaginationInfoStyled,
} from '../../components/Pagination/styles'
import {
  CatalogTitleStyled,
  ConceptsViewStyled,
  ConceptsViewListStyled,
  ConceptItemStyled,
  ConceptItemTitleStyled,
  ConceptItemDescriptionStyled,
} from './styles'
import { MarkdownStyled } from '../../components/Markdown/styles'
import type * as React from 'react'
import { Link } from 'react-router'
import { ArticleByline } from '../../components/Article/ArticleByline'
import { conceptPages } from './data'

export const ConceptsPage: React.FC<{ pageNumber: number }> = ({
  pageNumber,
}) => (
  <>
    <CatalogTitleStyled tabIndex={-1}>Концепты</CatalogTitleStyled>
    <ConceptsViewStyled>
      <ConceptsViewListStyled>
        {conceptPages[pageNumber - 1].map((concept) => (
          <ConceptItemStyled key={concept.path}>
            <Link to={concept.path}>
              <ConceptItemTitleStyled>{concept.title}</ConceptItemTitleStyled>
            </Link>
            <ConceptItemDescriptionStyled>
              <MarkdownStyled>
                <p>{concept.description}</p>
              </MarkdownStyled>
            </ConceptItemDescriptionStyled>
            <ArticleByline data={concept} />
          </ConceptItemStyled>
        ))}
      </ConceptsViewListStyled>
      <PaginationStyled aria-label="Страницы базы знаний">
        {pageNumber > 1 ? (
          <PaginationLinkStyled
            to={
              pageNumber === 2
                ? '/concepts'
                : `/concepts?page=${pageNumber - 1}`
            }
          >
            Назад
          </PaginationLinkStyled>
        ) : (
          <PaginationButtonStyled disabled>Назад</PaginationButtonStyled>
        )}
        <PaginationInfoStyled>
          Страница {pageNumber} из {conceptPages.length}
        </PaginationInfoStyled>
        {pageNumber < conceptPages.length ? (
          <PaginationLinkStyled to={`/concepts?page=${pageNumber + 1}`}>
            Вперёд
          </PaginationLinkStyled>
        ) : (
          <PaginationButtonStyled disabled>Вперёд</PaginationButtonStyled>
        )}
      </PaginationStyled>
    </ConceptsViewStyled>
  </>
)
