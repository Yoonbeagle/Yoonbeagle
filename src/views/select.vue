<template>
  <div class="select-wrap">
    <select class="custom-select" v-model="choosen" @change="changeOption">
      <option v-for="(region, i) in options" :key="i" :value="region.v">{{ region.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'select',
  data () {
    return {
      options: [
        { v: 'S', text: 'Seoul' },
        { v: 'B', text: 'Busan' },
        { v: 'J', text: 'Jeju' },
        { v: 'D', text: 'Daegu' }
      ],
      choosen: 'J'
    }
  },
  methods: {
    changeOption () {
      alert(this.choosen)
    }
  }
}
</script>
