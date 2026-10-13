import { index, route, type RouteConfig } from '@react-router/dev/routes'
const routes = [
  index('routes/modx-home.tsx'),
  route('*', 'routes/modx-page.tsx'),
] satisfies RouteConfig
export { routes as default }
