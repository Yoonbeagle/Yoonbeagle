<template>
  <div class="select-wrap">
    <select class="custom-select" v-model="choosen" @change="changeOption">
      <option v-for="(region, i) in options" :key="i" :value="region.character">{{ region.text }}</option>
    </select>
    
    <br><br>

    <h2>좋아하는 과일을 골라보세요</h2>
    <select class="custom-select" v-model="fruits.value" @change="changeFruit">
      <option v-for="(fruit, index) in fruits.fruitsList" :key="index" :value="fruit.text">{{ fruit.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'selectValue',
  data () {
    return {
      options: [
        { character: 'S', text: 'Seoul' },
        { character: 'B', text: 'Busan' },
        { character: 'J', text: 'Jeju' },
        { character: 'D', text: 'Daegu' }
      ],
      choosen: 'J',
      fruits: {
        value: '사과',
        fruitsList: [
          { text: '사과' },
          { text: '오렌지' },
          { text: '멜론' },
          { text: '바나나' },
          { text: '포도' },
          { text: '수박' },
          { text: '복숭아' },
          { text: '체리' },
        ]
      }
    }
  },
  methods: {
    changeOption () {
      alert('Your choice is "'+this.choosen+'"');
    },
    changeFruit () {
      alert('당신이 선택한 과일은 '+this.fruits.value+'입니다.');
    }
  }
}
</script>
