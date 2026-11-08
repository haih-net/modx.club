import type * as React from 'react'
import { Link } from 'react-router'
import { Article } from '../../../components/Article'
import { article } from './data'

export const ModxDockerPage: React.FC = () => (
  <>
    <Article data={article} titleTag="h3">
      <h1 tabIndex={-1}>modx-docker</h1>
      <p>
        <a
          href="https://github.com/MODX-Club/modx-docker"
          target="_blank"
          rel="noopener noreferrer"
        >
          modx-docker на GitHub
        </a>{' '}
        — это не MODX Extra и не очередной transport package. Это отдельное
        инфраструктурное решение для воспроизводимого запуска MODX-проектов в
        Docker.
      </p>
      <p>
        Главная задача проекта — дать разработчику возможность поднять{' '}
        <strong>конкретное состояние MODX и его runtime</strong>, не
        перестраивая под него всю локальную машину.
      </p>
      <p>
        Это особенно важно для MODX Revolution, где реальная совместимость
        проекта часто определяется не одной версией CMS, а целой комбинацией:
      </p>
      <pre className="language-text">
        <code className="language-text code-highlight">
          <span className="code-line">{'MODX\n'}</span>
          <span className="code-line">{'+ PHP\n'}</span>
          <span className="code-line">{'+ MySQL / MariaDB\n'}</span>
          <span className="code-line">{'+ Composer\n'}</span>
          <span className="code-line">{'+ конкретные Extras\n'}</span>
          <span className="code-line">{'+ кастомный код проекта\n'}</span>
          <span className="code-line">{'+ состояние базы данных\n'}</span>
          <span className="code-line">{'+ состояние файловой системы\n'}</span>
        </code>
      </pre>
      <p>
        Старый рабочий проект может зависеть от весьма конкретного сочетания
        этих частей. Попытка просто перенести его на современный PHP или новую
        версию базы нередко приводит к цепочке несовместимостей.{' '}
        <code>{'modx-docker'}</code> создаётся как инструмент, который позволяет
        сначала <strong>воспроизвести исходное рабочее окружение</strong>, а уже
        затем безопасно исследовать, обновлять или мигрировать проект.
      </p>
      <h2>Что делает текущая версия</h2>
      <p>На данный момент репозиторий поднимает минимальный стек:</p>
      <pre className="language-text">
        <code className="language-text code-highlight">
          <span className="code-line">{'nginx\n'}</span>
          <span className="code-line">{'  ↓\n'}</span>
          <span className="code-line">{'PHP-FPM\n'}</span>
          <span className="code-line">{'  ↓\n'}</span>
          <span className="code-line">{'MySQL\n'}</span>
          <span className="code-line">{'\n'}</span>
          <span className="code-line">{'+ phpMyAdmin\n'}</span>
        </code>
      </pre>
      <p>
        Исходники MODX не зашиваются в готовый image. Вместо этого окружение
        получает нужную версию Revolution непосредственно из Git и выполняет
        автоматическую установку.
      </p>
      <p>
        Это принципиальный выбор: можно запускать не только опубликованный
        релиз, но и нужную ветку, tag или в перспективе конкретный commit ядра.
      </p>
      <p>
        Установка выполняется без браузерного setup wizard и разбита на
        отдельные стадии: подготовка директории, получение исходников, создание
        базы, Composer, сборка core transport, CLI setup и адаптация
        конфигурации к Docker-окружению.
      </p>
      <p>
        После запуска исходники остаются доступны на файловой системе
        разработчика, поэтому с ними можно работать обычными Git-инструментами и
        редактором, а приложение продолжает выполняться внутри изолированного
        runtime.
      </p>
      <h2>Исследовательская версия с MiniShop3</h2>
      <p>
        Отдельно развивается research-ветка, которая проверяет следующий уровень
        идеи: не только автоматически устанавливать MODX из Git, но и собирать
        из исходников и нативно устанавливать связанный стек{' '}
        <code>{'pdoTools 3 + VueTools + MiniShop3'}</code>.
      </p>
      <p>
        Эта версия пока не считается готовым стабильным workflow — направление
        только исследуется. Основная гипотеза состоит в том, что MODX и Extras
        можно воспроизводимо собирать из конкретных Git refs, используя штатные
        build scripts компонентов и MODX Transport API, без ручной установки
        через Manager.
      </p>
      <p>
        Подробности, текущий pipeline и ограничения описаны отдельно:{' '}
        <Link to="/concepts/modx-docker-minishop">modx-docker-minishop</Link>.
      </p>
      <h2>Зачем это нужно</h2> <h3>Разработка под конкретную версию MODX</h3>
      <p>
        Один проект может требовать MODX 2.x и старый PHP, другой — MODX 3.x и
        современный runtime. Вместо глобального переключения PHP, MySQL и
        системных библиотек каждый проект получает собственную среду.
      </p>
      <p>
        Локально это позволяет одновременно держать несколько сайтов с
        несовместимыми требованиями:
      </p>
      <pre className="language-text">
        <code className="language-text code-highlight">
          <span className="code-line">{'Project A\n'}</span>
          <span className="code-line">
            {'└── MODX 2.x / PHP 7.4 / MySQL 5.7\n'}
          </span>
          <span className="code-line">{'\n'}</span>
          <span className="code-line">{'Project B\n'}</span>
          <span className="code-line">
            {'└── MODX 3.x / PHP 8.2 / MySQL 8\n'}
          </span>
          <span className="code-line">{'\n'}</span>
          <span className="code-line">{'Project C\n'}</span>
          <span className="code-line">
            {'└── другая историческая конфигурация\n'}
          </span>
        </code>
      </pre>
      <p>
        Окружения не должны мешать друг другу и не требуют превращать рабочую
        систему разработчика в набор старых глобально установленных runtime.
      </p>
      <h3>Исследование legacy-проектов</h3>
      <p>Для MODX это один из основных сценариев.</p>
      <p>
        Большое количество работающих сайтов создавалось много лет назад и
        зависит от конкретных версий ядра и Extras. Когда такой проект нужно
        починить или модернизировать, первым шагом должна быть не попытка сразу
        обновить всё до последних версий, а получение воспроизводимого рабочего
        состояния.
      </p>
      <p>
        <code>{'modx-docker'}</code> должен позволить сказать примерно
        следующее:
      </p>
      <pre className="language-text">
        <code className="language-text code-highlight">
          <span className="code-line">{'поднять нужный MODX\n'}</span>
          <span className="code-line">
            {'→ подобрать нужный PHP и DB runtime\n'}
          </span>
          <span className="code-line">{'→ воспроизвести проект\n'}</span>
          <span className="code-line">{'→ найти несовместимости\n'}</span>
          <span className="code-line">
            {'→ постепенно обновлять окружение\n'}
          </span>
        </code>
      </pre>
      <p>
        Это превращает Docker не просто в удобство разработки, а в лабораторию
        для сопровождения и миграции legacy-систем.
      </p>
      <h3>Разработка и тестирование самого MODX</h3>
      <p>
        Так как Revolution берётся непосредственно из Git, окружение подходит и
        для работы с ядром MODX.
      </p>
      <p>
        Можно checkout'ить нужную ветку или изменение, воспроизводить issue,
        менять код ядра и проверять результат в реальном приложении без
        подготовки отдельного Docker image для каждой итерации.
      </p>
      <p>
        В дальнейшем тот же подход может использоваться для проверки изменений
        MODX на нескольких комбинациях PHP и базы данных.
      </p>
      <h2>Почему важна воспроизводимость</h2>
      <p>
        Ценность такого окружения не в том, что сайт удалось один раз запустить
        на компьютере конкретного разработчика.
      </p>
      <p>
        Важно иметь возможность через месяц или год снова получить то же
        состояние из декларативной конфигурации и исходных данных.
      </p>
      <p>
        Поэтому архитектурное направление проекта — постепенно выносить
        характеристики runtime в параметры:
      </p>
      <pre className="language-text">
        <code className="language-text code-highlight">
          <span className="code-line">{'MODX_REF\n'}</span>
          <span className="code-line">{'PHP_VERSION\n'}</span>
          <span className="code-line">{'DB_ENGINE\n'}</span>
          <span className="code-line">{'DB_VERSION\n'}</span>
          <span className="code-line">{'COMPOSER_VERSION\n'}</span>
        </code>
      </pre>
      <p>
        Конкретный набор ещё развивается, но общий принцип состоит в том, что
        версия среды должна быть частью описания проекта, а не скрытым свойством
        компьютера разработчика.
      </p>
      <h2>Реальный MODX-проект — это не только Git</h2>
      <p>
        У MODX есть важная особенность: существенная часть проектного состояния
        традиционно хранится в базе данных.
      </p>
      <p>Там могут находиться:</p>
      <ul>
        <li>Resources;</li> <li>Templates;</li> <li>Chunks;</li>
        <li>Snippets;</li> <li>TVs;</li> <li>System Settings;</li>
        <li>состояние установленных пакетов;</li>
        <li>другие конфигурационные сущности.</li>
      </ul>
      <p>
        Одновременно в файловой системе находятся assets, компоненты, кастомный
        PHP-код, файлы Extras и иногда изменения самого ядра.
      </p>
      <p>
        Поэтому чистой установки MODX недостаточно для воспроизведения
        произвольного реального сайта.
      </p>
      <p>
        Следующее важное направление <code>{'modx-docker'}</code> — поддержка
        восстановления проекта из исходных данных:
      </p>
      <ul>
        <li>только дамп базы;</li> <li>только файлы;</li>
        <li>база и файлы вместе;</li>
        <li>либо чистая установка без snapshot.</li>
      </ul>
      <p>
        После такого восстановления окружение должно уметь адаптировать
        настройки проекта к локальному Docker runtime: параметры подключения к
        базе, домен, пути, cache и другие environment-specific значения.
      </p>
      <h2>Docker-in-Docker и изоляция проектов</h2>
      <p>
        В репозитории предусмотрен внешний Docker-контейнер, внутри которого
        может работать собственный Docker daemon и запускаться внутренний
        Compose-стек проекта.
      </p>
      <p>
        Это решение нужно не для простого ручного запуска одного сайта, а для
        более общего сценария управления изолированными проектными средами.
      </p>
      <p>
        Вместо предоставления управляющему процессу доступа к Docker daemon всей
        машины можно создать отдельную границу проекта:
      </p>
      <pre className="language-text">
        <code className="language-text code-highlight">
          <span className="code-line">{'Project environment\n'}</span>
          <span className="code-line">{'└── own Docker daemon\n'}</span>
          <span className="code-line">{'    ├── nginx\n'}</span>
          <span className="code-line">{'    ├── php-fpm\n'}</span>
          <span className="code-line">{'    ├── database\n'}</span>
          <span className="code-line">{'    └── additional services\n'}</span>
        </code>
      </pre>
      <p>
        Такой подход позволяет локально управлять несколькими независимыми
        сайтами, у каждого из которых собственный набор сервисов и версий, не
        смешивая их внутреннее состояние.
      </p>
      <h2>Связь с AI-разработкой</h2>
      <p>
        <code>{'modx-docker'}</code> также используется как практический runtime
        для более общего направления: разработки и сопровождения веб-проектов с
        помощью AI-агентов.
      </p>
      <p>
        Для агента недостаточно видеть только файлы Git-репозитория. Чтобы
        реально диагностировать и менять старый проект, ему нужно иметь
        возможность поднять приложение, выполнить код в корректном окружении,
        увидеть ошибки, проверить изменения и повторить эксперимент.
      </p>
      <p>
        В этом контексте <code>{'modx-docker'}</code> выполняет роль
        воспроизводимого runtime-адаптера для MODX:
      </p>
      <pre className="language-text">
        <code className="language-text code-highlight">
          <span className="code-line">{'AI / developer\n'}</span>
          <span className="code-line">{'      ↓\n'}</span>
          <span className="code-line">{'project state\n'}</span>
          <span className="code-line">{'      ↓\n'}</span>
          <span className="code-line">{'modx-docker\n'}</span>
          <span className="code-line">{'      ↓\n'}</span>
          <span className="code-line">{'real MODX runtime\n'}</span>
        </code>
      </pre>
      <p>
        MODX является особенно хорошим полигоном для такого подхода из-за
        большого количества исторических проектов и сильной зависимости от
        конкретных комбинаций версий.
      </p>
      <h2>Текущее состояние проекта</h2>
      <p>
        Проект находится в активной разработке. Текущая версия уже демонстрирует
        базовый сценарий: получить заданную версию MODX из Git, собрать
        необходимое окружение и автоматически установить её в Docker.
      </p>
      <p>
        Дальнейшее развитие сосредоточено вокруг параметризации runtime, работы
        с реальными snapshot проектов и более удобного программного управления
        окружениями.
      </p>
      <p>
        Актуальный код и изменения доступны в открытом репозитории:{' '}
        <a
          href="https://github.com/MODX-Club/modx-docker"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/MODX-Club/modx-docker
        </a>
        .
      </p>
    </Article>
  </>
)
