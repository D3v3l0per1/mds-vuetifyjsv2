<template>
  <v-card outlined>
    
    <v-img v-if="customer.logo" :src="getImageUrl(customer.logo)" style="max-height: 150px; max-width: 500px; margin: 0 auto;" class="my-3" contain>
      <template v-slot:placeholder>
        <v-layout fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-layout>
      </template>
    </v-img>
    
    <v-img v-else src="https://via.placeholder.com/500x150?text=Logo" style="max-height: 150px; max-width: 500px; margin: 0 auto;" class="my-3" contain>
      <template v-slot:placeholder>
        <v-layout fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-layout>
      </template>
    </v-img>

    <v-divider></v-divider>
  
    <v-card-title>
      <h1 class="headline text-truncate">{{ customer.title }}</h1>
      <v-spacer></v-spacer>
      <v-btn v-if="customer.feedback" text small @click="showFeedback = !showFeedback">
        Feedback
        <v-icon>{{ showFeedback ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
      <v-btn text small class="primary--text" @click="openLinkInNewTab(customer.website)">
        Website <v-icon right>keyboard_arrow_right</v-icon>
      </v-btn>
      
    </v-card-title>

    <v-divider v-if="customer.feedback"></v-divider>

    <v-expand-transition v-if="customer.feedback">
      <div v-show="showFeedback">
        <v-card-text>
          <p class="feedback-text">
            {{ customer.feedback }}
          </p>
        </v-card-text>
      </div>
    </v-expand-transition>

  </v-card>
</template>

<script>
export default {
  props: ['customer'],
  data () {
    return {
      showFeedback: false
    }
  },
  methods: {
    getImageUrl(pic) {
      return require("@/assets/logos/" + pic);
    },
    openLinkInNewTab (url) {
      var win = window.open(url, '_blank')
      win.focus()
    }
  },
}
</script>

<style scoped>
.feedback-text {
  margin-bottom: 0;
  padding: 10px;
  background-color: #ccc;
  border-radius: 5px;
  font-size: 1.1rem;
}
</style>