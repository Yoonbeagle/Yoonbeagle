<template>
  <v-dialog
    v-model="popOpen"
    persistent
    max-width="300px">
    <div class="pop-wrap">
      <div class="pop-header">회원 정보 변경</div>
      <div class="pop-container">회원 정보를 변경하시겠습니까?</div>
      <div class="pop-footer">
        <!-- <v-btn
          text
          @click="onClickCancel">취소</v-btn>
        <v-btn
          text
          color="primary"
          @click="onConfirmClick">확인</v-btn> -->
        <v-btn
          text
          @click="openSubPop('cancel')">취소</v-btn>
        <v-btn
          text
          color="primary"
          @click="openSubPop('confirm')">확인</v-btn>
      </div>
    </div>

    <sub-layer-popup
      :sub-pop-open="subPopOpen"
      @subPopClose="subPopOpen = false" />
  </v-dialog>
</template>

<script>
import { EventBus } from '@/event-bus'
import SubLayerPopup from '@/views/popup/SubLayerPopup'

export default {
  components: { SubLayerPopup },
  props: {
    popOpen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      clickCancel: false,
      subPopOpen: false
    }
  },
  methods: {
    // onClickCancel () {
    //   this.clickCancel = this.subPopOpen = true
    //   EventBus.$emit('click-cancel', this.clickCancel)
    // },
    // onConfirmClick () {
    //   this.clickCancel = false
    //   EventBus.$emit('click-cancel', this.clickCancel)
    //   this.subPopOpen = true
    // },
    openSubPop (param) {
      // 어느 버튼을 클릭하더라도 서브 팝업을 띄움
      this.subPopOpen = true
      if (param === 'cancel') {
        // 취소 클릭할 경우 clickCancel을 true로 변경하여 서브팝업에 전달
        this.clickCancel = true
        EventBus.$emit('click-cancel', this.clickCancel)
      } else if (param === 'confirm') {
        // 확인 클릭할 경우 clickCancel을 false로 변경하여 서브팝업에 전달
        this.clickCancel = false
        EventBus.$emit('click-cancel', this.clickCancel)
      }
    }
  }
}
</script>
