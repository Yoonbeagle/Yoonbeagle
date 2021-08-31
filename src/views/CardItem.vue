<template>
    <div class="card-item" v-if="mode=='all'||mode=='favorite'&&info.isFavorite">
        {{ info.title }}<br>{{ info.isFavorite }}
        <button class="btn-favor" :class="info.isFavorite?'selected':''" @click.stop="toggleFavorite()">

        <font-awesome-icon :icon="['fas','star']" />
        <template v-if="info.isFavorite">
            <span>{{ buttonTxtCancel }}</span>
        </template>
        <template v-else>
            <span>{{ buttonTxtAdd }}</span>
        </template>
        </button>
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
