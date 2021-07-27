<template>
  <div class="board-wrap">
    <h2>Write</h2>
    <table>
      <colgroup>
        <col width="20%">
        <col width="35%">
        <col width="45%">
      </colgroup>
      <tr>
        <td>
          <input type="text" v-model="writer" placeholder="이름을 입력하세요.">
        </td>
        <td>
          <input type="text" v-model="date" placeholder="날짜를 입력하세요. YYYY-MM-DD">
        </td>
        <td>
          <input type="text" v-model="title" placeholder="제목을 입력하세요.">
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <textarea type="text" v-model="contents" placeholder="내용을 입력하세요."></textarea>
        </td>
      </tr>
    </table>
    <button @click="save" class="btn-border">저장</button>
  </div>
</template>

<script>
import boardData from '@/assets/js/boardData.js'

export default {
  name: 'BoardWrite',
  data () {
    return {
      boardDatas: boardData,
      writer: '',
      title: '',
      contents: '',
      date: ''

    }
  },
  methods: {
    save () {
      this.boardDatas.push({
        writer: this.writer,
        title: this.title,
        contents: this.contents,
        date: this.date
      });
      console.log('aaa');
      this.$router.push({
        path: '/boardList'
      });
    }
  }
}
</script>

<style scoped>

</style>
