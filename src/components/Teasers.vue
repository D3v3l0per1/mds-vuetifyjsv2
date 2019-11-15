<template>
  <v-container>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm8>
        <v-layout row wrap>
          
          <v-flex xs12 text-xs-center>
            <h1 class="display-1 primary--text">Dienstleistungen</h1>
            <v-divider class="mt-2"></v-divider>
          </v-flex>

          <v-flex xs12 md6 xl4 class="pa-4" v-for="teaser in teasers" :key="teaser.id" v-if="teaser.markedAsTeaser === true">
            <Teaser :teaser="teaser" />
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import jsonData from "@/data/service.json";
import Teaser from './Teaser'

export default {
  data() {
    return {
      teasers: jsonData.services
    };
  },
  components: {
    Teaser
  }
};
</script>
