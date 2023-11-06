<template>
    <div class="app-header">custom-header</div>
</template>
<script>
export default {
    name: 'app-header',
    data(){
        return {
        }
    }
}
</script>
<style scoped>
.app-header{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    line-height: 30px;
    background: #ccc;
}
</style>