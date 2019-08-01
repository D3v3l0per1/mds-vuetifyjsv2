<template>
  <v-container class="pt-0">
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm8>
        <v-layout row wrap align-center justify-center>
        
          <v-flex xs12 md6 xl4 class="pa-4" v-for="job in jobs" :key="job.id">
            <v-card outlined>

              <v-img :src="getImageUrl(job.image)" contain></v-img>

              <v-card-title>
                <v-spacer></v-spacer>
                <h1 class="headline grey--text text--darken-2 font-weight-bold">{{ job.title }}</h1>
                <v-spacer></v-spacer>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-actions text-xs-center>
                <v-spacer></v-spacer>
                 <v-btn text class="primary--text" small @click="openLinkInNewTab(job.file)">Job Beschreibung</v-btn>
                <!-- <v-dialog v-model="lol" width="500">
                  <template v-slot:activator="{ on }">
                    <v-btn text class="primary--text" small v-on="on">Job Beschreibung</v-btn>
                  </template>

                  <v-card>
                    <v-card-title>lol</v-card-title>
                    <v-card-text>
                      <pdf src="./public/pdf/web.pdf"></pdf>
                    </v-card-text>
                  </v-card>
                </v-dialog> -->
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
// import pdf from 'pdfvuer'

export default {
  data () {
    return {
      jobs: jsonData.jobs
    }
  },
  components: {
    // pdf
  },
  methods: {
    getImageUrl(pic) {
      return require('@/assets/'+pic)
    },
    openLinkInNewTab (url) {
      var win = window.open(url, '_blank')
      win.focus()
    }
  }
}
</script>
