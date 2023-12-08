<template>
  <div class="container">
    <p class="title" >
      我要提额
    </p>
    <div class="table">
        <div style="padding-top: 18px; display: flex; flex-direction: column">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <div style="display: flex; align-items: center">
            <img
              class="icon"
              src="../assets/store_icon.png"
            />
            <p
              class="label"
            >
              网商贷认证
            </p>
          </div>
          <div style="display: flex; align-items: center">
            <p class="go_get">
              去认证
            </p>
            <img
              class="arrow"
              src="../assets/arrow_icon.png"
            />
          </div>
        </div>
        <img style="margin-top: 20px;" src="../assets/black_line.png" />
      </div>
      <div style="padding-top: 18px; display: flex; flex-direction: column">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <div style="display: flex; align-items: center">
            <img
              class="icon"
              src="../assets/drive_icon.png"
            />
            <p
             class="label"
            >
            行驶证认证
            </p>
          </div>
          <div style="display: flex; align-items: center">
            <p class="go_get">
              去认证
            </p>
            <img
              class="arrow"
              src="../assets/arrow_icon.png"
            />
          </div>
        </div>
        <img style="margin-top: 20px;" src="../assets/black_line.png" />
      </div>
      <div style="padding-top: 18px; display: flex; flex-direction: column">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <div style="display: flex; align-items: center">
            <img
              class="icon"
              src="../assets/tax_icon.png"
            />
            <p
              class="label"
            >
            个税认证
            </p>
          </div>
          <div style="display: flex; align-items: center">
            <p class="go_get">
              去认证
            </p>
            <img
              class="arrow"
              src="../assets/arrow_icon.png"
            />
          </div>
        </div>
        <img style="margin-top: 20px;" src="../assets/black_line.png" />
      </div>
      <div style="padding: 18px 0px; display: flex; align-items: center; margin: 0 auto;">
        <p class="more">更多提额认证项</p>
        <img class="arrow" src="../assets/blue_arrow.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KooHomeIncrease",
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
.table {
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 8px;
  margin-top: 16px;
  padding: 10px 10px 1px 20px;
}

.icon {
    width: 30px; height: 30px
}
.label {
    color: #333333;
    font-size: 14px;
    font-weight: 500;
    margin-left: 16px;
}

.go_get {
    color: #333333; font-size: 12px; font-weight: normal;
}
.arrow {
    width: 12px; height: 12px
}
.more {
    color: #6D93CD; font-size: 12px; font-weight: 500;
}
</style>
