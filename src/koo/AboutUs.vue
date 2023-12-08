<template>
    <div class="container">
      <p class="title">我要借款</p>
      <img style="margin-top: 16px;" src="../assets/about_us.png">
      <img class="cooperate" src="../assets/cooperate.png">
    </div>
  </template>
  
  <script>
  export default {
    name: "KooHomeAbout",
    data() {
      return {};
    },
    props: {},
    // 当需要在数据变化时 执行异步 或开销较大的操作时，这个方式是最有用的。
    watch: {},
    // 计算属性是基于它们的响应式依赖进行缓存的
    computed: {},
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    margin: 16px;
  }

  .title {
    font-size: 16px; font-weight: 500; color: #333333;
  }
  .card {
    display: flex;
    flex-direction: column;
    background-color: #FFF2F2;
    border: 0.5px solid #FFD1D1;
    border-radius: 8px;
    margin-top: 16px;
    padding: 20px 12px 12px 15px;
  }

  .cooperate {
    padding: 60px 0px; width: 154px; height: 73px; margin: 0 auto;
  }
  </style>
  