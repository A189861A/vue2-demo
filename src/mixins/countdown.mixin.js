
/**
 * @description: 
 * @param {string} getterkey 要注入的属性名，改属性可读写，用于获取或设置剩余秒数
 * @param {string} setterKey 要注入的方法名，可选，改方法用于重置剩余秒数
 * @return {*} 对象
 */
export default function(getterkey, setterKey) {
    if(typeof getterkey === 'string') {
        const mixin = {
            data() {
                return {
                    // 属性注入到data中
                    [getterkey]: 0,
                }
            },
            created() {
                let timer = null;
                this.$watch(
                    getterkey,
                    (val, oldVal) => {
                        if (timer !== null) {
                            clearTimeout(timer);
                            timer = null;
                        }
                        // 非数字类型转成数字类型
                        if(typeof val !== 'number') {
                            this[getterkey] = Number(val);
                        }
                        // 非法值，转成 0
                        if(!isFinite(val)) {
                            this[getterkey] = 0;
                        }
                        // 小数，向上取整
                        if (val % 1 !== 0) {
                            this[getterkey] = Math.ceil(val);
                        }
                        if(val > 0) {
                            timer = setTimeout(() => {
                                this[getterkey] = val -1;
                            }, 
                            // 整数倒计时取1s，小数时倒计时超出整数秒的时间
                            oldVal % 1 > 0 ? (oldVal *1000) % 1000 : 1000
                            );
                        }
                    },
                    {
                        immediate: true
                    }
                );
                // 组件销毁时清除定时器
                this.$on('hook:destroyed', () => {
                    if(timer !== null) {
                        clearTimeout(timer);
                    }
                });
            },
        };
        if(typeof setterKey === 'string') {
            // 再注入一个方法
            mixin.methods = {
                [setterKey](val) {
                    this[getterkey] = val;
                }
            }
        }
        return mixin;
    }
    throw new Error("Invalid arguments");
}