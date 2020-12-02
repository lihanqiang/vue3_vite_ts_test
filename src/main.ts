import { createApp } from 'vue'
import App from './App.vue'
// ant-design-vue
import antd_components, { message } from './utils/antd'
import 'ant-design-vue/dist/antd.less'
// 全局样式
import './styles/index.less'
// 路由
import { router } from './router'
// iconfont
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'

const app = createApp(App)
app.config.globalProperties.$message = message
/* Automatically register components under Button, such as Button.Group */
Object.keys(antd_components).forEach(key => {
  const Com = antd_components[key]
  app.use(Com)
})
app.use(router)
app.mount('#app')
