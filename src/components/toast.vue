<template>
    <div class="custom-toast">{{ msg }}</div>
</template>
<script>
export default {
    name: 'custom-toast',
    data(){
        return {
            msg: 'custom-toast'
        }
    }
}
</script>
<style scoped>
.custom-toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 0, 0, 0.2);
    padding: 5px;
    border-radius: 5px;
}
</style>