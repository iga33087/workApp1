import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Introduction',
    name: 'Introduction',
    component: () => import('../views/Introduction.vue')
  },
  {
    path: '/QA',
    name: 'QA',
    component: () => import('../views/QA.vue')
  },
  {
    path: '/Page1',
    name: 'Page1',
    component: () => import('../views/Page1.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
