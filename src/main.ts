import './assets/main.css'
import * as VueRouter from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'
import AboutMeVue from './components/AboutMe.vue'
import ContactInfoVue from './components/ContactInfo.vue'
import MyServicesVue from './components/MyServices.vue'

const routes = [
  { path: '/', component: AboutMeVue },
  { path: '/contact', component: ContactInfoVue },
  { path: '/services', component: MyServicesVue },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const baseUrl = '/personal-website/'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(baseUrl),
  routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
