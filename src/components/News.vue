<template>
  <v-container>
    <v-layout row wrap>

      <v-flex xs12>
        <h1 class="display-1 primary--text text-xs-center mt-2">Neuigkeiten</h1>
        <v-divider class="mt-2 mb-2"></v-divider>
      </v-flex>

      <v-flex xs12 lg8 offset-lg2>
        <v-layout row wrap>

            <v-flex xs12 sm6 class="pa-3" v-for="post in loadedNews" :key="post.id">
              <v-card outlined>
                <v-img :src="getImageUrl(post.image)" height="175px">
                  <v-card-title class="align-end fill-height bottom-gradient">
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
            
            <v-flex xs12 text-xs-center>
              <v-divider class="mt-2 mb-2"></v-divider>
              <v-btn text to="/news">
                Alle Neuigkeiten
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'News',
  computed: {
    loadedNews () {
      return this.$store.getters.loadedNews
    }
  },
  methods: {
    getImageUrl(pic) {
      return require('@/assets/news/'+pic)
    }
  }
}
</script>

<style scoped>
  .bottom-gradient {
    background-image: linear-gradient(to top, rgba(0,0,0,.4) 0%, transparent 72px);
  }
</style>
