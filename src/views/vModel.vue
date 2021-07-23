<template>
    <div class="inpt-wrap">
        <input type="text" v-model="inptValue" />
        <v-btn @click="getData">Get</v-btn>
        <v-btn @click="setData">Set</v-btn>
        <v-btn @click="resetData">Reset</v-btn>
    </div>
</template>

<script>
export default {
  name: 'vModel',
  data () {
    return {
      inptValue: '이름을 입력하세요.'
    }
  },
  methods: {
    getData () {
      alert(this.inptValue)
    },
    setData () {
      this.inptValue = '생년월일을 입력하세요.'
    },
    resetData () {
      this.inptValue = null
    }
  }
}
</script>
