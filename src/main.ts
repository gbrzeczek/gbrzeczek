import './assets/main.css'
import * as VueRouter from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'
import AboutMeVue from './components/AboutMe.vue'
import ContactInfoVue from './components/ContactInfo.vue'

const routes = [
  { path: '/', component: AboutMeVue },
  { path: '/contact', component: ContactInfoVue },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

//if is prod, base is /personal-website/

const baseUrl = import.meta.env.PROD ? '/personal-website/' : '/'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(baseUrl),
  routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
