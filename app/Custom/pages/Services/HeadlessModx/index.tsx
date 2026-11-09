import type * as React from 'react'
import { Article } from '../../../components/Article'
import { article } from './data'
export const HeadlessModxPage: React.FC = () => (
  <Article data={article} titleTag="h1">
    <p>
      Headless-переход позволяет перестать использовать MODX как обязательный
      frontend runtime, не выбрасывая сразу его базу, админку и накопленные
      данные.
    </p>
    <p>Типовая схема:</p>
    <p>
      <code>{'современный frontend → API → MODX / xPDO'}</code>
    </p>
    <p>
      На этом этапе MODX ещё может оставаться CMS и backend, но новый frontend
      уже не зависит от chunks, старого parser pipeline и большинства
      presentation-ограничений платформы.
    </p>
    <p>
      Это даёт возможность постепенно подключать Next.js, React, мобильные
      приложения, отдельные сервисы, GraphQL или REST и уже после этого решать,
      какие части MODX действительно стоит заменять дальше.
    </p>
  </Article>
)
