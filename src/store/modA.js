const moduleA = {
    namespaced: true,
    state: () => ({
      count: 0
    }),
    mutations: {
      increment (state, payload) {
        // 这里的 `state` 对象是模块的局部状态
        if(payload) {
            state.count = payload;
        } else {
            state.count++
        }
      },
    },
    actions: {
        // context对象会自动传入，它与store实例具有相同的方法和属性
        incrementModActions (context, payload) {
            // 异步
            setTimeout(() => { 
                // commit调用mutation来修改/保存数据
                context.commit('increment', payload)
            }, 2000);
        }
    },
    getters: {
      doubleCount (state) {
        return state.count * 2
      }
    }
}

  export default moduleA;