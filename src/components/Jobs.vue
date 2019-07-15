<template>
  <v-container class="pt-0">
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm8>
        <v-layout row wrap align-center justify-center>
        
          <v-flex xs12 md6 xl4 class="pa-4" v-for="job in jobs" :key="job.id">
            <v-card>

              <v-card-text style="max-height: 230px;">
                <v-layout row wrap align-center justify-center>
                  <v-flex xs12 text-xs-center>
                    <v-icon style="font-size: 100px;">mdi-code-braces</v-icon>
                  </v-flex>
                  <v-flex xs12>
                    <h2 class="text-xs-center mb-2 text-truncate">{{ job.title }}</h2>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions text-xs-center>
                <v-spacer></v-spacer>
                <v-btn text class="primary--text" small>Job Beschreibung</v-btn>
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
  }
}
</script>
