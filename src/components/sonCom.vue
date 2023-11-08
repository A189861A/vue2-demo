<template>
    <div>
        sonCom: {{ name }}--{{ $attrs.age }}
        <br>
        <grandsonCom v-bind="$attrs" v-on="$listeners">
            <p>from son slot</p>
            <template v-slot:footer="slotProps">
                <div>
                    <h1>{{ slotProps.scopeName || 'xxx' }}</h1>
                    {{ slotProps }}
                </div>
            </template>
        </grandsonCom>
        <br>
        <div v-if="msg"> {{ msg }}</div>
    </div>
</template>
<script>
import grandsonCom from './grandsonCom.vue';
export default {
    data() {
        return {}
    },
    inject: ['msg'],
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