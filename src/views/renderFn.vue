<template>
  <div class="renderFn">
    <fnCom title="xxxx" :level=1 >
      <!-- 静态插槽 -->
      <template v-slot:header>
        <div >
          头部
        </div>
      </template>
      <!-- 作用域插槽 -->
      <template v-slot:footer="childMsg">
        <div >
          脚部{{ childMsg }}
        </div>
      </template>
    </fnCom>
  </div>
</template>
<script>
import renderFnChildVue from '@/components/renderFnChild.vue';

const fnCom = {
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render: function(h) {
    let childHeader = this.$slots.header
    return h(
      // {String | Object | Function}
      // 一个 HTML 标签名、组件选项对象，或者
      // resolve 了上述任何一种的一个 async 函数。必填项。
      'div', // div: 子组件
      {
      'class': {
        default: true,
        active: true 
      },
      style: {
        color: 'red',
        fontSize: '14px',
        padding: '20px'
      },
      // 普通的 HTML attribute
      attrs: {
        id: 'child-id'
      },
      domProps: {
        // innerHTML: 'baz',
        'data-name': 'child' //子组件的dom属性
      },
      ref: 'myRef',
      key: 'myKey',
      on: {
        click: () => {
          console.log('--fnCom-child-div---', this.$refs.myRef)
        }
      },
    }, 
    // {String | Array}
    // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
    // 也可以使用字符串来生成“文本虚拟节点”。可选。
    [
      h('p', {},['xx', this.level]),
      h('div', childHeader), //静态插槽
      h('div',[
        // 作用域插槽
        this.$scopedSlots.footer({
          text: 'sss'
        })
      ]),
      // renderFnChildVue  子组件
      h(renderFnChildVue,{
          // 仅用于组件，用于监听原生事件，而不是组件内部使用
          // `vm.$emit` 触发的事件。
          nativeOn: { // ******在父组件中给子组件绑定click事件******
            click: function(){
              alert(1)
            }
          },
          on:{
            customClick: function() { // 自定义事件
              alert('customclick')
            }
          },
          style: {
            height: '50px',
            background: '#fff'
          },
          props: {
            'childMain': this.level + '---renderFnChildVue'//这里就是用来给子组件传值的
          },
          domProps: {
            'title': this.level + ''//这个其实就是子组件的dom属性
          }
        },999)
    ])
  }
}

export default{
  name: 'RenderFnView',
  data(){
    return {
      xx:1
    }
  },
  components: {fnCom},
  mounted(){
  },
  methods: {
    clickHandle(){
      this.$toast({
        msg: '测试弹窗',
      })
    }
  }
}
</script>
<style scoped>
.about{
  position: relative;
}
.default{
  color: blue;
}
.active{
  background: #ccc;
}
</style>