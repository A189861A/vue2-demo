import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './modA'

// Vuex 插件就是一个函数，它接收 store 作为唯一参数：
// 在插件中不允许直接修改状态，只能通过提交 mutation 来触发变化。
const myPlugin = store => {
    // 当 store 初始化后调用
    store.subscribe((mutation, state) => {
      // 每次 mutation 之后调用
      // mutation 的格式为 { type, payload }
      console.log('---vuex-plugin-mutation---',mutation)
      console.log('---vuex-plugin-state---',state)
    })
  }
  

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [myPlugin],
  state: {
    count: 0,
    num: 1
  },
//  作用:在state中的数据的基础上，进一步对数据进行加工得到新数据。(与组件中computed一样)
  getters: {
    getterCount: function(state){
        return state.count;
    }
  },
//   Mutation 必须是同步函数
  mutations: {
    increment (state, payload) {
      state.count = payload
    },
    incrementNo (state, payload) {
        state.num = payload
      }
  },
  actions: {
    // context对象会自动传入，它与store实例具有相同的方法和属性
    incrementActions (context, payload) {
        // 异步
        setTimeout(() => { 
            // commit调用mutation来修改/保存数据
            context.commit('increment', payload)
        }, 2000);
      }
  },
  modules: {
    moduleA
  }
})

export default store;