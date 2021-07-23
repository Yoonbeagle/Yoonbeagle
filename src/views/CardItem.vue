<template>
    <div class="card-item" v-if="mode=='all'||mode=='favorite'&&info.isFavorite">
        {{ info.title }} {{ info.isFavorite }}
        <button class="btn-favor" @click.stop="toggleFavorite()">{{ info.buttonTxt }}</button>
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
  methods: {
    toggleFavorite () {
      this.info.isFavorite = !this.info.isFavorite
      this.$emit('check')
    }
  }
}
</script>
