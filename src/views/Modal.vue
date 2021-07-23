<template>
  <div class="container">
    <v-btn
      color="primary"
      @click="popOpen = true">회원정보 변경</v-btn>

    <layer-popup
      :pop-open="popOpen"
      @closeAll="subPopOpen = false" />
  </div>
</template>

<script>
import { EventBus } from '@/event-bus'
import LayerPopup from '@/views/popup/LayerPopup'

export default {
  name: 'Modal',
  components: { LayerPopup },
  data () {
    return {
      popOpen: false
    }
  },
  methods: {
  },
  created () {
    EventBus.$on('close-all', closeAll => {
      setTimeout(() => {
        this.popOpen = closeAll
      }, 300)
    })
  }
}
</script>

<style scoped>

</style>
