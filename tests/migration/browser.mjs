import { chromium } from '@playwright/test'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import assert from 'node:assert/strict'
const origin = process.env.PREVIEW_URL || 'http://localhost:4318'
const root = process.cwd()
await mkdir('.cache/browser', { recursive: true })
await mkdir('.cache/screenshots', { recursive: true })
const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  headless: true,
  env: { ...process.env, TMPDIR: root + '/.cache/browser' },
  args: ['--no-sandbox', '--disable-crash-reporter'],
})
const pages = JSON.parse(
  await readFile('app/Custom/content/index.json', 'utf8'),
)
const results = []
try {
  for (const width of [1440, 390]) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
    })
    const page = await context.newPage()
    const errors = []
    page.on('pageerror', (e) => errors.push(String(e)))
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(m.text())
    })
    for (const entry of pages) {
      const response = await page.goto(origin + entry.path, {
        waitUntil: 'networkidle',
      })
      assert.equal(response.status(), 200, entry.path)
      assert.equal(await page.title(), entry.title)
      assert.equal(await page.locator('h1').count(), 1)
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth + 1,
      )
      assert.equal(overflow, false, entry.path + ': горизонтальный скролл')
      await page.locator('img').evaluateAll(async (images) => {
        for (const image of images) image.loading = 'eager'
        await Promise.all(
          images.map((image) => image.decode().catch(() => undefined)),
        )
      })
      const broken = await page
        .locator('img')
        .evaluateAll((images) =>
          images
            .filter((i) => !i.complete || !i.naturalWidth)
            .map((i) => i.src),
        )
      assert.deepEqual(broken, [], entry.path)
      assert.equal(await page.locator('button[value]').count(), 0)
      await page.screenshot({
        path: `.cache/screenshots/${width}-${entry.file}.png`,
      })
      results.push({ width, path: entry.path })
    }
    await page.goto(origin + '/', { waitUntil: 'networkidle' })
    await page.evaluate(() => {
      window.__navigationSentinel = 42
    })
    if (width < 900) {
      await page.locator('[data-area=burger]').click()
      await page.locator('#site-nav').waitFor({ state: 'visible' })
    }
    await page.locator('#site-nav a[href="/concepts"]').click()
    await page.waitForURL('**/concepts')
    await page.getByRole('heading', { name: 'Концепты', exact: true }).waitFor()
    assert.equal(
      await page.evaluate(() => window.__navigationSentinel),
      42,
      'SPA переход',
    )
    await page.locator('a[href="/concepts?page=2"]').click()
    await page.waitForURL('**/concepts?page=2')
    assert.ok(
      await page
        .locator('main')
        .textContent()
        .then((t) => t.includes('Page 2 of 3')),
    )
    await page.goBack()
    await page.waitForURL('**/concepts')
    await page.locator('main a[href="/concepts/modx-docker"]').first().click()
    await page.waitForURL('**/concepts/modx-docker')
    assert.equal(
      await page.title(),
      pages.find((p) => p.path === '/concepts/modx-docker').title,
    )
    assert.equal(
      await page.locator('h1').evaluate((el) => document.activeElement === el),
      true,
      'Фокус заголовка',
    )
    await page.locator('label[for="locale-switcher-toggle"]').click()
    await page.locator('a[href="/en/concepts/modx-docker"]').click()
    await page.waitForURL('**/en/concepts/modx-docker')
    assert.equal(await page.locator('html').getAttribute('lang'), 'en')
    assert.deepEqual(errors, [], 'Ошибки браузера')
    await context.close()
  }
  const reference = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  })
  for (const path of ['/', '/about', '/concepts/modx-docker']) {
    await reference.goto('http://localhost:3000' + path, {
      waitUntil: 'networkidle',
    })
    await reference.screenshot({
      path:
        '.cache/screenshots/legacy-' +
        (path.replaceAll('/', '_') || 'home') +
        '.png',
    })
  }
  await writeFile(
    '.cache/browser-results.json',
    JSON.stringify(results, null, 2),
  )
  console.log(
    `Проверено ${results.length} страниц/ширин, SPA, история, пагинация, язык, фокус и ошибки браузера`,
  )
} finally {
  await browser.close()
}
