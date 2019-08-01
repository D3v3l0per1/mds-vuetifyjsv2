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
              <v-card-title>
                <h1 class="headline">{{ item.title }}</h1>
              </v-card-title>
              <v-divider class="mb-2"></v-divider>
              <v-card-text class="pt-0">
                <simplebar style="max-height: 150px;">
                  <p style="white-space: pre-line;">{{ item.text }}</p>
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
  props: ['content']
}
</script>