import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/views/layout'
import Css from '@/views/css/Index.vue'

const constantRoutes = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/css',
    component: Css
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router