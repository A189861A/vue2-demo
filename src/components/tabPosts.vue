<template>
    <div>
        <input type="text" v-model="text">
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: 1,
            checked: true
        }
    },
    props: [
    ],
    created() {
        
    },
}
</script>