import { type App } from 'vue'
import elementPlus from 'element-plus'

export function LoadElementPlus(app: App) {
  app.use(elementPlus)
}
