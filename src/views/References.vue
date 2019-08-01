<template>
  <v-container>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm6 xl8>
        <v-layout row wrap>

          <v-flex xs12>
            <h1 class="display-1 primary--text">Referenzen</h1>
            <v-divider></v-divider>
          </v-flex>

          <v-flex xs12 xl6 class="pa-2" v-for="reference in references" :key="reference.title">
            <v-card outlined>
              <v-img :src="getImageUrl(reference.logo)" contain class="mx-3 my-2" style="height: 199px;">
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
              <v-card-title text-xs-center>
                <h1 class="headline primary--text">{{ reference.title }}</h1>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <div class="grey lighten-2" style="padding: 20px; font-size: 1.1rem; line-height: 1.5; border-radius: 5px;">
                  <simplebar style="max-height: 150px;">
                    <p>{{ reference.description }}</p>
                  </simplebar>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import jsonData from '../data/references.json'

export default {
  data () {
    return {
      references: jsonData.references
    }
  },
  methods: {
    getImageUrl(pic) {
      return require('@/assets/logos/'+pic)
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
