import type * as React from 'react'
import { Link } from 'react-router'
import { ArticleByline } from '../../components/Article/ArticleByline'
import { conceptPages } from './data'

export const ConceptsPage: React.FC<{ pageNumber: number }> = ({
  pageNumber,
}) => (
  <>
    <h1 className="catalog-title" tabIndex={-1}>
      Концепты
    </h1>
    <div className="sc-68a340fd-1 csEtZh">
      <div className="sc-68a340fd-0 bRKbdE">
        {conceptPages[pageNumber - 1].map((concept) => (
          <article key={concept.path} className="sc-26117dc-4 jTCBko">
            <Link to={concept.path}>
              <h3 className="sc-26117dc-1 iXbHTl">{concept.title}</h3>
            </Link>
            <div className="sc-26117dc-2 dxMSBf">
              <div className="sc-393fa0b6-0 laHoxW">
                <p>{concept.description}</p>
              </div>
            </div>
            <ArticleByline data={concept} />
          </article>
        ))}
      </div>
      <nav className="sc-af3c7750-0 dgjghH" aria-label="Страницы базы знаний">
        {pageNumber > 1 ? (
          <Link
            className="sc-af3c7750-1 ftJxmR"
            to={
              pageNumber === 2
                ? '/concepts'
                : `/concepts?page=${pageNumber - 1}`
            }
          >
            Назад
          </Link>
        ) : (
          <button disabled className="sc-af3c7750-1 ftJxmR">
            Назад
          </button>
        )}
        <span className="sc-af3c7750-2 eCjqDU">
          Страница {pageNumber} из {conceptPages.length}
        </span>
        {pageNumber < conceptPages.length ? (
          <Link
            className="sc-af3c7750-1 ftJxmR"
            to={`/concepts?page=${pageNumber + 1}`}
          >
            Вперёд
          </Link>
        ) : (
          <button disabled className="sc-af3c7750-1 ftJxmR">
            Вперёд
          </button>
        )}
      </nav>
    </div>
  </>
)
