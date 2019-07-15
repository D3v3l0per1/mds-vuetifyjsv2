<template>
  <v-btn dark large fab @click="scrollTop" class="primary upScrollBtn">
    <v-icon>keyboard_arrow_up</v-icon>
  </v-btn>
</template>

<script>
export default {
  data () {
    return {
      //... 
    }
  },
  methods: {
    scrollTop () {
      this.$vuetify.goTo(0, { 
        duration: 300,
        offset: 0,
        easing: 'easeInCubic'
      })
    }
  }
}
</script>

<style scoped>
  .upScrollBtn {
    position: fixed;
    z-index: 9999;
    bottom: 20px;
    right: 20px;
  }
</style>
