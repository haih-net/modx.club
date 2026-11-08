import type { MetaFunction } from 'react-router'
import { ModxDockerPage } from '../Custom/pages/Concepts/ModxDocker'
import { seo } from '../Custom/pages/Concepts/ModxDocker/seo'
import { createPageMeta } from '../Custom/seo'

export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { ModxDockerPage as default }
