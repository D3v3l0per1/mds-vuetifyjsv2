<template>
  <v-container class="pt-0">
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm8>
        <v-layout row wrap align-center justify-center>
        
          <v-flex xs12 md6 xl4 class="pa-4" v-for="job in jobs" :key="job.id">
            <v-card outlined>

              <v-img :src="getImageUrl(job.image)" contain>
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-layout>
                </template>
              </v-img>

              <v-card-title>
                <v-spacer></v-spacer>
                <h1 class="headline grey--text text--darken-2 font-weight-bold">{{ job.title }}</h1>
                <v-spacer></v-spacer>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-actions text-xs-center>
                <v-spacer></v-spacer>
                 <v-btn text class="primary--text" small @click="openLinkInNewTab(job.file)">Job Beschreibung</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>

            </v-card>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import jsonData from '@/data/jobs.json'

export default {
  data () {
    return {
      jobs: jsonData.jobs
    }
  },
  methods: {
    getImageUrl(pic) {
      return require('@/assets/' + pic)
    },
    openLinkInNewTab (url) {
      var win = window.open(url, '_blank')
      win.focus()
    }
  }
}
</script>
