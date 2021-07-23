<template>
  <div class="section-wrap">
    <div
      :class="{fold: flag1}"
      class="sect-1">
      <p>contents of sect1</p>
      <v-btn
        v-if="flag1"
        @click="toggleClass('flag1')"
        class="btn-fold">unfold
      </v-btn>
      <v-btn
        v-else
        @click="toggleClass('flag1')"
        class="btn-fold">fold
      </v-btn>
    </div>
    <div
      :class="[single ? 'expand' : '', both ? 'wide' : '']"
      class="sect-2">
      <p>contents of sect2</p>
    </div>
    <div
      :class="{fold: flag2}"
      class="sect-3">
      <p>contents of sect3</p>
      <v-btn
        v-if="flag2"
        @click="toggleClass('flag2')"
        class="btn-fold">unfold
      </v-btn>
      <v-btn
        v-else
        @click="toggleClass('flag2')"
        class="btn-fold">fold
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoldingArea',
  data () {
    return {
      flag1: false,
      flag2: false,
      single: false,
      both: false
    }
  },
  methods: {
    toggleClass (parm) {
      // console.log(parm)
      if (parm === 'flag1') {
        this.flag1 = !this.flag1
      } else if (parm === 'flag2') {
        this.flag2 = !this.flag2
      }
      if (this.flag1 && this.flag2) {
        this.both = true
        this.single = false
        console.log(this.flag1, this.flag2)
      } else if (!this.flag1 && !this.flag2) {
        this.single = this.both = false
        console.log(this.flag1, this.flag2)
      } else if ((this.flag1 && !this.flag2) || (!this.flag1 || this.flag2)) {
        this.single = true
        this.both = false
        console.log(this.flag1, this.flag2)
      }
    }
  }
}
</script>

<style scoped>
</style>
