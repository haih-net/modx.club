import type * as React from 'react'
import { Article } from '../../../components/Article'
import { article } from './data'
export const ModxAuditPage: React.FC = () => (
  <Article data={article} titleTag="h1">
    <p>
      Аудит нужен не ради красивого PDF. Он нужен, чтобы понять,{' '}
      <strong>
        что именно держит проект в legacy и где находятся реальные риски
      </strong>
      .
    </p>
    <p>Проверяем:</p>
    <ul>
      <li>версию MODX и PHP;</li>
      <li>pdoTools, miniShop и другие компоненты;</li>
      <li>кастомные snippets, plugins, processors и модели;</li>
      <li>структуру данных и ресурсов;</li>
      <li>зависимости между frontend и MODX runtime;</li>
      <li>сервер, окружение, бэкапы и deployment;</li>
      <li>URL, SEO-критичные элементы и внешние интеграции.</li>
    </ul>
    <p>
      На выходе получается карта проекта: что можно оставить, что нужно
      стабилизировать, что мешает развитию и в каком порядке безопаснее менять
      систему.
    </p>
  </Article>
)
