<template>
  <div class="child-demo" @click="clickHandle">
    {{childMain}}
      <br>
        renderFnChild
      <br>
      <div class="default">默认插槽：<slot d="d">插槽默认值</slot></div>
      <div class="name">具名插槽：<slot name="name"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'renderFnChildVue',
  components: {

  },
  props: {
    childMain: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: { 
    clickHandle() {
        this.$emit('customClick')
    }
  },
  computed: { }
}
</script>
<style  scoped></style>