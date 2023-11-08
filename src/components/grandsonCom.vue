<template>
    <div>
        grandson: {{ $attrs.age }}
        <button @click="updateHandle">update age</button>
    </div>
</template>
<script>
export default {
    name: 'grandson-Com',
    data() {
        return {}
    },
    methods: {
        updateHandle() {
            this.$emit('upFoo', ++this.$attrs.age)
        }
    }
}
</script>