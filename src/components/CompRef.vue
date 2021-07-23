<template>
  <div class="ex-ref">
    <p>- Ref Component1</p>
    <input type="text" ref="textInpt" placeholder="버튼을 클릭하면 포커스됩니다.">
  </div>
</template>

<script>
export default {
  methods: {
    focus () {
      this.$refs.textInpt.focus()
    }
  }
}
</script>

<style scoped>
input{width:300px;height:30px;margin:10px 0;padding:0 10px;border:1px solid lightgray;caret-color:purple;}
</style>
