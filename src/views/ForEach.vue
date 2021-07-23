<template>
  <div>
    <div class="status-list">
      <div
        v-for="(status, i) in StatusList"
        :key="i"
        :class="'bg' + (i + 1)"
        class="status-bg">
        <div
          :value="status.style"
          class="status-bar" />
          <!-- :style="'width:' + status.style + '%'" -->
        <button
          :class="{'on': status.isActive}"
          class="btn-ico"
          @click="addClass(i)">버튼{{ i + 1 }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForEach',
  data () {
    return {
      StatusList: [
        { style: '3', isActive: false },
        { style: '24', isActive: false },
        { style: '65', isActive: false },
        { style: '100', isActive: false }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      document.querySelectorAll('.status-bar').forEach((e) => { // forEach는 선택된 요소들을 배열로 만듦. el과 index는 배열에서 알아서 가져옴
        console.log(document.querySelectorAll('.status-bar').length)
        e.style.width = e.getAttribute('value') + '%'
      })
    }, 1500)
  },
  methods: {
    addClass (i) {
      // toggleClass
      if (this.StatusList[i].isActive) {
        this.StatusList[i].isActive = false
        return false
      }
      // removeClass, addClass
      this.StatusList.forEach(status => {
        status.isActive = false // 모든 요소의 isActive를 false로 바꿈(모든 요소에서 클래스 on을 모두 삭제)
      })
      this.StatusList[i].isActive = true // 해당 요소의 isActive만 true로 바꿈(해당 요소만 클래스 on 추가)
    }
  }
}
</script>
