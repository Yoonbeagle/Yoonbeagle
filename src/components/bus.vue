<template>
  <div class="bus-cont">
    <p>contents in Vue 2</p>
    <span>Count : {{ receivedCount }}</span>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js'

export default {
  data () {
    return {
      receivedCount: '--'
    }
  },
  created () {
    EventBus.$on('evt-bus', clickCount => {
      this.receivedCount = clickCount
    })
  }
}
</script>

<style scoped>
.bus-cont{width:360px;margin-top:30px;padding:20px 0 0 0;border-top:2px dashed brown;}
.bus-cont p{font-size:18px;font-weight:bold;}
</style>
