// core
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// load
import { LoadPlugins } from '@/plugins'

// css
import 'element-plus/dist/index.css'

const app = createApp(App)

// 載入組件
LoadPlugins(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
