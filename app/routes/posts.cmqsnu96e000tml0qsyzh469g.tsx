import type { MetaFunction } from 'react-router'
import { Cmqsnu96e000tml0qsyzh469gPage } from '../Custom/pages/Posts/Cmqsnu96e000tml0qsyzh469g'
import { seo } from '../Custom/pages/Posts/Cmqsnu96e000tml0qsyzh469g/seo'
import { createPageMeta } from '../Custom/seo'
export const meta: MetaFunction = ({ error }) =>
  createPageMeta(error ? undefined : seo)
// React Router требует default export в модуле маршрута.
export { Cmqsnu96e000tml0qsyzh469gPage as default }
