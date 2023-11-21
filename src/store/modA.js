const moduleA = {
    namespaced: true,
    state: () => ({ // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
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
        // 在这个模块中， dispatch 和 commit 也被局部化了
        // 他们可以接受 `root` 属性以访问根 dispatch 或 commit

        // context对象会自动传入，它与store实例具有相同的方法和属性
        incrementModActions (context, payload) {
            console.log('--context--', context)
            // 异步
            setTimeout(() => { 
                // commit调用mutation来修改/保存数据
                context.commit('increment', payload)
            }, 2000);
        }
    },
    getters: {
        // 在这个模块的 getter 中，`getters` 被局部化了
      doubleCount (state) {
        return state.count * 2
      }
    }
}

  export default moduleA;