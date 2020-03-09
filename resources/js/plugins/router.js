import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
// import Show from '../views/Show.vue'
import About from '../views/About.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
    // component: require('../views/Index.vue').default
    // component: _ => import('../views/Index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    // beforeEnter: (to, from, next) => {
    //   if (!store.getters['auth/authenticated'])
    //     return next({
    //       name: 'signin'
    //     })
    // }
  },
  // {
  //   path: '/blog/:id',
  //   name: 'blog',
  //   component: Show,
  //   props: true
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
