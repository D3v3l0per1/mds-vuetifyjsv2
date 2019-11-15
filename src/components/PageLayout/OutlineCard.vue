<template>
  <v-flex xs12 class="mb-3" :id="content.id">
    <v-card outlined>
      <v-card-title>
        <h1 class="display-1 primary--text text-truncate">{{ content.title }}</h1>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <simplebar style="max-height: 350px;" data-simplebar-auto-hide="false" class="pr-3 pl-3">
          <p style="white-space: pre-line; text-align: justify;">{{ content.text }}</p>
        </simplebar>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['content']
}
</script>
