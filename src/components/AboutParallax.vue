<template>
  <v-flex xs12>
    <v-parallax src="@/assets/hero.jpg" :height="customHeight">
      <v-layout align-center>
        <v-flex xs12 sm6 offset-sm3 class="banner" style="max-height: 400px;">
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
    background-color: rgba(0,0,0,.6);
    border: 2px solid #ffffff;
    border-radius: 5px;
    padding: 20px;
  }
</style>
