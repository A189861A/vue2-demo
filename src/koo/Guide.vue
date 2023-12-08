<template>
    <div class="container">
      <p class="title">借款指南</p>
      <div class="card" style="display: flex; flex-direction: column;">
        <div class="first_line" style="display: flex; justify-content: space-between;">
            <img class="big_icon" src="../assets/high.png">
            <img class="big_icon" src="../assets/term.png">
            <img class="big_icon" src="../assets/quick.png">
        </div>
        <div class="second_line" style="display: flex; justify-content: space-between; margin: 20px 24px 20px 24px">

            <div style="display: flex; flex-direction: column; align-items: center;">
                <img class="small_icon" src="../assets/cheat.png">
                <p class="label">防诈骗</p>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center;">
                <img class="small_icon" src="../assets/increase.png">
                <p class="label">提额攻略</p>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center;">
                <img class="small_icon" src="../assets/borrow_guide.png">
                <p class="label">借款攻略</p>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center;">
                <img class="small_icon" src="../assets/repay.png">
                <p class="label">还款指南</p>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "KooHomeGuide",
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
    background-color: #FFFFFF;
    border-radius: 8px;
    margin-top: 16px;
    padding: 10px 10px 18px 10px;
  }

  .high {
    display: flex; 
    flex-direction: column;
  }

  .big_icon {
    width: 101px; height: 66px;
  }
 
  .small_icon {
    width: 40px; height: 40px;
  }

  .label {
    color: #333333; font-size: 12px; font-weight: normal;
  }
  </style>
  