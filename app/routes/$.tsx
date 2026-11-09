import type { MetaFunction } from 'react-router'
import { createPageMeta } from '../Custom/seo'

// Оставшиеся HTML-снимки доступны, пока их страницы переносятся в React-компоненты.
// Перенос завершён: все публичные страницы имеют собственные маршруты; fallback возвращает 404.
export const loader = (): never => {
  throw new Response('Страница не найдена', { status: 404 })
}
export const meta: MetaFunction = () => createPageMeta()
const NotFoundRoute: React.FC = () => null
// React Router требует default export в модуле маршрута.
export { NotFoundRoute as default }
