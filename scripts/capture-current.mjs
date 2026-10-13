// Снимок актуального сайта. Импорт никогда не изменяет рабочее содержание app/Custom/content.
import { load } from 'cheerio'
import { mkdir, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
const destination = process.argv[2]
if (!destination) throw new Error('Укажите новый каталог снимка')
await mkdir(destination, { recursive: false })
await mkdir(`${destination}/raw`)
await mkdir(`${destination}/pages`)
await mkdir(`${destination}/media`)
const base = 'http://localhost:3000'
const queue = new Set()
const sitemapPaths = []
const xmlQueue = ['/sitemap.xml']
for (const path of xmlQueue) {
  const xml = await (
    await fetch(base + path, { signal: AbortSignal.timeout(30000) })
  ).text()
  await writeFile(`${destination}/raw/${path.replaceAll('/', '_')}`, xml)
  for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) {
    const url = new URL(match[1], base)
    if (url.pathname.endsWith('.xml')) {
      if (!xmlQueue.includes(url.pathname)) xmlQueue.push(url.pathname)
    } else {
      queue.add(url.pathname)
      sitemapPaths.push(url.pathname)
    }
  }
}
await writeFile(
  `${destination}/raw/robots.txt`,
  await (await fetch(base + '/robots.txt')).text(),
)
const styles = new Set()
const externalStyles = new Set()
const assetMap = new Map()
const pages = []
const failures = []
const redirects = []
const addUrl = (href, current) => {
  try {
    const url = new URL(href, base + current)
    if (!['localhost', 'modx.club'].includes(url.hostname)) return
    if (
      /^\/(?:en\/)?(?:signin|signup|admin|api|graphql|mind-logs|worklogs|tasks|files|world3d|knowledges-base)(?:\/|$)/.test(
        url.pathname,
      )
    )
      return
    if (/\.(?:jpg|png|svg|jpeg|pdf|zip|js|css)$/i.test(url.pathname)) return
    const path = url.pathname + url.search
    if (path === '/en') queue.add('/en/')
    else queue.add(path)
  } catch {}
}
async function localAsset(src) {
  const url = new URL(src, base)
  if (!['localhost', 'modx.club'].includes(url.hostname)) return src
  if (url.pathname === '/_next/image')
    return localAsset(url.searchParams.get('url'))
  const key = url.pathname + url.search
  if (assetMap.has(key)) return assetMap.get(key)
  const response = await fetch(base + key, {
    signal: AbortSignal.timeout(30000),
  })
  if (!response.ok) throw new Error(`Ресурс ${key}: ${response.status}`)
  const extension =
    url.pathname
      .split('.')
      .pop()
      .replace(/[^a-zA-Z0-9]/g, '') || 'bin'
  const name =
    createHash('sha256').update(key).digest('hex').slice(0, 16) +
    '.' +
    extension
  const target = '/media/' + name
  await writeFile(
    `${destination}/media/${name}`,
    Buffer.from(await response.arrayBuffer()),
  )
  assetMap.set(key, target)
  return target
}
for (const path of queue) {
  if (pages.length > 250)
    throw new Error('Проверьте карту адресов: более 250 страниц')
  const response = await fetch(base + path, {
    signal: AbortSignal.timeout(30000),
  })
  const html = await response.text()
  const $ = load(html)
  const next = $('#__NEXT_DATA__').text()
  const data = next ? JSON.parse(next) : {}
  const status = data.props?.pageProps?.statusCode || response.status
  const main = $('main main').first()
  if (status !== 200 || !main.length) {
    failures.push({ path, status })
    continue
  }
  if (new URL(response.url).pathname !== new URL(base + path).pathname)
    redirects.push({ from: path, to: new URL(response.url).pathname })
  const file = createHash('sha256').update(path).digest('hex').slice(0, 16)
  await writeFile(`${destination}/raw/${file}.html`, html)
  $('style[data-styled]').each((_, el) => styles.add($(el).text()))
  // Сохраняем также оформление формул и его шрифты, не завися от Next-сервера.
  for (const link of $('link[rel=stylesheet]').toArray()) {
    const href = $(link).attr('href')
    if (!href?.startsWith('/') || externalStyles.has(href)) continue
    externalStyles.add(href)
    let css = await (await fetch(base + href)).text()
    await writeFile(
      `${destination}/raw/${createHash('sha256').update(href).digest('hex').slice(0, 16)}.css`,
      css,
    )
    for (const match of [...css.matchAll(/url\((\/[^)]+)\)/g)]) {
      css = css.replaceAll(match[1], await localAsset(match[1]))
    }
    styles.add(css)
  }
  $('a[href]').each((_, el) => addUrl($(el).attr('href'), path))
  const state = data.props?.pageProps?.initialApolloState || {}
  const count = Object.entries(state.ROOT_QUERY || {}).find(([key]) =>
    key.startsWith('kBConceptsCount'),
  )?.[1]
  if (/^(\/en)?\/concepts(?:\?|$)/.test(path) && count) {
    const prefix = path.startsWith('/en') ? '/en' : ''
    for (let i = 2; i <= Math.ceil(count / 12); i++)
      queue.add(`${prefix}/concepts?page=${i}`)
  }
  const header = $('header').first()
  const footer = $('footer').first()
  // Кнопки ИИ-агента временно скрыты. Исходная разметка сохранена в HTML-комментариях.
  for (const root of [header, main]) {
    root.find('button[value]').each((_, el) => {
      const button = $.html(el).replaceAll('--', '&#45;&#45;')
      $(el).replaceWith(`<!-- Временно скрыто: кнопка ИИ-агента. ${button} -->`)
    })
  }
  main.find('button').each((_, el) => {
    const button = $(el),
      text = button.text().trim()
    if (/^(Как это работает|How it works)$/i.test(text)) {
      button.replaceWith(
        `<a class="${button.attr('class')}" href="${path.startsWith('/en') ? '/en/' : '/'}#how">${text}</a>`,
      )
    }
    if (/^(Next|Previous)$/.test(text) && !button.is('[disabled]')) {
      const current = Number(new URL(base + path).searchParams.get('page') || 1)
      const target = current + (text === 'Next' ? 1 : -1)
      const pathname = new URL(base + path).pathname
      button.replaceWith(
        `<a class="${button.attr('class')}" href="${pathname}${target === 1 ? '' : `?page=${target}`}">${text}</a>`,
      )
    }
  })
  const heading = main.find('h1')
  if (!heading.length) {
    const first = main.find('h2,h3').first()
    if (/^(\/en)?\/concepts(?:\?|$)/.test(path))
      main.prepend(
        `<h1 class="catalog-title">${path.startsWith('/en') ? 'Concepts' : 'Концепты'}</h1>`,
      )
    else if (first.length)
      first.replaceWith(
        `<h1 class="${first.attr('class') || ''}">${first.html()}</h1>`,
      )
  } else
    heading
      .slice(1)
      .each((_, el) => $(el).replaceWith(`<h2>${$(el).html()}</h2>`))
  main.find('h1').first().attr('tabindex', '-1')
  for (const root of [header, main, footer]) {
    root.find('script').remove()
    root.find('a[href]').each((_, el) => {
      const a = $(el),
        href = a.attr('href')
      if (/^https?:\/\/(?:localhost:3000|modx.club)(\/|$)/.test(href)) {
        const u = new URL(href)
        a.attr('href', u.pathname + u.search + u.hash)
      }
      if (a.attr('href') === '/en') a.attr('href', '/en/')
      if (a.attr('target') === '_blank') a.attr('rel', 'noopener noreferrer')
    })
    for (const el of root.find('img').toArray()) {
      const img = $(el)
      if (img.attr('src')) img.attr('src', await localAsset(img.attr('src')))
      img.removeAttr('srcset')
      img.removeAttr('data-nimg')
      if (img.attr('alt') === undefined) img.attr('alt', '')
    }
  }
  const alternate = $('link[rel=alternate][hreflang]')
    .map((_, el) => ({
      lang: $(el).attr('hreflang'),
      path: new URL($(el).attr('href'), base).pathname,
    }))
    .get()
  const title = $('title').text()
  const description =
    $('meta[name=description]').attr('content') ||
    main.find('p').first().text().slice(0, 180) ||
    title
  const page = {
    path,
    file,
    locale: path.startsWith('/en') ? 'en' : 'ru',
    title,
    description,
    alternate,
    header: header.toString(),
    footer: footer.toString(),
    mainClass: main.attr('class'),
    shellClass: main.parent().attr('class'),
    outerClass: $('main').first().attr('class'),
    jsonLd: $('script[type="application/ld+json"]')
      .map((_, el) =>
        JSON.parse($(el).text().replaceAll(base, 'https://modx.club')),
      )
      .get(),
    raw: file + '.html',
    count: count || undefined,
  }
  await writeFile(`${destination}/pages/${file}.html`, main.html())
  pages.push(page)
  console.log(pages.length, path)
}
await writeFile(`${destination}/index.json`, JSON.stringify(pages, null, 2))
await writeFile(`${destination}/theme.txt`, [...styles].join('\n'))
await writeFile(
  `${destination}/inventory.json`,
  JSON.stringify(
    {
      capturedAt: new Date().toISOString(),
      source: base,
      sitemapPaths,
      paths: pages.map((p) => p.path),
      failures,
      redirects,
      assets: Object.fromEntries(assetMap),
    },
    null,
    2,
  ),
)
console.log('Итого', pages.length, 'ошибки', failures)
