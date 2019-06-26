<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <v-layout justify-center align-center text-xs-center>
      <v-flex xs3 class="banner-text pa-4">
        Hier könnte Ihre Werbung stehen <br>
        <v-divider class="white mt-2 mb-3"></v-divider>
        <v-btn class="primary">Wow</v-btn>
      </v-flex>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: 'Parallax'
}
</script>

<style lang="scss" scoped>
  .banner-text {
    border: 2px solid white;
    border-radius: 5px;
    background-color: rgba(0,0,0,.6);
  }
</style>
