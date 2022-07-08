<template>
  <div class="example-area">
    <h1>Vue Study - Example List</h1>
    <div class="example-contents">
      <!-- <router-view/> -->
      <ul class="example-list">
        <template>
          <li class="none">
            <em>-</em>children routes 사용법
            <span>: index.js에 1depth 등록하고, children: [{}] 으로 2depth 컴포넌트 등록</span>
            <span>: 이 때, path에는 / 없이 2depth만 입력(1depth에 등록한 path를 상속받음)</span>
            <span>: parent 컴포넌트에서 router-view로 삽입</span>
          </li>
        </template>
        <template>
          <li
            v-for="(item, index) in exList"
            :key="index">
            <em>-</em>
            <!-- <a
              :href="'vue-study'+item.url"
              :class="'menu_' + index"
              target="_blank">{{ item.tit }}</a> -->
              <router-link :to="subUrl+item.url" :class="'menu_' + index">{{ item.tit }}</router-link>
              <span
                class="menu_desc">: {{ item.desc }} (url : {{ item.url }})</span>
          </li>
        </template>
      </ul>
    </div>
    <v-btn
      color="cyan"
      fab
      id="btn-goTop"
      @click="scrollTop">Top</v-btn>
  </div>
</template>

<script>
export default {
  name: 'ExampleList',
  data () {
    return {
      subUrl: 'ex',
      exList: [
        {
          url: '/clickToggle',
          tit: 'ClickToggle',
          desc: '버튼 클릭 시 클래스 추가'
        },
        {
          url: '/listArray',
          tit: 'ListArray',
          desc: 'v-for를 이용하여 ul 만들고 클래스와 스타일 추가하기'
        },
        {
          url: '/accordion',
          tit: 'Accordion',
          desc: 'vuetify 제공 아코디언 UI'
        },
        {
          url: '/forEach',
          tit: 'ForEach',
          desc: 'v-for로 만들어진 리스트에서 클릭한 버튼에만 토글 클래스 추가하고 마운트된 후에 스타일 트랜지션 적용하기'
        },
        {
          url: '/carousel',
          tit: 'Carousel',
          desc: 'vuetify 제공 carouse UI. 한 번에 3개씩 슬라이드, v-model 사용하여 페이징 처리'
        },
        {
          url: '/tempIntemp',
          tit: 'tempIntemp',
          desc: 'v-for로 리스트 만들고 조건문에 따라 예외 요소 추가하기'
        },
        {
          url: '/doubleClick',
          tit: 'DoubleClick',
          desc: '클릭 이벤트, 더블클릭 이벤트'
        },
        {
          url: '/forInfor',
          tit: 'forInfor',
          desc: 'v-for로 만든 리스트 안에서 v-for 사용하기'
        },
        {
          url: '/foldingArea',
          tit: 'FoldingArea',
          desc: '영역 접기/펼치기 버튼 클릭 시 근접 영역에 클랙스 추가하여 접힘/펼침 구현하기'
        },
        {
          url: '/vModel',
          tit: 'vModel',
          desc: '인풋의 value값은 v-model로 받아옴'
        },
        {
          url: '/select',
          tit: 'select',
          desc: 'v-for를 이용하여 셀렉트박스를 만들고 v-model을 이용하여 디폴트 옵션값을 정함'
        },
        {
          url: '/modal',
          tit: 'Modal',
          desc: 'v-dialog와 v-model 이용하여 레이어 팝업 띄우기'
        },
        {
          url: '/ref',
          tit: 'Ref',
          desc: 'ref 속성 이용하여 다른 컴포넌트 제어하기'
        },
        {
          url: '/eventbus',
          tit: 'Event Bus',
          desc: 'EventBus를 이용하여 컴포넌트 간 통신'
        },
        {
          url: '/boardList',
          tit: 'Board',
          desc: '데이터를 담고 있는 js파일에서 데이터를 가져오고, 데이터를 추가하여 저장하면 리스트에도 추가됨'
        },
        {
          url: '/props-emit',
          tit: 'Props',
          desc: '별도의 컴포넌트로 빼낸 자식 컴포넌트를 부모 컴포넌트에서 조건별로 반복시키기. 이벤트 전달하기'
        }
      ]
    }
  },
  methods: {
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      document.getElementById('btn-goTop').blur()
    }
  }
}
</script>

<style scoped>

</style>
