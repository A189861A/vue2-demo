<template>
  <div class="container">
    <p class="title">我要借款</p>
    <div class="card">
      <p id="borrow_title">可借额度(元)</p>
      <div style="display: flex; justify-content: space-between;">
        <div style="display: flex;">
            <p id="borrow_amount">20,000</p>
            <p class="increase_label">已提额</p>
        </div>
        <button class="borrow_button">立即借款</button>
      </div>
      <div style="display: flex; align-items: center;">
        <p id="borrow_authority">借款服务由持牌金融机构提供服务</p>
        <img class="mark" src="../assets/notice_icon.png">
      </div>
      <img class="line" src="../assets/line.png">
      <div style="display: flex; align-items: center; margin-top: 12px;">
        <img class="special_icon" src="../assets/special.png">
        <p class="borrow_sale">限时优惠，首期免息</p>
        <img id="arrow_icon" src="../assets/arrow_icon.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KooHomeBorrow",
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

#borrow_title {
    font-size: 11px; font-weight: normal; color: #BEA6A6;
}
#borrow_amount {
    font-size: 26px; font-weight: normal; color: #333333;
}
#borrow_authority {
    font-size: 11px; font-weight: normal; color: #BEA6A6;
}
.mark {
    width: 18px; height: 18px;
}
.line {
    margin-top: 12px;
}
.special_icon {
    width: 36px; height: 18px;
}
.borrow_sale {
    margin-left: 6px; font-size: 12px; font-weight: normal; color: #333333;
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

.borrow_button {
    background-color: #FF5A5A;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 500;
    border-radius: 13.5px;
    padding: 7px 9px;
    border-style: none;
}

.increase_label {
    background-color: #FF5A5A;
    color: #FFFFFF;
    font-size: 11px;
    font-weight: 400;
    border-radius: 5px 13.5px 13.5px 0px;
    border-style: none;
    padding: 3px;
    height: 11px;
}
#arrow_icon {
    width: 12px; height: 12px;
  }
</style>
