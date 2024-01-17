<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>first Name: <input type="text" v-model="firstName"></div>
    <div>last Name: <input type="text" v-model="lastName"></div>
    <div>full Name: {{ fullName }}</div>
    <br>
    <br>
    <p>
    Ask a yes/no question:
      <input v-model="question">
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      question: '',
      firstName: 'firstName',
      lastName: 'lastName'
    }
  },
  inject: ['foo', 'obj'],
  props: {
    msg: String
  },
  created() {
    console.log('----created-inject----', this.foo);
  },
  // 当需要在数据变化时 执行异步 或开销较大的操作时，这个方式是最有用的。
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      console.log('----newQuestion----', newQuestion);
      console.log('----oldQuestion----', oldQuestion);
    }
  },
  // 计算属性是基于它们的响应式依赖进行缓存的
  computed: {
    newFoo() {
      return this.foo()
    },
    fullName() {
      return this.firstName +  this.lastName;
    },
    // fullName: {
    //   // getter
    //   get: function () {
    //     return this.firstName + ' ' + this.lastName
    //   },
    //   // setter
    //   set: function (newValue) {
    //     var names = newValue.split(' ')
    //     this.firstName = names[0]
    //     this.lastName = names[names.length - 1]
    //   }
    // }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
