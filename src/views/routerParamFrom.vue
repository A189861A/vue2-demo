<template>
      <div class="routerParamFrom" @click="toDetails">To routerParam</div>
  </template>
  <script>
  export default{
    data(){
      return {}
    },
    mounted(){
    },
    methods: {
      toDetails() {
        // 字符串路径
        // this.$router.push('/routerParam/111')

        // 带有路径的对象
        // this.$router.push({path: '/routerParam/111'})

        // 路由hash模式时，慎用!!!!
        // this.$router.push({path: '/routerParam/111', hash: '#car'})

        // 命名路由，路由配置时，需要 name 字段
        // this.$router.push({ name: 'routerParam', params: { id: '111' } })   //  --> /routerParam/111
        
        // /routerParam/111?d=2
        this.$router.push({ name: 'routerParam', params: { id: '111' }, query: {d: 2} }) 

        // *** `params` 不能与 `path` 一起使用 ***
        // this.router.push({ path: '/routerParam', params: { id: '001' } }) 
      }
    }
  }
  </script>
  <style scoped>

  </style>