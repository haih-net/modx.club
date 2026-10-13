// Повторный импорт сохраняется отдельно и не перезаписывает редакторские файлы.
import { mkdir, writeFile } from 'node:fs/promises'
const dir = process.argv[2] || 'migration/source/import'
await mkdir(dir, { recursive: true })
const paths = [
  '/',
  '/posts',
  '/concepts',
  '/users',
  '/tasks',
  '/worklogs',
  '/knowledges-base',
]
const results = []
const posts = new Map()
const users = new Map()
for (let i = 0; i < paths.length; i++) {
  const path = paths[i]
  const response = await fetch(`http://localhost:3000${path}`)
  const html = await response.text()
  const match = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s)
  const data = match ? JSON.parse(match[1]) : null
  const state = data?.props?.pageProps?.initialApolloState || {}
  const summary = {
    path,
    status: response.status,
    pageStatus: data?.props?.pageProps?.statusCode,
    query: state.ROOT_QUERY,
  }
  results.push(summary)
  // Сохраняем публичный HTML без закрытых полей базы и без секретов окружения.
  await writeFile(`${dir}/${encodeURIComponent(path)}.html`, html)
  for (const [key, value] of Object.entries(state)) {
    if (key.startsWith('Post:') && value.status === 'published') {
      posts.set(value.id, { ...posts.get(value.id), ...value })
      const url = `/posts/${value.id}`
      if (!paths.includes(url)) paths.push(url)
    }
    if (key.startsWith('User:')) users.set(value.id, value)
  }
  if (path.startsWith('/posts/')) {
    for (const value of posts.values()) {
      for (const match of (value.content || '').matchAll(
        /(?:https?:\/\/modx.club)?(\/posts\/[a-z0-9]+)/g,
      )) {
        if (!paths.includes(match[1])) paths.push(match[1])
      }
    }
  }
}
await writeFile(`${dir}/inventory.json`, JSON.stringify(results, null, 2))
await writeFile(
  `${dir}/posts.json`,
  JSON.stringify(
    [...posts.values()].map((post) => ({
      id: post.id,
      title: post.title,
      description: post.description,
      intro: post.intro,
      content: post.content,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      image: post.image,
      author: users.get(post.CreatedBy?.__ref?.replace('User:', '')) || null,
    })),
    null,
    2,
  ),
)
console.log(
  results.map((r) => ({
    path: r.path,
    status: r.status,
    pageStatus: r.pageStatus,
    query: r.query,
  })),
)
