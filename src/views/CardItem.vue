<template>
    <div class="card-item" v-if="mode=='all'||mode=='favorite'&&info.isFavorite">
        {{ info.title }}<br>{{ info.isFavorite }}
        <template v-if="info.isFavorite">
        <button class="btn-favor" :class="info.isFavorite?'selected':''" @click.stop="toggleFavorite()">{{ buttonTxtCancel }}</button>
        </template>
        <template v-else>
        <button class="btn-favor" :class="info.isFavorite?'selected':''" @click.stop="toggleFavorite()">{{ buttonTxtAdd }}</button>
        </template>
    </div>
</template>

<script>
export default {
  name: 'cardItem',
  props: {
    info: {
      type: Object,
      default: () => {}
    },
    mode: String
  },
  data() { return {
    buttonTxtCancel: '즐겨찾기 취소',
    buttonTxtAdd: '즐겨찾기 추가',
  }},
  methods: {
    toggleFavorite () {
      this.info.isFavorite = !this.info.isFavorite
      this.$emit('check')
    }
  }
}
</script>
