<template>
  <div class="mixinView">
    <button :disabled="!!seconds" @click="seconds = 60">
      {{ seconds || '发送验证码' }}
    </button>
  </div>
</template>
<script>
import countdown from '@/mixins/countdown.mixin.js' 

export default{
  data(){
    return {
    }
  },
  mixins: [countdown('seconds', 'setCountdown')],
  mounted(){
  },
  methods: {

  }
}
</script>
<style scoped>
button{
  width: 100px;
}
</style>