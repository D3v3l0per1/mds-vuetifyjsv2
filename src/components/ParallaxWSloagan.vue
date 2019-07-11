<template>
  <v-parallax src="@/assets/hero.jpg">
    <v-layout justify-center align-center text-xs-center text-sm-left>
      <v-flex xs12 sm10 md8 lg5 class="banner-text pa-4">
        <h1 class="font-weight-light">Das Leben ist kein Wunschkonzert, aber mit EVIS kannst du es trotzdem planen!</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus rem</p>
        <v-divider class="white mt-2 mb-3"></v-divider>
        <v-btn large class="primary" to="/contact">Kontaktieren Sie uns</v-btn>
      </v-flex>
    </v-layout>
  </v-parallax>
</template>

<style lang="scss" scoped>
  .banner-text {
    border: 2px solid white;
    border-radius: 5px;
    // background-color: rgba(#7B7B81,.7);
    background-color: rgba(0,0,0,.5);
  }
</style>
