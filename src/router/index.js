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
  },
  {
    path: '/asyncView',
    name: 'AsyncView',
    component: () => import(/* webpackChunkName: "keepAliveView" */ '../views/AsyncView.vue')
  },
  {
    path: '/renderFn',
    name: 'renderFn',
    component: () => import(/* webpackChunkName: "renderFn" */ '../views/renderFn.vue')
  },
  {
    path: '/customEvent',
    name: 'customEvent',
    component: () => import(/* webpackChunkName: "customEvent" */ '../views/customEvent.vue')
  },
  {
    path: '/jsx',
    name: 'jsx',
    component: () => import(/* webpackChunkName: "JAX" */ '../views/JSX.vue')
  },
  {
    path: '/storeA',
    name: 'store-a',
    component: () => import(/* webpackChunkName: "JAX" */ '../views/store-a.vue')
  },
  {
    path: '/storeModA',
    name: 'storeModA',
    component: () => import(/* webpackChunkName: "storeModA" */ '../views/storeModA.vue')
  },
  {
    path: '/routerParam/:id',
    name: 'routerParam',
    component: () => import(/* webpackChunkName: "routerParam" */ '../views/routerParam.vue')
  },
  {
    path: '/routerParamFrom',
    name: 'routerParamFrom',
    component: () => import(/* webpackChunkName: "routerParamFrom" */ '../views/routerParamFrom.vue')
  },
]

export {routes};

const router = new VueRouter({
  mode: 'history', // history  hash
  base: process.env.BASE_URL,
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log(to, from)
  next();
})




export default router
