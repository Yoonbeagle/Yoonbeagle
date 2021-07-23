<template>
  <div class="board-wrap">
    <h2>Board</h2>
    <table>
      <colgroup>
        <col width="auto">
        <col width="18%">
        <col width="auto">
        <col width="25%">
      </colgroup>
      <thead>
        <tr>
          <td>제목</td>
          <td>작성자</td>
          <td>내용</td>
          <td>작성일</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in boardDatas" :key="index">
          <td>{{data.title}}</td>
          <td>{{data.writer}}</td>
          <td>{{data.contents}}</td>
          <td>{{data.date}}</td>
        </tr>
      </tbody>
    </table>
    <button @click="write" class="btn-border">글쓰기</button>
  </div>
</template>

<script>
import boardData from '@/assets/js/boardData.js'

export default {
  name: 'Board',
  data () {
    return {
      boardDatas: boardData
    }
  },
  methods: {
    write () {
      this.$router.push({
        path: 'boardWrite'
      })
    }
  }
}
</script>

<style scoped>
</style>
