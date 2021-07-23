<template>
  <div>
    <v-btn
      @click="message('clicked')"
      class="primary"
    >Click Me!!
    </v-btn>
    <br><br>
    <v-btn
      @dblclick="message('Double Clicked')"
      class="primary"
    >Double Click Me!
    </v-btn>

    <br><br>
    <font-awesome-icon :icon="['far','heart']" size="lg" :style="{ color: 'red' }" />
    <br><br>
    <font-awesome-icon :icon="['fas','heart']"/>
    <font-awesome-icon :icon="['far','heart']" size="3x" :style="{color: 'indigo'}"/>
  </div>
</template>

<script>
export default {
  name: 'DoubleClick',
  data () {
    return {
    }
  },
  methods: {
    message (msg) {
      alert(msg)
    }
  }
}
</script>

<style scoped>
</style>
