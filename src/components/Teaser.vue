<template>
  <v-card class="pt-4" style="height: 100%;">
    <v-img
      v-if="teaser.imageUrl"
      :src="getImageUrl(teaser.imageUrl)"
      height="80px"
      contain
    >
      <template v-slot:placeholder>
        <v-layout fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-layout>
      </template>
    </v-img>

    <v-card-text style="max-height: 230px;">
      <!-- <simplebar style="max-height: 200px;"> -->
      <div>
        <h2 class="text-xs-center mb-2 text-truncate">{{ teaser.title }}</h2>
        <v-divider class="mb-3"></v-divider>
        <div style="max-height: 150px; overflow-y: hidden;" class="pl-3 pr-3">
          <p style="text-align: justify;">{{ teaser.text }}</p>
        </div>
        <v-divider class="mt-3"></v-divider>
      </div>
      <!-- </simplebar> -->
    </v-card-text>

    <v-card-actions text-xs-center>
      <v-spacer></v-spacer>
      <v-btn text class="primary--text" small :to="teaser.link">Weiterlesen</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['teaser'],
  methods: {
    getImageUrl(pic) {
      return require("../assets/teasers/" + pic);
    }
  }
}
</script>