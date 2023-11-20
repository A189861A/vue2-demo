<script>
export default {
    name: 'JSXChild',
    data() {
        return {
            text: '2',
        }
    },
    render() {
        // 子组件中设置插槽写法
        // 默认插槽做defalut，其他命名插槽为其名称

        console.log('---this.$scopedSlots---', this.$scopedSlots)
        return (<div>
            <div class='default'>{ this.$scopedSlots.default() }</div>
            <div class='content'>{ this.$scopedSlots.content() }</div>
            {this.$slots.default}
        </div>);
    }
}
</script>
