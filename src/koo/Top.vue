<template>
    <div class="container">
        <div class="nav">
            <img alt="Koo Top Logo" class="top_logo" src="../assets/koo_top_logo.png">
            <div class="icons">
                <img alt="Koo Top Scan Icon" class="scan_icon" src="../assets/scan_icon.png">
                <img alt="Koo Top Message Icon" class="msg_icon" src="../assets/msg_icon.png">
            </div>
        </div>
        
        <img alt="Koo Top Message Icon" class="koo_banner" src="../assets/koo_banner.png">
        
        <div class="market">
            <div class="market_content">
                <div style="display: flex; align-items: center;">
                    <img class="bell" src="../assets/bell_icon.png">
                    <p id="market_text">营销文案展示跑马灯区域</p>
                </div>
                <div style="display: flex; align-items: center;">
                    <p id="go_get">去领取</p>
                    <img id="arrow_icon" src="../assets/arrow_icon.png">
                </div>
            </div>
        </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'KooHomeTop',
    data() {
      return {}
    },
    props: {},
    // 当需要在数据变化时 执行异步 或开销较大的操作时，这个方式是最有用的。
    watch: {},
    // 计算属性是基于它们的响应式依赖进行缓存的
    computed: { },
  }
  </script>
  <style scoped>
  .container {
    height: 100%;
    width: 100%;
    background-color: #FF7080;
    display: flex;
    flex-direction: column;
  }
  .nav {
    display: flex;
    align-items: center;
    margin-top: 53px;
    margin-left: 18px;
    margin-right: 18px;
    justify-content: space-between;
  }

  .icons {
    display: flex;
  }

  .top_logo {
    height: 26px;
    width: 128px;
  }
  .msg_icon {
    height: 30px;
    width: 30px;
  }
  .scan_icon {
    height: 30px;
    width: 30px;
  }

  .koo_banner {
    height: 124px;
    margin-top: 14px;
    text-align: center;
    margin-left: 16px;
    margin-right: 16px;
  }

  .market {
    width: 100%;
    background-color: #FAFAFA;
    border-radius: 12px 12px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
  .market_content {
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 17px 17px;
    width: 343px;
    margin-top: 20px;
    padding: 8px;
    margin-left: 16px;
    margin-right: 16px;
  }

  .bell {
    width: 18px; 
    height: 18px;
  }

  #market_text {
    font-size: 12px; font-weight: normal; margin-left: 7px;
  }

  #go_get {
    font-size: 12px; font-weight: 400; margin-right: 2px;
  }

  #arrow_icon {
    width: 12px; height: 12px;
  }
  </style>
  