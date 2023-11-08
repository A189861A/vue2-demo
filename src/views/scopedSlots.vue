<template>
    <div>
        <test :data="data">
            <template>默认插槽</template>
            <template v-slot:head="scope">
                <div style="color: red;">
                    {{scope.name}}
                </div>
            </template>
        </test>
    </div>
</template>
<script>
let test = {
    props: {
        data: {
        type: Array,
        default () {
            return []
        }
        }
    },

    data () {
        return {
        }
    },

    render () {
        return (
        <ul class='test'>
            {this.data.map(item => (
            <li>
                {/* 给组件的default插槽写入内容 */}
                {this.$slots.default}
                <br />-----------------<br/>
                {/* this.$scopedSlots.default是一个函数，通过传入参数可以将参数传送给 作用域对象 */}
                {this.$scopedSlots.head(item)} 
            </li>
            ))}
        </ul>
        )
    }
};
export default{
    data(){
        return {
            data: [
                { name: 111 },
                { name: 222 },
                { name: 333 }
            ]
        }
    },
    components: {
        test
    },
    methods: {

    }
}
</script>