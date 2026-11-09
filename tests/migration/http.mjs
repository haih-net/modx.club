import { setTimeout } from 'node:timers/promises'
import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import { load } from 'cheerio'
import { spawn } from 'node:child_process'
const pages = JSON.parse(
  await readFile('migration/current-2026-10-13/index.json', 'utf8'),
)
const publicSitemap = load(
  await readFile('tests/migration/sitemap.production.xml', 'utf8'),
  { xmlMode: true },
)
const publicPaths = new Set(
  publicSitemap('loc')
    .toArray()
    .map((el) => {
      const url = new URL(publicSitemap(el).text())
      return url.pathname + url.search
    }),
)
const activePages = pages.filter((page) => publicPaths.has(page.path))
const child = spawn(process.execPath, ['build/node/index.js'], {
  env: {
    ...process.env,
    NODE_ENV: 'production',
    PORT: '4319',
    METRICS_PORT: '14319',
  },
  stdio: 'inherit',
})
const origin = 'http://localhost:4319'
try {
  for (let i = 0; i < 100; i++) {
    try {
      if ((await fetch(origin)).ok) break
    } catch {
      // Сервер может ещё запускаться; повторяем запрос после задержки.
    }
    await setTimeout(100)
  }
  const internalLinks = new Set()
  for (const page of activePages) {
    const response = await fetch(origin + page.path)
    assert.equal(response.status, 200, page.path)
    const $ = load(await response.text())
    assert.ok($('title').text().trim(), page.path)
    assert.equal($('h1').length, 1, `${page.path}: один h1`)
    assert.equal($('html').attr('lang'), page.locale)
    assert.ok($('meta[name=description]').attr('content'))
    assert.equal(
      $('link[rel=canonical]').attr('href'),
      'https://modx.club' + page.path,
    )
    assert.equal(
      $('main [class*="sc-"]').length,
      0,
      'Нет сериализованных классов',
    )
    const raw = load(
      await readFile(`migration/current-2026-10-13/raw/${page.raw}`, 'utf8'),
    )
    const normalize = (s) => s.replace(/\s+/g, ' ').trim()
    const normalizeMath = (root, element) => {
      const copy = root(element).clone()
      copy.find('.katex').each((_, math) => {
        const formula = root(math)
          .find('annotation[encoding="application/x-tex"]')
          .text()
        root(math).replaceWith(root('<span>').text(formula))
      })
      return normalize(copy.text())
    }
    const content = normalizeMath($, $('main'))
    for (const el of raw(
      'main main p, main main li, main main pre',
    ).toArray()) {
      const copy = raw(el).clone()
      copy.find('button[value]').remove()
      const text = normalizeMath(raw, copy)
      if (text)
        assert.ok(
          content.includes(text),
          `${page.path}: сохранён текст ${text.slice(0, 90)}`,
        )
    }
    for (const anchor of $('a[href]').toArray()) {
      const href = $(anchor).attr('href')
      if (href?.startsWith('/')) internalLinks.add(href)
    }
    for (const image of $('img').toArray()) {
      const src = $(image).attr('src')
      if (src?.startsWith('/'))
        assert.equal((await fetch(origin + src)).status, 200, src)
    }
  }
  for (const href of internalLinks) {
    const targetUrl = new URL(origin + href)
    if (!publicPaths.has(targetUrl.pathname + targetUrl.search)) continue
    const response = await fetch(origin + href)
    assert.equal(response.status, 200, href)
    const hash = new URL(origin + href).hash
    if (hash) {
      const target = load(await response.text())
      assert.ok(
        target('[id]')
          .toArray()
          .some(
            (el) => target(el).attr('id') === decodeURIComponent(hash.slice(1)),
          ),
        href,
      )
    }
  }
  for (const path of [
    '/not-a-real-page',
    '/concepts/not-a-real-page',
    '/missing.png',
    '/assets/missing.js',
  ])
    assert.equal((await fetch(origin + path)).status, 404, path)
  assert.equal(
    (await fetch(origin + '/en', { redirect: 'manual' })).status,
    301,
  )
  const sitemap = await (await fetch(origin + '/sitemap.xml')).text()
  for (const page of activePages)
    assert.ok(
      sitemap.includes(page.path.replaceAll('&', '&amp;') + '</loc>'),
      page.path,
    )
  console.log(
    `Проверено ${activePages.length} страниц: HTTP, полный текст, SEO, изображения, 404, редирект и sitemap`,
  )
} finally {
  child.kill('SIGTERM')
}
