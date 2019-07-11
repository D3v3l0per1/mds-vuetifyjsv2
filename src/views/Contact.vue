<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm8 md6 offset-sm2 offset-md3 v-for="item in jsonData" :key="item.title">
        <h1 class="display-1 primary--text">{{ item.title }}</h1>
        <v-divider></v-divider>
        <p style="white-space: pre-line;">
          {{ item.text }}
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import jsonData from '../data/contact.json'

export default {
  data () {
    return {
      jsonData: jsonData
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
  },
  mounted () {
    this.scrollTop()
  }
}
</script>
