<template>
  <div class="about">
    <appHeader />
    <br><br>
    <h1 @click="clickHandle">This is an about page</h1>
  </div>
</template>
<script>
export default{
  data(){
    return {}
  },
  mounted(){
  },
  methods: {
    clickHandle(){
      this.$toast({
        msg: '测试弹窗',
      })
    }
  }
}
</script>
<style scoped>
.about{
  position: relative;
}
</style>