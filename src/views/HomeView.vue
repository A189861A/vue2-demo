<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg"/>
    <button @click="editMsgHandle">按钮</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
console.log('--HelloWorld--', HelloWorld)
export default {
  name: 'HomeView',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    editMsgHandle() {
      this.msg = 'new msg'
    },
  },
  components: { // 局部组件
    HelloWorld
  },
  beforeCreate() {
    // 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前 同步调用。 (数据是获取不到的)
    console.log('beforeCreate')
  },
  created() {
    // 在实例创建完成后被立即同步调用
    // 这个钩子函数里面，可以访问到数据,可以进行相关初始化事件的绑定、发送请求操作
    console.log('created')
  },
  beforeMount() {
    // 相关的 render 函数首次被调用
    console.log('beforeMount')
  },
  mounted() {
    // Create vm.$el and replace 'el' with it;
    // ps: mounted 不会保证所有的子组件也都被挂载完成。如果你希望等到整个视图都渲染完毕再执行某些操作，可以在 mounted 内部使用 vm.$nextTick
    console.log('mounted', this.$el)
  },
  beforeUpdate() {
    // 在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器
    // 这个钩子函数初始化的不会执行,当组件挂载完毕的时候，并且当数据改变的时候，才会立马执行,这个钩子函数获取dom的内容是更新之前的内容
    console.log('beforeUpdate')
  },
  updated() {
    // 在虚拟 DOM 重新渲染和更新完毕之后被调用
    console.log('updated')
  },
  beforeDestroy() {
    // 实例销毁之前调用
    // 当组件销毁的时候，就会触发这个钩子函数代表销毁之前，可以做一些善后操作,可以清除一些初始化事件、定时器相关的东西
    console.log('beforeDestroy')
  },
  destroyed() {
    // 实例及销毁后调用
    // 对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁
    console.log('destroyed')
  },
}
</script>
