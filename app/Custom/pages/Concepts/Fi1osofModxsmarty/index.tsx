import type * as React from 'react'
import { Article } from '../../../components/Article'
import { article } from './data'
import { Link } from 'react-router'
export const Fi1osofModxsmartyPage: React.FC = () => (
  <Article data={article} titleTag="h1">
    <p>
      modxSmarty появился в конце 2012 года как практическое развитие идеи{' '}
      <Link to="/concepts/fi1osof-phptemplates">phpTemplates</Link>. Вместо
      универсального механизма подключения любого шаблонизатора он решал
      наиболее востребованный сценарий напрямую — интегрировал Smarty с MODX.
    </p>
    <p>
      В Smarty-шаблонах оставался доступ к <code>{'$modx'}</code>, MODX API,
      сниппетам, чанкам, настройкам и другим элементам системы. При этом сами
      шаблоны могли храниться в файлах и использовать привычные средства
      полноценного шаблонизатора вместо построения всего frontend на синтаксисе
      MODX-парсера.
    </p>
    <p>
      Архитектурно это позволяло яснее отделять представление от прикладной
      логики. Особенно хорошо подход раскрывался вместе с modxSite: Smarty
      отвечал за presentation layer, а повторно используемые операции и
      получение данных постепенно концентрировались в processors.
    </p>
    <p>
      Сегодня это разделение интересно уже в контексте модернизации старых
      проектов. Если прикладная логика действительно осталась за границей
      Smarty-шаблонов, старый frontend можно не переносить: вместо него
      создаётся новый интерфейс, а существующие backend-операции продолжают
      работать.
    </p>
    <p>
      modxSmarty входит в общую{' '}
      <Link to="/concepts/fi1osof-components">
        экосистему компонентов Fi1osof
      </Link>
      . Архив компонента и описание API сохранились в официальном каталоге MODX:{' '}
      <a
        href="https://extras.modx.com/package/modxsmarty"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://extras.modx.com/package/modxsmarty
      </a>
    </p>
  </Article>
)
