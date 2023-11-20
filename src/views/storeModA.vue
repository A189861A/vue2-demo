<template>
    <div class="sotreA">
        <button @click="clickHandle">state-modA-increment</button>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
            a: 1
        }
    },
    created() {
        console.log('---this.$store---', this.$store)
    },
    computed: {
        ...mapState('moduleA', {
            'count': state => state.count
        })
    },
    methods: {
        clickHandle() {
            this.$store.commit('moduleA/increment', 111);//提交 mutation
            this['moduleA/incrementModActions'](333)
        },
        // 带命名空间的绑定函数
        ...mapActions([
            'moduleA/incrementModActions' // -> this['moduleA/incrementModActions']()
        ])
    }
}
</script>