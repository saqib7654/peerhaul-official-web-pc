import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ant from 'ant-design-vue'

import 'ant-design-vue/dist/reset.css'
import 'virtual:svg-icons-register'
import '@/style/common.css'
import 'virtual:uno.css'
import '@/style/globle.css'

createApp(App).use(router).use(store).use(ant).mount('#app')
