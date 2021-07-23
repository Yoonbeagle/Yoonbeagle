<template>
  <div>
    <div class="banner-wrap">
      <p class="banner-paging"><strong>{{ slideCount + 1 }}</strong><em>{{ bannerList.length }}</em></p>
      <v-carousel
        v-if="bannerList.length > 0"
        v-model="slideCount">
        <v-carousel-item
          v-for="(banner, index) in bannerList"
          :key="index"
          class="profile-wrap">
          <div
            v-for="(profile, idx) in banner.profile"
            :key="idx"
            class="profile-area">
            <a href="javascript:void(0)" class="profile-img">
              <v-img
                :src="profile.src"
                :fit="true"
                width="100%"
              />
            </a>
            <strong>{{ profile.name }}</strong>
            <span>{{ profile.desc }}</span>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      // bannerList: [1, 1, 1, 1, 1, 1],
      bannerList: [
        {
          profile: [
            {
              src: 'https://picsum.photos/id/1025/60/60',
              name: '윤비글',
              desc: '내 이름은 윤비글'
            },
            {
              src: 'https://picsum.photos/id/103/60/60',
              name: '홍길동',
              desc: '홍길동 자기소개 시작!'
            },
            {
              src: 'https://picsum.photos/id/1027/60/60',
              name: '김머머',
              desc: '내이름은 뭐다? 김머머'
            }
          ]
        },
        {
          profile: [
            {
              src: 'https://picsum.photos/id/103/60/60',
              name: '홍길동',
              desc: '홍길동 자기소개 시작!'
            },
            {
              src: 'https://picsum.photos/id/1025/60/60',
              name: '윤비글',
              desc: '내 이름은 윤비글'
            },
            {
              src: 'https://picsum.photos/id/1027/60/60',
              name: '김머머',
              desc: '내이름은 뭐다? 김머머'
            }
          ]
        },
        {
          profile: [
            {
              src: 'https://picsum.photos/id/1025/60/60',
              name: '윤비글',
              desc: '내 이름은 윤비글'
            },
            {
              src: 'https://picsum.photos/id/1027/60/60',
              name: '김머머',
              desc: '내이름은 뭐다? 김머머'
            }
          ]
        }
      ],
      slideCount: 0
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
