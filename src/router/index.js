import { createRouter, createWebHashHistory } from 'vue-router'
import HomePageVue from '../components/HomePage.vue'
import GesteDetail from '../components/GesteDetail.vue'

const routes = [
    {
      path: '/',
      name : 'homepage',
      component : HomePageVue
    },
    {
      path: '/geste/:id',
      name: 'gesteDetail',
      component: GesteDetail
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router