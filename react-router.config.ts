import type { Config } from '@react-router/dev/config'
import { prerenderPaths } from './app/prerenderPaths'
const config: Config = {
  ssr: true,
  prerender: prerenderPaths,
  routeDiscovery: { mode: 'initial' },
}
export { config as default }
