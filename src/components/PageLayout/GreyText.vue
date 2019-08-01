<template>
  <v-flex xs12 class="banner">
    <h1 class="display-1 primary--text">{{ content.title }}</h1>
    <v-divider class="mt-1 mb-2"></v-divider>
    <simplebar style="max-height: 270px;">
      <p style="white-space: pre-line;text-align: justify;" id="text">
        {{ content.text }}     
      </p>
    </simplebar>
  </v-flex>    
</template>

<script>
export default {
  props: ['content']
}
</script>

<style scoped>
  .banner {
    padding: 10px;
    border: 2px solid white;
    border-radius: 5px;
    background-color: rgba(0,0,0,.1);
  }
</style>

