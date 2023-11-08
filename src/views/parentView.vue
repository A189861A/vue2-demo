<template>
    <div>
        parentView: {{ name }}
        <br>
        <sonCom :name="name" class="class-1" style="" :age="age" v-on:click="handle" @upFoo="update"></sonCom>
    </div>
</template>
<script>
import sonCom from '@/components/sonCom.vue';
export default {
    data() {
        return {
            name: 'name',
            age: 1
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
    methods: {
        handle() {
        },
        update(payload){
            this.age = payload;
        }
    }
}
</script>