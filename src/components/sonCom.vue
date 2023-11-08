<template>
    <div>
        sonCom: {{ name }}--{{ $attrs.age }}
        <br>
        <grandsonCom v-bind="$attrs" v-on="$listeners"/>
    </div>
</template>
<script>
import grandsonCom from './grandsonCom.vue';
export default {
    data() {
        return {}
    },
    props: [
        'name'
    ],
    created() {
        console.log('--son-$attrs--', this.$attrs);
        console.log('--son-$listeners--', this.$listeners);
    },
    components: {grandsonCom},
}
</script>