<template>
    <div class="container" ref="ModifyPopup">
        <div>테스트 팝업</div>
        <v-btn color="cancel" @click="close">닫기</v-btn>
    </div>
</template>

<script>
export default {
    name: 'ModifyPopup',
    data() {
        return {

        }
    },
    methods: {
        close() {
            this.$refs['ModifyPopup'].close();
        }
    }

}
</script>

<style scoped lang="scss">
$modal-spacer:(0, 10px, 15px, 20px, 25px);
$modal-border-color:#ccc;
.container{width:300px;padding:nth($modal-spacer,3);border:1px solid $modal-border-color;}
</style>
