<template>
  <div>
    <v-container class="pb-0">
      <v-layout row wrap justify-center align-center fill-height>
        <v-flex xs12 sm6>
          <h1 class="display-1 primary--text">Jobs</h1>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>
    </v-container>

    <Jobs />
  </div>
</template>

<script>
import Jobs from '@/components/Jobs'

export default {
  components: {
    Jobs
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
