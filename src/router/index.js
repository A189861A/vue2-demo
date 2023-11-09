import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/vmFn',
    name: 'vmFn',
    component: () => import(/* webpackChunkName: "vmFn" */ '../views/vmFn.vue')
  },
  {
    path: '/parentView',
    name: 'parentView',
    component: () => import(/* webpackChunkName: "parentView" */ '../views/parentView.vue')
  },
  {
    path: '/scopedSlots',
    name: 'scopedSlots',
    component: () => import(/* webpackChunkName: "scopedSlots" */ '../views/scopedSlots.vue')
  },
  {
    path: '/keepAliveView',
    name: 'keepAliveView',
    component: () => import(/* webpackChunkName: "keepAliveView" */ '../views/keepAliveView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
