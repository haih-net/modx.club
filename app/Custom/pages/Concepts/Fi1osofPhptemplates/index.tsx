import type * as React from 'react'
import { Article } from '../../../components/Article'
import { article } from './data'
import { Link } from 'react-router'
export const Fi1osofPhptemplatesPage: React.FC = () => (
  <Article data={article} titleTag="h1">
    <p>
      phpTemplates появился в 2012 году как попытка снять одно из ограничений
      традиционной разработки на MODX: обязательную привязку frontend к
      внутреннему синтаксису шаблонов и парсеру MODX.
    </p>
    <p>
      Компонент позволял статическому MODX-шаблону исполняться как обычный
      PHP-файл. Такой файл мог выступать контроллером, использовать полноценный
      PHP и передавать данные в любой внешний шаблонизатор — например Smarty или
      Twig.
    </p>
    <p>
      В этом была важна не сама возможность писать PHP в шаблоне, а свобода
      выбора presentation layer. MODX сохранял управление ресурсами и
      приложением, но frontend уже не обязан был строиться исключительно на
      чанках и MODX-тегах.
    </p>
    <p>
      На практике основным шаблонизатором в этой архитектуре стал Smarty.
      Поэтому позднее modxSmarty закрыл наиболее востребованный сценарий
      напрямую, и phpTemplates постепенно потерял самостоятельное значение. Тем
      не менее он работал и был важным этапом эволюции подхода.
    </p>
    <p>
      phpTemplates входит в общую{' '}
      <Link to="/concepts/fi1osof-components">
        экосистему компонентов Fi1osof
      </Link>
      . История компонента описана в публикации 2012 года:{' '}
      <a
        href="https://habr.com/ru/articles/160797/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://habr.com/ru/articles/160797/
      </a>
    </p>
  </Article>
)
