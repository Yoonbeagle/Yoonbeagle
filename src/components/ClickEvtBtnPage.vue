<template>
  <div class="btn-area">
    <v-btn
      :class="{'on' : isActive}"
      @click="toggleClass()"
      class="btn-type1"
    >{{ msg }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'ClickEvtBtn',
  data () {
    return {
      msg: 'Click Me!',
      isActive: false
    }
  },
  methods: {
    toggleClass () {
      this.isActive = !this.isActive
    }
  }
}
</script>
