<template>
    <div>
        <input type="text" v-model="msg">
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: ''
        }
    },
    methods: {

    },
    mounted(){
        this.$watch('msg', function(newVal, oldVal) {
            console.log(newVal, oldVal);
        })
    }   
}
</script>

<!-- 
# vue实例方法

- vm.$set
- vm.$delete
- vm.$watch

- vm.$on
- vm.$emit
- vm.$once
- vm.$off

- vm.$mount
- vm.$destory
- vm.$nextTick 

-->