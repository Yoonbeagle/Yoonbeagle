<template>
    <div class="container modal-wrapper" ref="ModifyPopup">
        <div class="modal-container">
            <div class="modal-body">
                <div>테스트 팝업</div>
                <v-btn color="cancel" @click="close">닫기</v-btn>
            </div>
        </div>
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
        open() {
            this.$refs['ModifyPopup'].open();
        },
        close() {
            this.$refs['ModifyPopup'].close();
        }
    }

}
</script>

<style scoped lang="scss"></style>
