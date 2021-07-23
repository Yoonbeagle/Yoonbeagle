<template>
  <div class="bus-area">
    <v-btn
      color="primary"
      @click="globalBtn">Button in Vue 1
    </v-btn>
    <evt-bus />
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js'
import EvtBus from '@/components/bus'

export default {
  name: 'EventBus',
  components: { EvtBus },
  data () {
    return {
      clickCount: 0
    }
  },
  methods: {
    globalBtn () {
      this.clickCount++
      EventBus.$emit('evt-bus', this.clickCount)
      console.log(this.clickCount)
    }
  }
}
</script>

<style scoped>
.bus-area{margin:20px auto 0;text-align:center;}
</style>
