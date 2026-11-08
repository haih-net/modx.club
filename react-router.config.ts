import type { Config } from '@react-router/dev/config'
import pages from './app/Custom/content/index.json'
const config: Config = {
  ssr: true,
  prerender: pages
    .filter((page) => page.locale === 'ru')
    .map((page) => page.path.replace(/\?page=(\d+)$/, '/page/$1')),
  routeDiscovery: { mode: 'initial' },
}
export { config as default }
