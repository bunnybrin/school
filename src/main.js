import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import pages
import HomePage from './pages/HomePage.vue'
import Class5Page from './pages/Class5Page.vue'
import Class6Page from './pages/Class6Page.vue'
import Class7Page from './pages/Class7Page.vue'
import Class8Page from './pages/Class8Page.vue'
import Class9Page from './pages/Class9Page.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/5-class', component: Class5Page },
  { path: '/6-class', component: Class6Page },
  { path: '/7-class', component: Class7Page },
  { path: '/8-class', component: Class8Page },
  { path: '/8-class/geometry', component: Class8Page, props: { subject: 'geometry' } },
  { path: '/8-class/geometry-theory', component: Class8Page, props: { subject: 'geometry-theory' } },
  { path: '/8-class/geometry-parallelogram', component: Class8Page, props: { subject: 'geometry-parallelogram' } },
  { path: '/8-class/geometry-rectangle', component: Class8Page, props: { subject: 'geometry-rectangle' } },
  { path: '/8-class/algebra', component: Class8Page, props: { subject: 'algebra' } },
  { path: '/8-class/computer-science', component: Class8Page, props: { subject: 'computer-science' } },
  { path: '/9-class', component: Class9Page },
  { path: '/8-class/solutions', component: import('./pages/Solutions.vue') },
]

const router = createRouter({
  history: createWebHashHistory('/school/'),
  mode: 'hash',
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')