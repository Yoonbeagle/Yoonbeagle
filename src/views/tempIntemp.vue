<template>
  <div class="tempIntemp-area">
    <p class="tit">v-for를 이용하여 만든 리스트에서 마지막 리스트 아이템에만 클래스 추가하기</p>
    <ul
      class="member-list"
      :class="{'expand' : isActive}">
      <template
        v-for="(mmbrPhoto, i) in mmbrList">
        <li
          :key="i"
          :class="[{'hidden' : mmbrPhoto.isHidden}, 'photo'+(i + 1)]"
        >
          <v-img
            :src="mmbrPhoto.Img"
            default-src="https://picsum.photos/id/103/60/60"
            width="60px"
            height="60px"
            center-crop />
        </li>
      </template>
      <template v-if="mmbrCount > 4">
        <li
          @click="expandList()"
          class="last"
          :class="{'hidden':isActive}">
          <v-img
            src="https://picsum.photos/id/156/60/60" />
          <span>+{{ mmbrUserCount - mmbrCount }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tempIntemp',
  data () {
    return {
      mmbrCount: 5,
      mmbrUserCount: 20,
      mmbrList: [
        { Img: 'https://picsum.photos/id/1027/60/60', isHidden: false },
        { Img: 'https://picsum.photos/id/1023/60/60', isHidden: false },
        { Img: 'https://picsum.photos/id/1062/60/60', isHidden: false },
        { Img: 'https://picsum.photos/id/1027/60/60', isHidden: false },
        { Img: 'https://picsum.photos/id/1023/60/60', isHidden: false },
        { Img: 'https://picsum.photos/id/1062/60/60', isHidden: false },
        { Img: 'https://picsum.photos/id/1027/60/60', isHidden: false }
      ],
      isActive: false
    }
  },
  mounted () {
    this.ellipsisItem()
  },
  methods: {
    expandList () {
      this.isActive = !this.isActive
      this.mmbrList.forEach(mmbrPhoto => {
        if (this.isActive) {
          mmbrPhoto.isHidden = false
        } else {
          this.ellipsisItem()
        }
      })
    },
    ellipsisItem () {
      if (this.mmbrCount > 4) {
        this.mmbrList.forEach((mmbrPhoto, i) => {
          if (i > 4) {
            this.mmbrList[i].isHidden = true
          }
        })
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped>
</style>
