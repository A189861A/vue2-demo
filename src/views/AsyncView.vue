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
    // tabArchive

    // 遇到异步组件，会将其从主脚本中分离，减少脚本体积，加快首屏加载时间。当遇到场景需要使用该组件时，才会去加载组件脚本。

    // 写法一
    // 'tabArchive': () => import('../components/tabArchive.vue'),

    // 写法二
    'tabArchive': (resolve) => {
      setTimeout(() => {
        return require(['../components/tabArchive.vue'], resolve);
      }, 2000);
    },
  },
  mounted(){
  },
  methods: {

  }
}
</script>
<style scoped>
</style>