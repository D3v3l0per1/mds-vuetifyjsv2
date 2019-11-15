<template>
  <v-container>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm6 xl8>
        <v-layout row wrap>
          <v-flex xs12 xl6>
            <v-layout row wrap>
              <v-flex xs12>
                <h1 class="display-1 primary--text">Konzerthäuser</h1>
                <v-divider></v-divider>
              </v-flex>
              <Customer :data="conzerts" />
            </v-layout>
          </v-flex>
          <v-flex xs12 xl6>
            <v-layout row wrap>
              <v-flex xs12>
                <h1 class="display-1 primary--text">Orchester</h1>
                <v-divider></v-divider>
              </v-flex>
              <Customer :data="orchester" />
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Customer from "../components/Customer";
import jsonData from "../data/customers.json";

export default {
  data() {
    return {
      conzerts: jsonData.references.conzerts,
      orchester: jsonData.references.orchester
    };
  },
  components: {
    Customer
  },
  methods: {
    getImageUrl(pic) {
      return require("@/assets/logos/" + pic);
    }
  },
  // mounted() {
  //   this.$vuetify.goTo(0, {
  //     duration: 300,
  //     offset: 0,
  //     easing: "easeInCubic"
  //   });
  // }
};
</script>
