<template>
  <v-dialog
    v-model="subPopOpen"
    persistent
    max-width="350px">
    <div class="pop-wrap">
      <template v-if="clickCancel"><!-- 취소 클릭했을 경우 노출 -->
        <div class="pop-container">취소하시겠습니까?</div>
        <div class="pop-footer">
          <v-btn
            text
            @click="onClose">취소</v-btn>
          <v-btn
            text
            color="primary"
            @click="onCloseAll">확인</v-btn>
        </div>
      </template>
      <template v-else><!-- 확인 클릭했을 경우 노출 -->
        <div class="pop-container">변경되었습니다.</div>
        <div class="pop-footer">
          <v-btn
            text
            color="primary"
            @click="onCloseAll">확인</v-btn>
        </div>
      </template>
    </div>
  </v-dialog>
</template>

<script>
import { EventBus } from '@/event-bus'
export default {
  props: {
    subPopOpen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      clickCancel: false,
      closeAll: false
    }
  },
  methods: {
    onClose () {
      this.$emit('subPopClose')
    },
    onCloseAll () {
      this.onClose()
      EventBus.$emit('close-all', this.closeAll)
    }
  },
  created () {
    // 팝업에서 받아온 clickCancel 값을 서브팝업의 clickCancel에 대입
    EventBus.$on('click-cancel', clickCancel => {
      this.clickCancel = clickCancel
    })
  }
}
</script>
