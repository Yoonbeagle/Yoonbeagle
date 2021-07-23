<template>
  <div class="accordion-wrap">
    <v-expansion-panels
      accordion
      multiple>
      <v-expansion-panel
        v-for="(sbjt,i) in sbjtList"
        :key="i"
      >
        <v-expansion-panel-header>{{ sbjt.tit }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="card-wrap">
            <div
              v-for="(card, idx) in sbjt.card"
              :key="idx"
              class="card-box">
              <v-img
                :src="card.src"
                width="200px"
                height="200px"
                class="card-img" />
              <div class="card-bottom">
                <p class="card-desc">{{ card.desc }}</p>
                <p class="card-info">
                  <span>{{ card. type }} &middot; {{ card. playTime }}</span>
                  <span class="view">
                    {{ card.view}}</span>
                </p>
              </div>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: 'ForInFor',
  data () {
    return {
      sbjtList: [
        {
          tit: '1. 수학의 정석',
          txt: '수학의 정석에 대하여 알아보자',
          card: [
            {
              src: 'https://picsum.photos/id/119/200/200',
              desc: '수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란?',
              type: '오디오',
              playTime: '12:34',
              view: '123'
            },
            {
              src: 'https://picsum.photos/id/180/200/200',
              desc: '수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란?',
              type: '비디오',
              playTime: '10:06',
              view: '12'
            },
            {
              src: 'https://picsum.photos/id/119/200/200',
              desc: '수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란?',
              type: '오디오',
              playTime: '12:34',
              view: '123'
            }
          ]
        },
        {
          tit: '2. 수학의 정석2',
          txt: '수학의 정석2에 대하여 알아보자',
          card: [
            {
              src: 'https://picsum.photos/id/180/200/200',
              desc: '수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란?',
              type: '오디오',
              playTime: '12:34',
              view: '123'
            },
            {
              src: 'https://picsum.photos/id/119/200/200',
              desc: '수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란?',
              type: '비디오',
              playTime: '10:06',
              view: '12'
            }
          ]
        },
        {
          tit: '3. 수학의 정석3',
          txt: '수학의 정석3에 대하여 알아보자',
          card: [
            {
              src: 'https://picsum.photos/id/180/200/200',
              desc: '수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란?',
              type: '오디오',
              playTime: '12:34',
              view: '123'
            }
          ]
        },
        {
          tit: '4. 수학의 정석4',
          txt: '수학의 정석4에 대하여 알아보자',
          card: [
            {
              src: 'https://picsum.photos/id/119/200/200',
              desc: '수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란?',
              type: '오디오',
              playTime: '12:34',
              view: '123'
            },
            {
              src: 'https://picsum.photos/id/180/200/200',
              desc: '수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란? 수학이란?',
              type: '비디오',
              playTime: '10:06',
              view: '12'
            }
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
