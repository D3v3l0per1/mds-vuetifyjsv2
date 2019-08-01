<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <h1 class="display-1 primary--text">{{ content.title }}</h1>
        <v-divider></v-divider>
        <p style="white-space: pre-line; text-align: justify;">
          {{ content.text }}
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['content']
}
</script>
