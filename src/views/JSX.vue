<script>
import JSXChild from '../components/JSX-Child.vue'
export default {
    name: 'JSX',
    data() {
        return {
            text: '1',
            arr: [1, 2, 3, 4],
            bool: true
        }
    },
    comments: {
        JSXChild
    },
    render() {
        // 在cli4以后创建的项目已经支持直接在jsx中v-model了

        // demo-1
        // 只有prop是value并且event是input的默认情况适用
        // return (<input v-model={ this.text } />)

        // demo-2
        // return (
        //     <input value={this.text} onInput={(e) => {
        //         this.text = e.target.value;
        //     }} />
        // )

        // demo-3
        // return (
        //     // v-if
        //     // this.bool && <div>v-if</div>
            
        //     // v-if v-else
        //     // this.bool ? <div>111</div> : <div>222</div>

        //     // v-for
        //     <div>
        //         {
        //             this.arr.map((item) => {
        //                return <div>{item}</div>
        //             })
        //         }
        //     </div>
        // )

        // demo-4
        // 父组件中使用插槽
        // JSX 中并不支持基本的具名插槽写法--> 以通过 作用域插槽 的方式来解决
        return (<JSXChild scopedSlots={{
            default: () => <div>这是默认插槽内容</div>,
            content: () => <div>这是具名插槽内容</div>,
          }} >111</JSXChild>);
    }
}
</script>