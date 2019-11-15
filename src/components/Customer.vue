<template>
  <v-layout row wrap>
    <v-flex xs12 class="pa-2" v-for="reference in data" :key="reference.title">
      <v-card outlined class>
        <!-- <v-img :src="getImageUrl(reference.logo)" contain style="max-height: 150px;"></v-img> -->
        <!-- <v-divider class="mt-2"></v-divider> -->
        <v-card-title class="pt-2">
          <h1 class="headline text-truncate" style="max-width: 1">{{ reference.title }}</h1>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions class="pb-1">
          <v-btn
            text
            small
            @click="openLinkInNewTab(reference.website)"
            class="primary--text"
          >Website</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon small @click="show = !show" v-if="reference.logo || reference.description">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-expand-transition v-if="reference.logo || reference.description">
          <div v-show="show">
            <v-card-text>
              <v-layout row wrap justify-center>
                <v-flex xs12>
                  <v-img
                    v-if="reference.logo"
                    contain
                    style="max-height: 100px;"
                    :src="getImageUrl(reference.logo)"
                  ></v-img>
                </v-flex>
                <v-divider></v-divider>
                <v-flex xs12 class="mt-4 pa-3" v-if="reference.description">
                  <h5 class="title">Feedback:</h5>
                  <!-- <hr class="mb-0" /> -->
                  <v-card class="grey lighten-2 pa-2" style="text-align: justify;" outlined>
                    <p>{{ reference.description }}</p>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  data() {
    return {
      show: false
    };
  },
  props: ["data"],
  methods: {
    getImageUrl(pic) {
      return require("@/assets/logos/" + pic);
    },
    openLinkInNewTab(url) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }
};
</script>
