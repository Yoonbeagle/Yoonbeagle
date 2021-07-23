<template>
    <div class="props-emit-wapper">
        <h2>* 전체 카드 보기</h2>
        <div class="card-wrapper">
            <card-item v-for="(card, index) in cardList" :key="index" :info="card" :mode="'all'" @check="checkFavorite()" />
        </div>

        <h2>* 즐겨찾기한 카드 보기</h2>
        <div class="card-wrapper">
            <template v-if="isEmptyFavorite">
                <p class="no-data">즐겨찾기한 카드가 없습니다.</p>
            </template>
            <template v-else>
                <card-item v-for="(card, index) in cardList" :key="index" :info="card" :mode="'favorite'" @check="checkFavorite()" />
            </template>
        </div>
    </div>
</template>

<script>
import cardItem from './CardItem'

export default {
  name: 'Props',
  components: { cardItem },
  data () {
    return {
      cardList: [
        { title: '카드아이템 타이틀1', isFavorite: true, buttonTxt: '즐겨찾기' },
        { title: '카드아이템 타이틀2', isFavorite: false, buttonTxt: '즐겨찾기' },
        { title: '카드아이템 타이틀3', isFavorite: true, buttonTxt: '즐겨찾기' },
        { title: '카드아이템 타이틀4', isFavorite: false, buttonTxt: '즐겨찾기' },
        { title: '카드아이템 타이틀5', isFavorite: true, buttonTxt: '즐겨찾기' },
        { title: '카드아이템 타이틀6', isFavorite: true, buttonTxt: '즐겨찾기' }
      ],
      isEmptyFavorite: false
    }
  },
  methods: {
    checkFavorite () {
      let count = 0
      for (let i = 0; i < this.cardList.length; i++) {
        if (!this.cardList[i].isFavorite) {
          count++
        }
      }

      // console.log(count + ',' + this.cardList.length)

      if (count === this.cardList.length) {
        this.isEmptyFavorite = true
      } else {
        this.isEmptyFavorite = false
      }
    }
  }
}
</script>
