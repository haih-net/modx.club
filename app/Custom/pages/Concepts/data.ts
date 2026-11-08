import type { ArticleData } from '../../components/Article/interfaces'
export interface ConceptSummary extends ArticleData {
  description: string
}
export const conceptPages = [
  [
    {
      path: '/concepts/modx-docker',
      title: 'modx-docker — воспроизводимое окружение для MODX-проектов',
      description:
        'Архитектурное решение MODX-Club для воспроизводимого запуска разных поколений MODX Revolution и связанных с ними окружений.',
      date: '9/5/26, 6:42 AM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/modx-docker-minishop',
      title: 'modx-docker-minishop — сбора MiniShop3 в докере',
      description:
        'Research-концепт по автоматической source-first установке MiniShop3 и зависимостей поверх modx-docker с использованием нативных build scripts компонентов и MODX Transport API.',
      date: '9/5/26, 6:41 AM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/fi1osof-components',
      title: 'Компоненты и разработки Николая Fi1osof',
      description:
        'Обзор MODX-компонентов Fi1osof и связанных инженерных решений, которые формируют общий подход к разработке, сопровождению и модернизации сложных MODX-проектов.',
      date: '9/4/26, 9:33 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/posts/otkrytoe-pismo-nikolayu-biz87-savinu',
      title: 'Открытое письмо Николаю biz87 Савину',
      description:
        'Открытое обращение Fi1osof к администрации modx.pro и русскоязычному MODX-сообществу: конфликт, блокировка в Telegram, критика RSC, MODX-рынка и обещание предложить технические альтернативы',
      date: '9/4/26, 4:07 AM',
      author: {
        name: 'Nikolai Lanets',
        path: '/users/cmlr57y2b0004s50qs8et9733',
        image: '/media/b5a449fe9a567157.jpg',
      },
    },
    {
      path: '/concepts/modx-pays-for-rarely-used-complexity',
      title:
        'MODX платит огромную постоянную архитектурную цену за функциональность, которой большинство проектов почти не пользуется',
      description:
        'Разбор того, как contexts, ACL, политики доступа, многочисленные modx_access_* таблицы и многоуровневое кеширование превратились в постоянную архитектурную цену MODX, которой платят все проекты — даже если почти не используют эту функциональность.',
      date: '9/3/26, 8:27 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/pochemu-ya-ne-soglasen-s-predlozheniem-soobschestva-modx-pro-peredat-im-bolshe-polnomochiy-v-ramkakh-proekta-modx-revolution',
      title:
        'Почему я не согласен с предложением сообщества modx.pro передать им больше полномочий в рамках проекта MODX Revolution',
      description:
        'Личная позиция Николая Ланца по открытому письму modx.pro о governance MODX Revolution, конфликте интересов, состоянии сообщества и варианте отдельной ветки MODX 4.',
      date: '9/3/26, 4:20 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/fi1osof-modsociety',
      title: 'modSociety — социальный и комментарийный слой MODX',
      description:
        'modSociety — социальное ядро для MODX-проектов: блоги, топики, комментарии, рейтинги и права доступа поверх стандартной архитектуры MODX.',
      date: '9/3/26, 3:03 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/fi1osof-console',
      title: 'Console — интерактивная отладка MODX',
      description:
        'Роль Console в экосистеме Fi1osof: интерактивная проверка xPDO, processors и прикладной логики без создания временных сниппетов и файлов.',
      date: '9/2/26, 8:19 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/posts/kak-umiralo-modx-soobschestvo',
      title: 'Как умирало MODX-сообщество',
      description: 'Полная история возникновения и развала MODX-сообщества',
      date: '9/2/26, 1:38 PM',
      author: {
        name: 'Nikolai Lanets',
        path: '/users/cmlr57y2b0004s50qs8et9733',
        image: '/media/b5a449fe9a567157.jpg',
      },
    },
    {
      path: '/concepts/fi1osof-vapor',
      title: 'Vapor — упаковка и перенос MODX-проектов',
      description:
        'История Vapor: как внутренняя логика MODX была извлечена из ядра, обособлена, доработана и превращена в универсальный инструмент переноса MODX-проектов между установками.',
      date: '9/2/26, 8:54 AM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/fi1osof-modxrepository',
      title: 'modxRepository — собственный репозиторий пакетов MODX',
      description:
        'modxRepository как инфраструктурный слой распространения, обновления и управления собственными MODX-компонентами.',
      date: '9/2/26, 8:54 AM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/fi1osof-modxsdk',
      title: 'modxSDK — среда разработки внутри MODX',
      description:
        'modxSDK как попытка приблизить работу с MODX-проектом к полноценной среде разработки, а не только редактированию элементов через Manager.',
      date: '9/2/26, 8:54 AM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
  ],
  [
    {
      path: '/concepts/fi1osof-cacheoptimizer',
      title: 'cacheOptimizer — оптимизация кеша MODX на больших проектах',
      description:
        'cacheOptimizer как точечное решение ограничения архитектуры MODX, проявлявшегося на сайтах с десятками и сотнями тысяч ресурсов.',
      date: '9/2/26, 8:54 AM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/fi1osof-modimporter',
      title: 'modImporter — универсальный импорт данных в MODX',
      description:
        'modImporter как универсальный слой импорта, ориентированный не на конкретный магазин, а на стандартные объекты и processors MODX.',
      date: '9/2/26, 8:54 AM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/fi1osof-modmonitor',
      title: 'modMonitor — мониторинг выполнения MODX-проекта',
      description:
        'modMonitor как средство диагностики сложных MODX-проектов и поиска причин проблем по фактическому поведению системы.',
      date: '9/2/26, 8:54 AM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/fi1osof-shopmodx',
      title: 'shopModx — e-commerce на основе processors и xPDO',
      description:
        'История и философия shopModx: компактная бизнес-логика, расширение стандартных механизмов MODX и постепенное упрощение кодовой базы по мере развития.',
      date: '9/2/26, 8:54 AM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/fi1osof-modxsite',
      title: 'modxSite — логический и API-слой MODX-проекта',
      description:
        'modxSite как логический слой между данными MODX и сменным frontend, пригодный для вызова из PHP, шаблонов и внешних запросов.',
      date: '9/2/26, 8:54 AM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/fi1osof-modxsmarty',
      title: 'modxSmarty — Smarty как presentation layer MODX',
      description:
        'modxSmarty как сменный слой представления над MODX и развитие идей phpTemplates.',
      date: '9/2/26, 8:54 AM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/fi1osof-phptemplates',
      title: 'phpTemplates — PHP-шаблоны для MODX',
      description:
        'Как phpTemplates отделял разработчика от внутреннего MODX-парсера и подготовил переход к modxSmarty.',
      date: '9/2/26, 8:54 AM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/services/modx-migration',
      title: 'Постепенная миграция сайта с MODX',
      description:
        'Постепенная и управляемая миграция существующего сайта с MODX на современный стек.',
      date: '9/1/26, 5:46 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/modx-is-legacy',
      title: 'MODX — легаси, которое никуда не денется',
      description:
        'Почему MODX сегодня следует рассматривать как legacy-платформу: релизная история, MODX 3, архитектурная стагнация и последствия для владельцев сайтов.',
      date: '9/1/26, 5:45 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/nikolai-savin-biz87-role-in-modx-community',
      title:
        'Какова реальная роль Николая Савина aka biz87 в рамках MODX-сообщества?',
      description:
        'Как публичный образ Николая Савина соотносится с его фактической ролью в modx.pro, MiniShop и русскоязычном MODX-сообществе — и почему это важно не только разработчикам, но и владельцам конечного бизнеса.',
      date: '8/31/26, 8:15 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/modx-pro-not-community',
      title: 'modx.pro — не брат для сообщества и конечного бизнеса',
      description:
        'Почему modx.pro сегодня полезен прежде всего собственной коммерческой экосистеме, а не сильным программистам и конечному бизнесу.',
      date: '8/31/26, 10:27 AM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/why-not',
      title: 'Почему мы этого не делаем',
      description:
        'Что мы принципиально не предлагаем владельцам MODX-сайтов и почему.',
      date: '8/30/26, 9:04 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
  ],
  [
    {
      path: '/why-not/big-bang-rewrite',
      title: 'Почему мы не переписываем MODX-сайт целиком с нуля',
      description:
        'Почему мы не предлагаем big-bang rewrite существующего MODX-сайта.',
      date: '8/30/26, 9:04 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/why-not/modx-development',
      title: 'Почему мы не разрабатываем новые сайты на MODX',
      description: 'Почему мы не предлагаем разработку новых сайтов на MODX.',
      date: '8/30/26, 9:04 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/modx-ecosystem-trap',
      title: 'Экосистема pdoTools и miniShop: быстрый старт, дорогой хвост',
      description:
        'Противостояние двух подходов в MODX: интеграторская экосистема pdoTools/miniShop против API-first и xPDO/processors-подхода modxSite, modxSmarty и shopModx.',
      date: '8/30/26, 9:04 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/services/modx-audit',
      title: 'Аудит MODX-проекта',
      description:
        'Технический аудит существующего сайта на MODX перед поддержкой, обновлением или миграцией.',
      date: '8/30/26, 9:04 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/services/headless-modx',
      title: 'Headless MODX и современный frontend',
      description:
        'Переход существующего MODX-проекта к headless-архитектуре и современному frontend.',
      date: '8/30/26, 9:04 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/services/modx-upgrade',
      title: 'Обновление MODX и PHP',
      description:
        'Безопасное обновление MODX Revolution, PHP и зависимостей существующего проекта.',
      date: '8/30/26, 9:04 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/services/modx-fixes',
      title: 'Исправление и восстановление сайта на MODX',
      description:
        'Исправление ошибок и восстановление работоспособности сайтов на MODX.',
      date: '8/30/26, 9:04 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/services/modx-improvements',
      title: 'Доработка существующего сайта на MODX',
      description: 'Доработка и развитие существующих сайтов на MODX.',
      date: '8/30/26, 9:04 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/services/modx-support',
      title: 'Поддержка сайта на MODX',
      description: 'Поддержка и сопровождение существующих сайтов на MODX.',
      date: '8/30/26, 9:04 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/services',
      title: 'Услуги по поддержке и модернизации MODX',
      description:
        'Поддержка, аудит, доработка, модернизация и постепенная миграция существующих сайтов на MODX.',
      date: '8/30/26, 9:04 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
    {
      path: '/concepts/fi1osof',
      title: 'Fi1osof: от внутренностей MODX к современной архитектуре',
      description:
        'Почему Fi1osof может брать техническую ответственность за сложные legacy MODX-проекты и проводить их к современному стеку.',
      date: '8/30/26, 9:04 PM',
      author: {
        name: 'Лира',
        path: '/users/cmtg2938r00d5mn0qjjca75bn',
        image: '/media/4d7578657e04256e.jpeg',
      },
    },
  ],
] as const satisfies ConceptSummary[][]
