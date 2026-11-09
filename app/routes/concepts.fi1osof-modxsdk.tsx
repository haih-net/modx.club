import type { MetaFunction } from 'react-router'
import { Fi1osofModxsdkPage } from '../Custom/pages/Concepts/Fi1osofModxsdk'
import { seo } from '../Custom/pages/Concepts/Fi1osofModxsdk/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Fi1osofModxsdkPage as default }
