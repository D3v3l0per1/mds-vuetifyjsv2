<template>
  <v-flex xs12>
    <v-parallax src="@/assets/hero.jpg" :height="customHeight">
      <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2 justify-center align-center fill-height class="banner mt-5 pa-4" style="max-height: 350px;">
          <h1 class="display-1 primary--text text-xs-center">{{ pContent.title }}</h1>
          <v-divider class="mt-1 mb-2 white"></v-divider>
          <!-- <div style="max-height: 270px; overflow-y: scroll;"> -->
            <simplebar class="lols pl-3 pr-3" style="height: 270px;">
              <p style="white-space: pre-line; text-align: justify;">
                {{ pContent.text }}
              </p>
            </simplebar>
          <!-- </div> -->
        </v-flex>
      </v-layout>
    </v-parallax>
  </v-flex>
</template>

<script>
export default {
  props: ['pContent', 'customHeight'],
}
</script>

<style scoped>
  .banner {
    max-width: 1200px;
    background-color: rgba(0,0,0,.6);
    border: 2px solid #ffffff;
    border-radius: 5px;
  }
</style>
