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
    component: () => import(/* webpackChunkName: "routerParam" */ '../views/routerParam.vue'),
    // 布尔模式
    // props: true // 当 props 设置为 true 时，route.params 将被设置为组件的 props。

    // 对象模式
    props: { name: 'World' } // props 是一个对象时，它将原样设置为组件 props/$attrs。当 props/$attrs 是静态的时候很有用

    // 函数模式
    // 返回 props 的函数接受的参数为路由记录 route
    // props: (route) => {
    //   return { name: route.query.d + "!" }
    // }
  },
  {
    path: '/routerParamFrom',
    name: 'routerParamFrom',
    component: () => import(/* webpackChunkName: "routerParamFrom" */ '../views/routerParamFrom.vue'),
  },
  {
    path: '/mixinView',
    name: 'mixinView',
    component: () => import(/* webpackChunkName: "mixinView" */ '../views/mixinView.vue'),
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
