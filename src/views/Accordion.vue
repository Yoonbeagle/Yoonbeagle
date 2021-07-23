<template>
  <div class="accordion-area">
    <div class="btn-area">
      <!-- <v-btn @click="all">
        모두펼치기
      </v-btn>
      <v-btn @click="none">
        모두접기
      </v-btn> -->
      <v-btn @click="controlAll">
        <span v-if="openAll">모두 접기</span>
        <span v-else>모두 펼치기</span>
      </v-btn>
    </div>
    <v-expansion-panels
      v-model="panel"
      multiple
    >
      <v-expansion-panel
        v-for="(item,i) in items"
        :key="i"
      >
        <v-expansion-panel-header>Header {{ item }}
          <template v-slot:actions>
            <v-icon color="primary">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data () {
    return {
      panel: [],
      items: 5,
      openAll: false
    }
  },
  methods: {
    controlAll () {
      this.openAll = !this.openAll
      if (this.openAll) {
        this.panel = [...Array(this.items).keys()].map((k, i) => i) // all true
      } else {
        this.panel = [...Array(this.items).keys()].map(() => false) // all false
      }
      // 어떤 배열이 있을 때, 배열을 탐색(순회)하면서 요소들을 각각 가공해서 새로운 배열(원래 배열과 길이가 동일한)을 반환받고자 할 때 map을 사용
    }
  }
}
</script>
