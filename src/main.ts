import { createApp } from 'vue'
import App from './App.vue'
// 全局样式
import './styles/index.css'
// 路由
import { router } from './router'
// iconfont
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'
// antd
// to do import when use
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
app.use(Antd)
app.use(router)
app.mount('#app')
