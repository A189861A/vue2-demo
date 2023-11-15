<template>
  <div class="child-demo" @click="clickHandle">
  {{childMain}}
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