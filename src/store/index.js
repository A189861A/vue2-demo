import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
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
  }
})

export default store;