<template>
    <div class="grandsonCom">
        grandson: {{ $attrs.age }}
        <button @click="updateHandle">update age</button>
        <div v-if="msg"> {{ msg }}</div>
    </div>
</template>
<script>
export default {
    name: 'grandson-Com',
    data() {
        return {}
    },
    inject: ['msg'],
    created() {
        console.log('--grandson-$attrs--', this.$attrs);
        console.log('--grandson-$listeners--', this.$listeners);
    },
    methods: {

        updateHandle() {
            this.$emit('upFoo', ++this.$attrs.age)
        }
    }
}
</script>