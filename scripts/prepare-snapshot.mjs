// Первичное принятие снимка. Повторный запуск запрещён: рабочие файлы редактируются вручную.
import { access, cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import postcss from 'postcss'
import { load } from 'cheerio'
const source = 'migration/current-2026-10-13'
try {
  await access('app/Custom/content/index.json')
  throw new Error(
    'Рабочее содержание уже существует; импортируйте в новый каталог и сравните изменения',
  )
} catch (error) {
  if (error.code !== 'ENOENT') throw error
}
await mkdir('app/Custom/content/pages', { recursive: true })
await cp(`${source}/pages`, 'app/Custom/content/pages', { recursive: true })
await cp(`${source}/media`, 'public/media', { recursive: true })
await cp('/shared/www/modx.club/agent/public/modx.svg', 'public/modx.svg')
const pages = JSON.parse(await readFile(`${source}/index.json`, 'utf8'))
for (const page of pages) {
  const $ = load(page.header, null, false)
  $('[data-area=burger]').attr('aria-controls', 'site-nav')
  $('[data-area=nav]').attr('id', 'site-nav')
  page.header = $.html()
  const html = await readFile(
    `app/Custom/content/pages/${page.file}.html`,
    'utf8',
  )
  const content = load(html, null, false)
  if (!content('h1').length)
    content
      .root()
      .prepend(`<h1 tabindex="-1" class="catalog-title">${page.title}</h1>`)
  await writeFile(`app/Custom/content/pages/${page.file}.html`, content.html())
}
await writeFile(
  'app/Custom/content/index.json',
  JSON.stringify(pages, null, 2) + '\n',
)
const theme = (await readFile(`${source}/theme.txt`, 'utf8')).replaceAll(
  'color:primary:#1f2937;secondary:#6b7280;disabled:#9ca3af;light:#ffffff;',
  'color:inherit;/* Исправлена невалидная сериализация объекта цвета исходной темы. */',
)
const root = postcss.parse(theme)
const rules = [...new Set(root.nodes.map((node) => node.toString()))]
let css = rules.join('\n')
// Перенос исходной темы в Linaria: корневой html — владелец всех селекторов.
css = css
  .replace(/\bhtml\b(?=[\s,.#{:])/g, '&')
  .replaceAll('`', '\\`')
  .replaceAll('${', '\\${')
await writeFile(
  'app/Custom/components/SiteLayout/styles.ts',
  `import { styled } from '@linaria/react'\n\n// Исходная тема modx.club, извлечённая из актуального HTML 13 октября 2026 года.\n// Цвета, размеры, адаптивные правила и стили материалов сохранены.\nexport const DocumentStyled = styled.html\`\n${css}\n\n[data-fragment] { display: contents; }\n[data-menu-open='true'] [data-area='nav'] { display: flex; }\n:focus-visible { outline: 2px solid #2E6BFF; outline-offset: 3px; }\nh1:focus { outline: none; }\nmain { min-width: 0; overflow-wrap: anywhere; }\n.catalog-title { max-width: 1200px; width: 100%; margin: 24px auto 8px; padding: 0 15px; font-size: 32px; }\n[id] { scroll-margin-top: 88px; }\n\`\n`,
)
const urls = pages
  .map(
    (p) =>
      `  <url><loc>https://modx.club${p.path.replaceAll('&', '&amp;')}</loc></url>`,
  )
  .join('\n')
await writeFile(
  'public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
await writeFile(
  'public/robots.txt',
  'User-agent: *\nAllow: /\nSitemap: https://modx.club/sitemap.xml\n',
)
console.log(pages.length, 'страниц,', rules.length, 'правил исходной темы')
