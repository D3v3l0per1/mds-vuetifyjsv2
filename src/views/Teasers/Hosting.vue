<template>
  <PlainText :content="content" />
  <!-- <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 md6>
        <vue-markdown>
          # Headlien 1

          - Hallo
          - Des is
          - a Test 
          - Lol
        </vue-markdown>
      </v-flex>
    </v-layout>
  </v-container> -->
</template>

<script>
import jsonData from '../../data/hosting.json'
import PlainText from '../../components/PageLayout/PlainText'

export default {
  data () {
    return {
      content: jsonData.hosting
    }
  },
  components: {
    PlainText
  } 
}
</script>
