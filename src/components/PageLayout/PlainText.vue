<template>
  <v-container>
    <v-layout row wrap>
      
      <v-flex xs12 sm8 offset-sm2 style="padding: 10px;">
        <h1 class="display-1 primary--text">{{ content.title }}</h1>
        <v-divider class="mt-1 mb-2"></v-divider>
        <simplebar style="max-height: 270px;">
          <p style="white-space: pre-line;text-align: justify;" id="text">
            {{ content.text }}     
          </p>
        </simplebar>
      </v-flex>

    </v-layout>
  </v-container>    
</template>

<script>
export default {
  props: ['content'],
}
</script>
