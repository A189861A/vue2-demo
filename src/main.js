import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 组册全局组件
import appHeader from './components/appHeader.vue'
Vue.component('appHeader', appHeader);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
