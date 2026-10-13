import type { Config } from '@react-router/dev/config'
import pages from './app/Custom/content/index.json'
const config: Config = {
  ssr: true,
  prerender: pages.map((page) =>
    page.path.replace(/\?page=(\d+)$/, '/page/$1'),
  ),
  routeDiscovery: { mode: 'initial' },
}
export { config as default }
