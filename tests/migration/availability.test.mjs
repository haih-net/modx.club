import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import { load } from 'cheerio'

// Снимок скачан с https://modx.club/sitemap.xml 9 ноября 2026 года.
// До и после переноса используем один список, независимый от локальных роутов.
const sitemap = await readFile(
  new URL('./sitemap.production.xml', import.meta.url),
  'utf8',
)
const origin = new URL(
  process.env.SITE_ORIGIN || 'http://modx-club.localhost:3000',
)

test('Все страницы из боевого sitemap доступны', async () => {
  const xml = load(sitemap, { xmlMode: true })
  const urls = xml('urlset > url > loc')
    .map((_, element) => xml(element).text().trim())
    .get()
  assert.ok(urls.length > 0, 'Боевой sitemap должен содержать URL')
  assert.equal(new Set(urls).size, urls.length, 'URL не должны повторяться')

  const failures = []
  for (const source of urls) {
    try {
      const productionUrl = new URL(source)
      assert.equal(productionUrl.origin, 'https://modx.club')
      const target = new URL(origin)
      target.pathname = productionUrl.pathname
      target.search = productionUrl.search
      const response = await fetch(target, {
        redirect: 'manual',
        signal: globalThis.AbortSignal.timeout(15_000),
      })
      const html = await response.text()
      assert.equal(
        response.status,
        200,
        `HTTP ${response.status}, Location: ${response.headers.get('location') || '—'}`,
      )
      assert.match(
        response.headers.get('content-type') || '',
        /text\/html/i,
        'Ответ должен быть HTML',
      )
      const $ = load(html)
      assert.ok($('h1').text().trim(), 'Отсутствует непустой h1')
      assert.ok($('main').text().trim(), 'Отсутствует содержимое main')
    } catch (error) {
      failures.push(`${source}: ${error.message}`)
    }
  }

  console.log(`Проверено: ${urls.length}; ошибок: ${failures.length}`)
  assert.equal(failures.length, 0, failures.join('\n'))
})
