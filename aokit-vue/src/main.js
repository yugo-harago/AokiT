import { createApp } from 'vue'
import './assets/css/styles.css'
import './assets/fonts/font-awesome.min.css'
import 'bootstrap'
import App from './App.vue'

import router from './router'

createApp(App).use(router).mount('#app')
