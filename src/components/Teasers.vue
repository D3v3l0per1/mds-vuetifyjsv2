<template>
  <v-container>
    <v-layout row wrap>
      
      <v-flex xs12 sm6 md4 class="pa-2" v-for="teaser in teasers" :key="teaser.id">
        <v-card class="pt-4" style="height: 100%;">

          <v-img :src="getImageUrl(teaser.imageUrl)" height="100px" contain>
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

          <v-card-text style="min-height: 300px;">
            <div class="pr-3 pl-3">
              <h2 class="text-xs-center mb-2">{{ teaser.title }}</h2>
              <v-divider class="mb-3"></v-divider>
              <p style="text-align: left;">{{ teaser.text }}<a class="primary--text" style="text-decoration: none;" :href="teaser.link" v-if="teaser.readMore === true"> Weiterlesen</a></p>
            </div>
          </v-card-text>

        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import jsonData from '@/data/teasers.json'

export default {
  data () {
    return {
      teasers: jsonData.teasers
    }
  },
  mounted () {
    this.onResize()
  },
  methods: {
    onResize () {
      if (window.innerWidth === 600) {
        console.log("ohoh xs")
      }
    },
    getImageUrl(pic) {
      return require('../assets/teasers/'+pic)
    }
  }
}
</script>
