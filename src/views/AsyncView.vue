<template>
  <div class="asyncView">
    123
    <tabArchive />
  </div>
</template>
<script>
// import tabArchive from '@/components/tabArchive.vue';
export default{
  data(){
    return {}
  },
  components: {
    // 遇到异步组件，会将其从主脚本中分离，减少脚本体积，加快首屏加载时间。当遇到场景需要使用该组件时，才会去加载组件脚本。
    'tabArchive': () => import('../components/tabArchive.vue'),
    // tabArchive
  },
  mounted(){
  },
  methods: {

  }
}
</script>
<style scoped>
</style>