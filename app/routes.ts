import type { RouteConfig } from '@react-router/dev/routes'
import { flatRoutes } from '@react-router/fs-routes'

export default flatRoutes({
  ignoredRouteFiles: [
    'routes/admin-panel._index.tsx',
    'routes/admin-panel.chat.dialogues.$chatId.tsx',
    'routes/admin-panel.chat.dialogues._index.tsx',
    'routes/admin-panel.chat.messages.tsx',
    'routes/admin-panel.errors.tsx',
    'routes/ai.tsx',
    'routes/concepts.tsx',
    'routes/panel.profile.tsx',
    'routes/signin.tsx',
    'routes/signup.tsx',
    'routes/users.$userId.tsx',
    'routes/users._index.tsx',
  ],
}) satisfies RouteConfig
