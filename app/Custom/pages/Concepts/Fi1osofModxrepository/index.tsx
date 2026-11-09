import type * as React from 'react'
import { Article } from '../../../components/Article'
import { article } from './data'
import { Link } from 'react-router'
export const Fi1osofModxrepositoryPage: React.FC = () => (
  <Article data={article} titleTag="h1">
    <p>
      modxRepository был создан в 2012 году для развёртывания собственного
      репозитория транспортных пакетов MODX Revolution.
    </p>
    <p>
      MODX уже имел пакетный менеджер и транспортные пакеты, но собственный
      разработчик или студия зависели от внешней инфраструктуры распространения.
      modxRepository позволял поднять собственный источник пакетов и
      устанавливать из него свои дополнения стандартными средствами MODX.
    </p>
    <p>
      Это особенно важно в контексте общей экосистемы компонентов. Когда
      появляются собственные{' '}
      <Link to="/concepts/fi1osof-phptemplates">phpTemplates</Link>,{' '}
      <Link to="/concepts/fi1osof-modxsmarty">modxSmarty</Link>,{' '}
      <Link to="/concepts/fi1osof-modxsite">modxSite</Link> и другие базовые
      пакеты, нужен механизм, через который они могут устанавливаться и
      обновляться как нормальные зависимости проекта.
    </p>
    <p>
      Таким образом, modxRepository превращал набор исходников в
      распространяемую экосистему. Компоненты можно было собирать,
      версионировать, публиковать и подключать через стандартный package manager
      MODX, не копируя код вручную между проектами.
    </p>
    <p>
      modxRepository входит в общую{' '}
      <Link to="/concepts/fi1osof-components">
        экосистему компонентов Fi1osof
      </Link>
      . История создания собственного репозитория описана в публикации 2012 года
      на Habr:{' '}
      <a
        href="https://habr.com/ru/articles/163077/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://habr.com/ru/articles/163077/
      </a>
    </p>
  </Article>
)
