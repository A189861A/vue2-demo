<template>
  <div id="app">
    <KooHome>
    </KooHome>
  </div>
</template>
<script>
import KooHome from './koo/KooHome.vue';
export default {
  components: {KooHome}
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
  height: 100%;
  width: 100%;
}
.nav-left{
  display: flex;
  flex-direction: column;
}
</style>
