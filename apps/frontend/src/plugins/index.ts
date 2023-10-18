/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import Colada from 'colada-plugin'
import vuetify from '@/plugins/vuetify'
import pinia from '@/store'
import router from '@/router'

// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
  // TODO: only if dev build
  app.use(Colada)

  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
