<template>
  <v-container>
    <v-layout row wrap>

      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <go-back class="mb-3"></go-back>
      </v-flex>

      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card>
          <v-card-title>
            <h1 class="display-1 primary--text">{{ post.title }}</h1>
          </v-card-title>
          <v-divider></v-divider>
          <v-img :src="getImageUrl(post.image)">
            <template v-slot:placeholder>
              <v-layout
                fill-height
                align-center
                justify-center
                ma-0
              >
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
          <v-divider></v-divider>
          <v-card-text>
            <span class="font-italic grey--text">{{ post.date | date }}</span>
            <v-divider class="mb-2"></v-divider>
            <p>{{ post.description }}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    post () {
      return this.$store.getters.loadedNewsPost(this.id)
    }
  },
  methods: {
    getImageUrl(pic) {
      return require('@/assets/news/'+pic)
    }
  },
  mounted () {
    this.$vuetify.goTo(0, { 
      duration: 300,
      offset: 0,
      easing: 'easeInCubic'
    })
  }
}
</script>
