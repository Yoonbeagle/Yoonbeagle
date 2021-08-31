<template>
    <div class="container modal-wrapper" ref="ModifyPopup">
        <div class="modal-container">
            <div class="modal-body">
                <div>테스트 팝업</div>
                <v-btn color="cancel" @click="$emit('close-popup')">닫기</v-btn>
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
        
    }

}
</script>

<style scoped lang="scss"></style>
