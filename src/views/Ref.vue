<template>
  <div class="ref-area">
    <v-btn
      color="primary"
      @click="callRef">Ref로 다른 컴포넌트에 접근하기</v-btn>

    <div class="ref-wrap">
      <comp-ref
        ref="exRef" />
    </div>

    <div class="ref-wrap">
      <comp-ref-second
        ref="exRef2" />
    </div>
  </div>
</template>

<script>
import CompRef from '@/components/CompRef'
import CompRefSecond from '@/components/CompRefSecond'

export default {
  name: 'Ref',
  components: { CompRef, CompRefSecond },
  data () {
    return {

    }
  },
  methods: {
    callRef () {
      this.$refs.exRef.focus()
    }
  },
  mounted () {
    this.$refs.exRef2.seconRef()
  }
}
</script>

<style scoped>
.ref-wrap{margin-top:20px;/*border:1px solid #20c997;*/}
</style>
