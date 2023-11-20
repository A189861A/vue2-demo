<template>
    <div class="sotreA">
        <button @click="clickHandle">state-increment</button>
    </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'

export default {
    data() {
        return {}
    },
    created() {
        console.log('---this.$store---', this.$store)
    },
    methods: {
        clickHandle() {
            this.$store.commit('increment', 111);//提交 mutation
            setTimeout(() => {
                console.log(this.$store.getters.getterCount);
                this.incrementNo(111111)
                this.add(222)
                this.incrAction(33)
            }, 2000);
        },
        ...mapMutations([
            'incrementNo' //将 `this.incrementNo(参数)` 映射为 `this.$store.commit('incrementNo', 参数)`
        ]),
        ...mapMutations({
            add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
        }),
        ...mapActions([
            'incrementActions' // 将 `this.incrementActions(参数)` 映射为 `this.$store.dispatch('incrementActions', 参数)`
        ]),
        ...mapActions({
            incrAction: 'incrementActions'// 将 `this.incrAction()` 映射为 `this.$store.dispatch('incrementActions')`
        })
    }
}
</script>