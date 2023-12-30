import './assets/main.css'
import * as VueRouter from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'
import AboutMeVue from './components/AboutMe.vue'
import ContactInfoVue from './components/ContactInfo.vue'

const routes = [
  { path: '/', component: AboutMeVue },
  { path: '/contact', component: ContactInfoVue }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
