import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 组册全局组件
import appHeader from './components/appHeader.vue'
Vue.component('appHeader', appHeader)

// toast弹窗
import showToast from './components/toast'
Vue.prototype.$toast = showToast

// 把bus挂载到了Vue的原型上, 保证所有的组件都能通过 this.$bus访问到事件总线
import eventBus from './utils/eventBus'
Vue.prototype.$bus = eventBus

Vue.config.productionTip = false

// 1. 导入store
import store from './store' 

new Vue({
  router,
  store, // 注入Vue实例
  render: h => h(App)
}).$mount('#app')
