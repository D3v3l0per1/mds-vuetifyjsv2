<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 lg8 offset-lg2>
        <v-layout row wrap>

          <v-flex xs12>
            <h1 class="display-1 primary--text">Alle Neuigkeiten</h1>
            <v-divider class="mt-2"></v-divider>
          </v-flex>

          <v-flex xs12 sm6 v-for="post in news" :key="post.id" class="pa-2">
            <v-card outlined>
              <v-img :src="getImageUrl(post.image)" height="175px" gradient="to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px">
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
                  <v-card-title class="align-end fill-height">
                    <span class="headline font-weight-regular white--text text-truncate">{{ post.title }}</span>
                  </v-card-title>
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
                <v-card-text>
                  <div>
                    <p class="subtitle-1 text-truncate">{{ post.description }}</p>
                  </div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <span class="font-italic grey--text">{{ post.date | date }}</span>
                  <v-spacer></v-spacer>
                  <v-btn text :to="'/news/' + post.id" class="primary--text">Weiterlesen</v-btn>
                </v-card-actions>                               
              </v-card>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    news () {
      return this.$store.getters.loadedNews
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
