<template>
  <div class="container">
    <v-btn
      color="primary"
      @click="popOpen = true">회원정보 변경</v-btn>

    <layer-popup
      :pop-open="popOpen"
      @closeAll="subPopOpen = false" />

    <div class="second-area">
      <p>* 팝업 open(), close() 테스트</p>

      <v-btn
        color="primary"
        @click="onClickPopup">테스트 팝업 열기</v-btn>

      <modify-popup v-if="isShow" @close-popup="close" ref="ModifyPopup" />
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus'
import LayerPopup from '@/views/popup/LayerPopup'
import ModifyPopup from '@/views/popup/ModifyPopup'

export default {
  name: 'Modal',
  components: { LayerPopup, ModifyPopup },
  data () {
    return {
      popOpen: false,
      isShow: false
    }
  },
  methods: {
    onClickPopup() {
      //this.$refs['ModifyPopup'].open();
      this.isShow = true;
    },
    close() {
      this.isShow = false;
    }
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

<style scoped lang="scss">
  .second{
    &-area{margin-top:25px;
      button{margin-bottom:10px;}
    }
  }
</style>
