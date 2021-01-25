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
    path: '/Download',
    name: 'Download',
    component: () => import('../views/Download.vue')
  },
  {
    path: '/Privacy',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue')
  },
  {
    path: '/Article',
    name: 'Article',
    component: () => import('../views/Article.vue')
  },
  {
    path: '/Article/:id',
    name: 'ArticleDetail',
    component: () => import('../views/ArticleDetail.vue')
  },
  {
    path: '/Page1',
    name: 'Page1',
    component: () => import('../views/Page1.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to) {
    if(to.hash) {
      return { selector: to.hash }
    }
  }
})

export default router
