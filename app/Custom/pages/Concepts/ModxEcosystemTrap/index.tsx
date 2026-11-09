import type * as React from 'react'
import { Article } from '../../../components/Article'
import { article } from './data'
export const ModxEcosystemTrapPage: React.FC = () => (
  <Article data={article} titleTag="h1">
    <p>
      У pdoTools и miniShop есть очевидное достоинство: они сделали MODX намного
      удобнее для массового интегратора.
    </p>
    <p>
      Нужно вывести каталог, фильтры, меню, пагинацию, товары, корзину, заказ?
      Во многих случаях не надо проектировать приложение. Достаточно поставить
      компоненты, передать параметры, написать чанки и получить результат.
    </p>
    <p>На старте это очень эффективно.</p>
    <p>Проблема начинается позже.</p>
    <h2>Что именно произошло</h2>
    <p>У MODX уже есть собственный application stack:</p>
    <p>
      <code>{'xPDO → models → processors → resources → parser'}</code>
    </p>
    <p>Поверх него появился ещё один универсальный слой:</p>
    <p>
      <code>
        {'MODX → pdoTools / pdoFetch → Fenom / chunks → многочисленные Extras'}
      </code>
    </p>
    <p>А ecommerce добавляет следующий:</p>
    <p>
      <code>
        {
          'MODX → pdoTools → miniShop2 → mSearch2 / mFilter2 / addons → project code'
        }
      </code>
    </p>
    <p>
      Каждый отдельный слой может быть вполне полезен. Но вместе они создают
      систему, где проект зависит уже не просто от MODX, а от{' '}
      <strong>
        конкретной исторической комбинации MODX + pdoTools + miniShop + Extras +
        их версий и соглашений
      </strong>
      .
    </p>
    <p>Это и есть цена быстрого старта.</p>
    <h2>pdoTools не убрал сложность — он её спрятал</h2>
    <p>
      В pdoFetch можно декларативно задать <code>{'class'}</code>,{' '}
      <code>{'where'}</code>, <code>{'select'}</code>, joins, TVs, sorting,
      grouping, шаблон вывода и получить готовый результат.
    </p>
    <p>
      Для интегратора это прекрасно: огромное количество типовых задач решается
      без собственного PHP-кода.
    </p>
    <p>
      Но SQL, xPDO, ACL, TV, выборка данных и rendering никуда не исчезли. Они
      просто переехали внутрь большого универсального runtime и его
      конфигурации.
    </p>
    <p>В простом проекте это экономия.</p>
    <p>В сложном проекте приходится понимать одновременно:</p>
    <ul>
      <li>MODX;</li>
      <li>xPDO;</li>
      <li>pdoTools;</li>
      <li>Fenom;</li>
      <li>конкретные Extras;</li>
      <li>особенности их взаимодействия.</li>
    </ul>
    <p>Абстракция начинает протекать.</p>
    <p>
      <a
        href="https://github.com/modx-pro/pdoTools"
        target="_blank"
        rel="noopener noreferrer"
      >
        Исходники pdoTools
      </a>
    </p>
    <h2>miniShop усилил тот же подход</h2>
    <p>
      miniShop2 дал рынку очень много готового ecommerce-функционала. Но
      архитектурно это уже отдельный framework layer внутри MODX: собственные
      модели, handlers, события, сервисы, product abstraction, snippets и тесная
      связь с pdoTools.
    </p>
    <p>
      В актуальном MiniShop3 зависимость от pdoTools остаётся обязательной.
      README прямо указывает <code>{'pdoTools 3.x'}</code> как required
      dependency.
    </p>
    <p>
      <a
        href="https://github.com/modx-pro/MiniShop3"
        target="_blank"
        rel="noopener noreferrer"
      >
        MiniShop3 на GitHub
      </a>
    </p>
    <p>
      Сам по себе факт зависимости не преступление. Проблема в том, что каждое
      новое поколение продолжает тащить исторический стек дальше.
    </p>
    <h2>Что происходит при обновлениях</h2>
    <p>
      На длинной дистанции такой стек неизбежно начинает жить как единый
      организм.
    </p>
    <p>
      Меняется PHP — ломается один слой. Обновляется MODX — всплывает
      несовместимость в другом. Меняется pdoTools — начинает вести себя иначе
      компонент поверх него.
    </p>
    <p>
      Свежий пример из 2026 года: релиз pdoTools 3.0.3-pl устанавливался без{' '}
      <code>{'vendor'}</code> и давал fatal error на чистом MODX 3.2.
    </p>
    <p>
      <a
        href="https://github.com/modx-pro/pdoTools/issues/394"
        target="_blank"
        rel="noopener noreferrer"
      >
        Issue #394
      </a>
    </p>
    <p>
      В списке открытых issues есть проблемы совместимости с MiniShop3, PHP 8,
      TV filters, Fenom и другими частями стека.
    </p>
    <p>
      <a
        href="https://github.com/modx-pro/pdoTools/issues"
        target="_blank"
        rel="noopener noreferrer"
      >
        Issues pdoTools
      </a>
    </p>
    <p>
      Это не доказательство того, что pdoTools «плохой». Это нормальное
      следствие большого слоя совместимости, который годами растёт поверх
      другого большого слоя совместимости.
    </p>
    <h2>Был другой подход</h2>
    <p>В той же MODX-экосистеме существовал другой путь:</p>
    <p>
      <code>{'xPDO → processors → API → presentation'}</code>
    </p>
    <p>На нём строились modxSite, modxSmarty и shopModx.</p>
    <p>
      Идея была простой:{' '}
      <strong>
        не писать второй framework поверх MODX там, где само ядро уже даёт
        модели, relations, processors и extension points.
      </strong>
    </p>
    <p>
      <a
        href="https://github.com/MODX-Club/modxSite"
        target="_blank"
        rel="noopener noreferrer"
      >
        modxSite
      </a>{' '}
      использовал processors как application/API layer.
    </p>
    <p>
      <a
        href="https://github.com/MODX-Club/modxSmarty"
        target="_blank"
        rel="noopener noreferrer"
      >
        modxSmarty
      </a>{' '}
      выносил presentation в нормальный файловый template engine, не ломая при
      этом нативный parser MODX.
    </p>
    <p>
      <a
        href="https://github.com/MODX-Club/shopModx"
        target="_blank"
        rel="noopener noreferrer"
      >
        shopModx
      </a>{' '}
      отделял ecommerce-сущности от presentation и не пытался превращать весь
      магазин в один универсальный компонентный runtime.
    </p>
    <h2>«Но так же дольше»</h2>
    <p>Нет. Не обязательно.</p>
    <p>
      Так дольше для человека, который умеет только собирать сайт из готовых
      компонентов.
    </p>
    <p>
      Программист, который нормально знает PHP, xPDO, SQL, наследование и
      processors, решает многие задачи не медленнее. Просто скорость достигается
      не количеством установленных Extras, а{' '}
      <strong>уровнем владения базовыми инструментами</strong>.
    </p>
    <p>И вот здесь был настоящий конфликт подходов.</p>
    <p>
      Не: "<strong>быстро</strong> против <strong>правильно</strong>", а "
      <strong>интеграторская скорость за счёт готовых абстракций</strong> против{' '}
      <strong>
        программистской скорости за счёт квалификации и более прямой архитектуры
      </strong>
      ".
    </p>
    <h2>Кто в итоге заплатил</h2>
    <p>
      Рынок выбрал первое. И это понятно: такой подход легче продавать, легче
      тиражировать и проще масштабировать через большое количество интеграторов.
    </p>
    <p>Но через десять лет стоимость решения оплачивает уже не интегратор.</p>
    <p>Её оплачивает собственник сайта.</p>
    <p>
      Он получает проект, в котором бизнес-знание распределено между MODX,
      pdoTools, miniShop, десятками Extras, чанками, TV, snippets, plugins и
      человеком, который когда-то всё это собрал.
    </p>
    <p>
      Когда этот человек исчезает, документацией проекта внезапно оказывается
      его голова.
    </p>
    <h2>Вывод</h2>
    <p>
      Экосистема pdoTools/miniShop действительно ускорила создание MODX-сайтов.
    </p>
    <p>
      Но{' '}
      <strong>
        ускорение старта и управляемость проекта через десять лет — разные
        задачи
      </strong>
      .
    </p>
    <p>В первом рынок выиграл.</p>
    <p>Во втором накопил долг.</p>
    <p>
      И теперь этот долг приходится распутывать тем бизнесам, которые когда-то
      получили быстрый и недорогой старт, а сегодня хотят нормальный API,
      современный frontend, автоматизацию, AI и возможность вообще перестать
      зависеть от MODX.
    </p>
  </Article>
)
