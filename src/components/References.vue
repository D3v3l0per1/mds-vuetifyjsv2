<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-parallax src="@/assets/hero.jpg" height="650">
        <v-layout justify-center align-center style="margin-top: 100px;">
          <v-flex xs12>
            <v-layout justify-center align-center class="pt-5 mb-3">
              <v-flex xs12 sm5 text-xs-center>
                <h1
                  class="display-2 font-weight-bold"
                  style="text-shadow: 2px 2px 20px #000;"
                >Kunden Feedback</h1>
              </v-flex>
            </v-layout>

            <v-carousel show-arrows-on-hover hide-delimiter-background cycle class="mb-5">
              <v-carousel-item v-for="item in items" :key="item.id">
                <v-layout justify-center align-center>
                  <v-flex xs12 sm8 md6 text-xs-center>
                    <v-card outlined color="white">
                      <v-img
                        v-if="item.logo"
                        :src="getImageUrl(item.logo)"
                        contain
                        class="ma-3"
                        style="height: 199px; max-width: 950px;"
                      >
                        <template v-slot:placeholder>
                          <v-layout fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="primary"></v-progress-circular>
                          </v-layout>
                        </template>
                      </v-img>
                      <v-divider class="grey lighten-1"></v-divider>
                      <!-- <v-card-title class="primary--text">
                        <h2 class="title">{{item.title}}</h2>
                      </v-card-title>-->
                      <v-card-text class="grey--text text--darken-2">
                        <div
                          class="grey lighten-3"
                          style="padding: 20px; font-size: 1.1rem; line-height: 1.5; border-radius: 5px;"
                        >
                          <simplebar style="max-height: 100px;">
                            <p style="text-align: justify;">{{ item.description }}</p>
                          </simplebar>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-parallax>
    </v-flex>
  </v-layout>
</template>

<script>
import jsonData from "../data/references.json";

export default {
  data() {
    return {
      showArrows: false,
      items: jsonData.references
    };
  },
  methods: {
    getImageUrl(pic) {
      return require("@/assets/logos/" + pic);
    }
  }
};
</script>
