<template>
  <div id="app">
    <baseLayout>
        <template v-slot:header>页面头部</template>
        <!-- 默认插槽 -->
        <template v-solt:default>
          <router-view/>
        </template>
        <template v-solt:footer></template>
    </baseLayout>
  </div>
</template>
<script>
import baseLayout from './layout/index.vue'
export default {
  components: {baseLayout}
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
.nav-left{
  display: flex;
  flex-direction: column;
}
</style>
