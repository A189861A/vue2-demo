<template>
    <div>
        parentView: {{ name }}
        <br>
        <sonCom :name="name" class="parent-class" :style="{ color: textColor }" :age="age" :sex="1" v-on:click="handle" @upFoo="update"></sonCom>
    </div>
</template>
<script>
import sonCom from '@/components/sonCom.vue';
export default {
    data() {
        return {
            name: 'name',
            age: 1,
            parentClass: 'parent-class',
            textColor: 'red',
            textSize: '20px'
        }
    },
    provide() {
        return {
            msg: '来自爷爷级组件信息'
        }
    },
    components: {
        sonCom
    },
    mounted(){
        // 订阅事件 - 接收组件值
        this.$bus.$on('update',this.update)
    },
    destroyed () {
        // 取消对bus事件的监听
        this.$bus.$off('update');
    },
    methods: {
        handle() {
        },
        update(payload){
            console.log(arguments)
            this.age = payload;
        }
    }
}
</script>