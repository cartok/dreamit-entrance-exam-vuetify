// Utilities
import { createPinia } from 'pinia'
import { PiniaColadaPlugin } from 'colada-plugin'

const pinia = createPinia()
pinia.use(PiniaColadaPlugin)

export default pinia
