<template>
    <div class="select-wrap">
        <h2>도시 선택</h2>
        <select class="custom-select" v-model="choosen" @change="changeOption">
            <option v-for="(region, i) in options" :key="i" :value="region.character">{{ region.text }}</option>
        </select>
        
        <br><br>

        <h2>좋아하는 과일을 골라보세요</h2>
        <select class="custom-select" v-model="fruits.value" @change="changeFruit">
            <option v-for="(fruit, index) in fruits.fruitsList" :key="index" :value="fruit.text">{{ fruit.text }}</option>
        </select>

        <br><br>

        <h2>Rows per Page</h2>
        <select class="custom-select" v-model="RowsPerPage" @change="changeRows">
            <option v-for="(row, idx) in rows" :key="idx" :value="row.text">{{ row.text }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'selectValue',
    data () {
        return {
            options: [
                { character: '서울', text: 'Seoul' },
                { character: '부산', text: 'Busan' },
                { character: '제주', text: 'Jeju' },
                { character: '대구', text: 'Daegu' }
            ],
            choosen: '제주',
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
            },
            RowsPerPage: '3개씩 보기',
            rows: [
                {text: '3개씩 보기'},
                {text: '5개씩 보기'},
                {text: '10개씩 보기'},
                {text: '20개씩 보기'}
            ]
        }
    },
    methods: {
        changeOption() {
            alert('Your choice is "'+this.choosen+'"');
        },
        changeFruit() {
            alert('당신은 '+this.fruits.value+'을(를) 좋아하는군요!');
        },
        changeRows() {
            alert(this.RowsPerPage + '를 선택하셨습니다.');
        }
    }
}
</script>
