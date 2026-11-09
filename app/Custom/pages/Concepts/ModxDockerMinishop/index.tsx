import type * as React from 'react'
import { Article } from '../../../components/Article'
import { article } from './data'
import { Link } from 'react-router'
export const ModxDockerMinishopPage: React.FC = () => (
  <Article data={article} titleTag="h1">
    <h2 tabIndex={-1}>modx-docker-minishop</h2>
    <p>
      <code>{'modx-docker-minishop'}</code> — рабочее название
      исследовательского направления внутри{' '}
      <Link to="/concepts/modx-docker">основного проекта modx-docker</Link>,
      посвящённого автоматической установке современного магазина на{' '}
      <code>{'MODX 3 + pdoTools 3 + VueTools + MiniShop3'}</code>{' '}
      непосредственно из исходников.
    </p>
    <p>
      Код эксперимента сейчас находится в ветке{' '}
      <a
        href="https://github.com/MODX-Club/modx-docker/tree/minishop3-native"
        target="_blank"
        rel="noopener noreferrer"
      >
        minishop3-native репозитория MODX-Club/modx-docker
      </a>
      .
    </p>
    <blockquote>
      <p>
        Важно: это пока <strong>research-версия</strong>, а не готовое
        стабильное решение. Сейчас прощупывается само направление: насколько
        удобно и надёжно собирать весь современный MiniShop-стек из
        Git-репозиториев, устанавливать его без ручной работы в Manager и
        использовать такой процесс как часть воспроизводимого runtime.
      </p>
    </blockquote>
    <h2>Зачем это исследуется</h2>
    <p>
      Обычная установка MODX хорошо решается самим <code>{'modx-docker'}</code>:
      нужная версия Revolution берётся из Git, устанавливаются
      Composer-зависимости, собирается core и выполняется unattended setup.
    </p>
    <p>
      Но реальный современный магазин — это уже не только MODX. Минимальный стек
      включает несколько отдельных проектов:
    </p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'MODX 3\n'}</span>
        <span className="code-line">{'+ pdoTools 3\n'}</span>
        <span className="code-line">{'+ VueTools\n'}</span>
        <span className="code-line">{'+ MiniShop3\n'}</span>
      </code>
    </pre>
    <p>
      Если ставить их вручную через Manager, теряется главное преимущество
      воспроизводимого окружения: новый проект уже нельзя полностью восстановить
      одной автоматической процедурой.
    </p>
    <p>Исследовательская ветка проверяет другой подход:</p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'Git source\n'}</span>
        <span className="code-line">{'→ native build\n'}</span>
        <span className="code-line">{'→ MODX transport package\n'}</span>
        <span className="code-line">{'→ native installation\n'}</span>
      </code>
    </pre>
    <p>
      То есть каждый компонент берётся непосредственно из его исходного
      репозитория, собирается штатными средствами самого проекта, после чего
      полученный transport package устанавливается через API MODX.
    </p>
    <h2>Текущий pipeline</h2>
    <p>
      Ветка <code>{'minishop3-native'}</code> расширяет базовую установку MODX
      ещё тремя стадиями:
    </p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'01-07  обычная установка MODX\n'}</span>
        <span className="code-line">{'08     clone packages\n'}</span>
        <span className="code-line">{'09     build packages\n'}</span>
        <span className="code-line">{'10     install packages\n'}</span>
      </code>
    </pre>
    <p>В итоге процесс выглядит примерно так:</p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'clone MODX\n'}</span>
        <span className="code-line">{'→ composer install\n'}</span>
        <span className="code-line">{'→ build MODX core\n'}</span>
        <span className="code-line">{'→ MODX CLI setup\n'}</span>
        <span className="code-line">
          {'→ clone pdoTools / VueTools / MiniShop3\n'}
        </span>
        <span className="code-line">{'→ build каждого компонента\n'}</span>
        <span className="code-line">{'→ получить .transport.zip\n'}</span>
        <span className="code-line">
          {'→ установить transport packages через MODX API\n'}
        </span>
      </code>
    </pre>
    <p>
      Это принципиально отличается от установки готовых пакетов из package
      provider: собирается именно текущее или выбранное состояние исходников.
    </p>
    <h2>Получение исходников компонентов</h2>
    <p>
      На стадии <code>{'08'}</code> создаётся отдельная директория{' '}
      <code>{'_packages'}</code>, куда клонируются репозитории компонентов.
    </p>
    <p>Сейчас исследуется следующий набор:</p>
    <ul>
      <li>
        <code>{'pdoTools'}</code>;
      </li>
      <li>
        <code>{'VueTools'}</code>;
      </li>
      <li>
        <code>{'MiniShop3'}</code>.
      </li>
    </ul>
    <p>
      Идея состоит в том, что в дальнейшем для каждого компонента можно будет
      задавать конкретный Git ref: branch, tag или commit.
    </p>
    <p>
      Тогда можно воспроизвести не абстрактный «последний MiniShop3», а точную
      комбинацию:
    </p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'MODX       <commit/ref>\n'}</span>
        <span className="code-line">{'pdoTools   <commit/ref>\n'}</span>
        <span className="code-line">{'VueTools   <commit/ref>\n'}</span>
        <span className="code-line">{'MiniShop3  <commit/ref>\n'}</span>
      </code>
    </pre>
    <p>Для разработки и отладки самой экосистемы это особенно ценно.</p>
    <h2>Нативная сборка компонентов</h2>
    <p>
      На стадии <code>{'09'}</code> каждый проект собирается собственным штатным
      build-процессом.
    </p>
    <h3>pdoTools 3</h3>
    <p>
      Для pdoTools используются Composer-зависимости и его собственный transport
      builder:
    </p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'composer install\n'}</span>
        <span className="code-line">{'→ build.transport.php\n'}</span>
        <span className="code-line">{'→ pdotools-*.transport.zip\n'}</span>
      </code>
    </pre>
    <h3>VueTools</h3>
    <p>
      VueTools содержит frontend-сборку, поэтому используется Node.js toolchain:
    </p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'npm install\n'}</span>
        <span className="code-line">{'→ npm run build:all\n'}</span>
        <span className="code-line">{'→ PHP build script\n'}</span>
        <span className="code-line">{'→ vuetools-*.transport.zip\n'}</span>
      </code>
    </pre>
    <h3>MiniShop3</h3>
    <p>MiniShop3 требует одновременно PHP- и frontend-сборку:</p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'Composer dependencies\n'}</span>
        <span className="code-line">{'→ Vue Manager build\n'}</span>
        <span className="code-line">{'→ MiniShop3 build script\n'}</span>
        <span className="code-line">{'→ minishop3-*.transport.zip\n'}</span>
      </code>
    </pre>
    <p>
      Таким образом, <code>{'modx-docker'}</code> не пытается заменить
      build-системы компонентов. Он оркестрирует их штатные процессы в одном
      воспроизводимом окружении.
    </p>
    <h2>Установка через нативный MODX Transport API</h2>
    <p>
      Самая интересная часть эксперимента — стадия <code>{'10'}</code>.
    </p>
    <p>
      После сборки компоненты не устанавливаются через браузерный Package
      Manager и не требуют внешнего CLI вроде Gitify. Скрипт bootstrap'ит уже
      установленный MODX, находит созданные <code>{'.transport.zip'}</code>,
      создаёт объекты transport package и вызывает штатную установку через MODX
      API.
    </p>
    <p>Получается цепочка:</p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'source repository\n'}</span>
        <span className="code-line">{'→ official component build\n'}</span>
        <span className="code-line">{'→ .transport.zip\n'}</span>
        <span className="code-line">{'→ MODX Transport API\n'}</span>
        <span className="code-line">{'→ installed Extra\n'}</span>
      </code>
    </pre>
    <p>
      Это сохраняет все стандартные механизмы MODX package installation:
      resolvers, создание таблиц, settings, namespaces, menus и другие действия,
      которые заложены авторами компонента.
    </p>
    <h2>Почему не Composer как общий package manager</h2>
    <p>
      Composer здесь остаётся важной частью сборки, но не используется как
      замена MODX Package Manager.
    </p>
    <p>
      Причина проста: MODX Extra — это не только PHP-код в{' '}
      <code>{'vendor/'}</code>. При установке transport package могут
      создаваться и изменяться объекты MODX, таблицы, системные настройки, меню,
      плагины и другие сущности.
    </p>
    <p>Поэтому разделение ответственности выглядит так:</p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'Git\n'}</span>
        <span className="code-line">{'→ исходники\n'}</span>
        <span className="code-line">{'\n'}</span>
        <span className="code-line">{'Composer / npm\n'}</span>
        <span className="code-line">{'→ build dependencies\n'}</span>
        <span className="code-line">{'\n'}</span>
        <span className="code-line">{'component build scripts\n'}</span>
        <span className="code-line">{'→ transport packages\n'}</span>
        <span className="code-line">{'\n'}</span>
        <span className="code-line">{'MODX Transport API\n'}</span>
        <span className="code-line">{'→ фактическая установка Extras\n'}</span>
      </code>
    </pre>
    <p>
      На текущем этапе это выглядит чище, чем патчить{' '}
      <code>{'composer.json'}</code> MODX и пытаться превратить Composer в
      управляющий слой всей CMS.
    </p>
    <h2>Source-first подход</h2>
    <p>
      Главная особенность текущего эксперимента — компоненты устанавливаются не
      из готового каталога пакетов, а собираются прямо из Git.
    </p>
    <p>У такого подхода есть несколько интересных сценариев.</p>
    <h3>Разработка MiniShop3 и зависимостей</h3>
    <p>Можно одновременно работать с исходниками:</p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'MODX\n'}</span>
        <span className="code-line">{'pdoTools\n'}</span>
        <span className="code-line">{'VueTools\n'}</span>
        <span className="code-line">{'MiniShop3\n'}</span>
      </code>
    </pre>
    <p>и проверять изменения всей цепочки в одном runtime.</p>
    <p>
      Это удобно для воспроизведения багов, тестирования pull requests и
      проверки совместимости между компонентами.
    </p>
    <h3>Точные версии</h3>
    <p>
      В перспективе каждый repository checkout можно привязать к конкретному
      commit. Тогда окружение становится значительно более воспроизводимым, чем
      установка <code>{'latest'}</code> из provider.
    </p>
    <h3>Исследование несовместимостей</h3>
    <p>
      Если конкретные версии MODX, pdoTools или MiniShop3 не собираются вместе,
      compatibility patches можно хранить явно на уровне runtime и
      документировать как часть конкретной комбинации.
    </p>
    <p>
      Уже сейчас при сборке проявляются различия между актуальным MODX и
      ожиданиями build scripts некоторых компонентов. Это хороший пример того,
      почему source integration environment полезен сам по себе.
    </p>
    <h2>Compatibility patches</h2>
    <p>
      В исследовательской ветке уже приходится адаптировать некоторые build-time
      различия между компонентами и MODX.
    </p>
    <p>
      Такие изменения важно рассматривать не как скрытые правки ядра, а как{' '}
      <strong>compatibility layer</strong> конкретного runtime.
    </p>
    <p>В дальнейшем разумно хранить их явно, например:</p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'patches/\n'}</span>
        <span className="code-line">
          {'  modx3-package-builder-compat.patch\n'}
        </span>
      </code>
    </pre>
    <p>
      Это делает причину патча наблюдаемой и позволяет агенту или разработчику
      понимать, почему он существует и к каким версиям относится.
    </p>
    <h2>Что пока сделано упрощённо</h2>
    <p>
      Текущая реализация специально минимальна и предназначена для проверки
      гипотезы.
    </p>
    <p>
      Сейчас набор компонентов и порядок их установки фактически зашиты в
      shell/PHP scripts. Это нормально для research-ветки, но не является
      желаемой конечной архитектурой.
    </p>
    <p>Также пока не решены полностью:</p>
    <ul>
      <li>фиксация точных Git refs всех компонентов;</li>
      <li>lock-файл для комбинации версий;</li>
      <li>повторная сборка при изменении ref;</li>
      <li>корректное определение уже установленного состояния;</li>
      <li>
        строгий fail-fast при ошибке сборки или установки отдельного пакета;
      </li>
      <li>универсальное описание разных наборов Extras;</li>
      <li>управление compatibility patches;</li>
      <li>обновление уже установленного набора компонентов.</li>
    </ul>
    <p>
      Например, простые marker-файлы вида <code>{'.cloned'}</code>,{' '}
      <code>{'.packages-built'}</code> и <code>{'.packages-installed'}</code>{' '}
      удобны для первого прототипа, но позднее должны уступить место сравнению
      desired state и фактического состояния окружения.
    </p>
    <h2>Возможное развитие: installation profiles</h2>
    <p>
      Если подход подтвердит жизнеспособность, конкретный набор MiniShop3 можно
      будет вынести из installer scripts в отдельный профиль.
    </p>
    <p>Условно:</p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'profile: minishop3\n'}</span>
        <span className="code-line">{'\n'}</span>
        <span className="code-line">{'packages:\n'}</span>
        <span className="code-line">{'  - pdoTools\n'}</span>
        <span className="code-line">{'  - VueTools\n'}</span>
        <span className="code-line">{'  - MiniShop3\n'}</span>
      </code>
    </pre>
    <p>
      А базовый <code>{'modx-docker'}</code> останется универсальным механизмом:
    </p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'MODX runtime\n'}</span>
        <span className="code-line">{'+ fetch packages\n'}</span>
        <span className="code-line">{'+ build packages\n'}</span>
        <span className="code-line">{'+ install packages\n'}</span>
      </code>
    </pre>
    <p>
      Тогда MiniShop3 будет не жёстко зашитой особенностью Docker-окружения, а
      одним из готовых сценариев поверх него.
    </p>
    <p>
      Позже аналогичным способом можно будет исследовать и другие наборы
      компонентов.
    </p>
    <h2>Связь с воспроизводимостью проекта</h2>
    <p>
      Это направление хорошо дополняет основную идею{' '}
      <Link to="/concepts/modx-docker">modx-docker</Link>.
    </p>
    <p>Базовый проект отвечает на вопрос:</p>
    <blockquote>
      <p>Как воспроизводимо поднять конкретную версию MODX и её runtime?</p>
    </blockquote>
    <p>
      <code>{'modx-docker-minishop'}</code> исследует следующий уровень:
    </p>
    <blockquote>
      <p>
        Как поверх этого runtime автоматически собрать и установить конкретный
        набор MODX-компонентов непосредственно из их исходников?
      </p>
    </blockquote>
    <p>В перспективе воспроизводимая конфигурация магазина может включать:</p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'MODX ref\n'}</span>
        <span className="code-line">{'PHP version\n'}</span>
        <span className="code-line">{'DB version\n'}</span>
        <span className="code-line">{'pdoTools ref\n'}</span>
        <span className="code-line">{'VueTools ref\n'}</span>
        <span className="code-line">{'MiniShop3 ref\n'}</span>
        <span className="code-line">{'project code\n'}</span>
        <span className="code-line">{'project database/files snapshot\n'}</span>
      </code>
    </pre>
    <p>
      Такое описание уже намного ближе к реальному состоянию проекта, чем просто
      номер версии MODX.
    </p>
    <h2>Связь с AI-разработкой</h2>
    <p>Для AI-агента source-first подход особенно интересен.</p>
    <p>
      Агент получает доступ не только к установленному магазину, но и к
      исходникам всей технологической цепочки. Он может исследовать
      совместимость, видеть Git diff, менять компонент, пересобирать transport
      package, переустанавливать его и проверять результат в том же runtime.
    </p>
    <p>Условно:</p>
    <pre className="language-text">
      <code className="language-text code-highlight">
        <span className="code-line">{'AI agent\n'}</span>
        <span className="code-line">{'   ↓\n'}</span>
        <span className="code-line">{'MODX source\n'}</span>
        <span className="code-line">{'pdoTools source\n'}</span>
        <span className="code-line">{'VueTools source\n'}</span>
        <span className="code-line">{'MiniShop3 source\n'}</span>
        <span className="code-line">{'   ↓\n'}</span>
        <span className="code-line">{'build / install\n'}</span>
        <span className="code-line">{'   ↓\n'}</span>
        <span className="code-line">{'running shop\n'}</span>
        <span className="code-line">{'   ↓\n'}</span>
        <span className="code-line">{'test / diagnose / modify\n'}</span>
      </code>
    </pre>
    <p>
      Это делает окружение полезным не только как автоматический installer, но и
      как экспериментальный SDK для разработки самой MODX-экосистемы.
    </p>
    <h2>Текущий статус</h2>
    <p>
      Сейчас <code>{'modx-docker-minishop'}</code> следует воспринимать именно
      как <strong>исследовательскую ветку</strong>.
    </p>
    <p>
      Задача текущей реализации — не предоставить готовый production workflow, а
      проверить несколько архитектурных гипотез:
    </p>
    <ol>
      <li>
        можно ли полностью автоматизировать современный MiniShop3 stack без
        Manager UI;
      </li>
      <li>удобно ли собирать Extras прямо из Git;</li>
      <li>
        достаточно ли штатных build scripts и Transport API для общего installer
        pipeline;
      </li>
      <li>
        можно ли превратить набор компонентов в воспроизводимый installation
        profile;
      </li>
      <li>насколько такой runtime удобен для разработки и AI-агентов.</li>
    </ol>
    <p>
      По результатам эксперимента часть решений может быть изменена или
      отброшена.
    </p>
    <p>
      Исходный код research-ветки:{' '}
      <a
        href="https://github.com/MODX-Club/modx-docker/tree/minishop3-native"
        target="_blank"
        rel="noopener noreferrer"
      >
        MODX-Club/modx-docker — branch <code>{'minishop3-native'}</code>
      </a>
      .
    </p>
  </Article>
)
