import Vue from 'vue';
import customToast from "./toast.vue";

const Dialog = Vue.extend(customToast); // 返回一个vue子类
let app;
let div;
const showToast = (options) => {
    if(app || div) {
        app.$destroy();
        div.remove();
    }
    //创建实例并且挂载
    app = new Dialog().$mount();
    div = app.$el;
    //初始化参数
    for (let key in options) {
        app[key] = options[key];
    }
    console.log(app);
    //将元素插入body中
    document.body.appendChild(div);
    setTimeout(() => {
        app.$destroy();
        div.remove();
    }, 2000);
}
export default showToast;