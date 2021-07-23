<template>
  <div class="list-area">
    <p class="tit">v-for를 이용하여 메뉴 만들고 스타일 입히기</p>
    <ul class="list-type1">
      <li
        v-for="(menu, idx) in menuList"
        :key="idx">
        <a
          :href="menu.href"
          :style="menu.style"
          :class="menu.idxClass"
          target="_blank">
          <span
            v-html="menu.txt"
            class="txt"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ListArray',
  components: {

  },
  data () {
    return {
      menuList: [
        {
          href: 'http://www.naver.com',
          style: {
            background: '#ccc',
            color: '#222'
          },
          idxClass: 'menu1',
          txt: '네이버 바로가기<br>새창열기'
        },
        {
          href: 'http://www.nate.com',
          style: {
            background: '#333',
            color: '#ddd'
          },
          idxClass: 'menu2',
          txt: '네이트 바로가기<br>새창열기'
        },
        {
          href: 'http://www.daum.net',
          style: {
            background: '#666',
            color: '#fff'
          },
          idxClass: 'menu3',
          txt: '다음 바로가기<br>새창열기'
        }
      ]
    }
  }
}
</script>
