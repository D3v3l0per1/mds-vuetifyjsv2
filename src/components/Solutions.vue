<template>
  <v-flex xs12>
    <v-card outlined>
      <v-card-title>
        <h1 class="display-1 primary--text text-truncate">{{ content.title }}</h1>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-layout row wrap>

          <v-flex xs12 xl6 class="pa-2" v-for="item in content.items" :id="item.link" :key="item.title">
            <v-card outlined>
              <v-img :src="getImageUrl(item.image)" class="mt-3 mb-3" contain style="max-height: 150px;">
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-layout>
                </template>
              </v-img>
              <v-divider class="mb-2"></v-divider>
              <v-card-text class="pt-2">
                <simplebar style="max-height: 150px;" data-simplebar-auto-hide="false">
                  <p style="white-space: pre-line; text-align: justify;" class="pr-3">{{ item.text }}</p>
                </simplebar>
              </v-card-text>
            </v-card>
          </v-flex>

        </v-layout>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['content'],
  methods: {
    getImageUrl(pic) {
      return require('../assets/logos/'+pic)
    }
  }
}
</script>