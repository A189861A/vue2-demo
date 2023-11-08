<template>
    <div>
        grandson: {{ $attrs.age }}
        <button @click="updateHandle">update age</button>
        <slot name="footer" v-bind:scopeName="scopeName"></slot>
    </div>
</template>
<script>
export default {
    name: 'grandson-Com',
    data() {
        return {
            scopeName: 'grandson-footer'
        }
    },
    created(){
    //   this.$slots.default;
        console.log('---$slots---',this.$slots)
        console.log('---$scopedSlots---',this.$scopedSlots.footer('dddd'));
        
    },
    methods: {
        updateHandle() {
            this.$emit('upFoo', ++this.$attrs.age)
        }
    }
}
</script>