<template>
  <div class="ex-ref">
    <p ref="tagP">- Ref Component2</p>
  </div>
</template>

<script>
export default {
  methods: {
    seconRef () {
      this.$refs.tagP.style.borderBottom = '2px solid purple'
      console.log('second loaded!!!')
    }
  }
}
</script>

<style scoped>
.ex-ref{margin-top:10px;}
</style>
