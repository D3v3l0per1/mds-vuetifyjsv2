<template>
  <v-container>
    <v-layout row wrap>

      <!-- <v-flex xs12 class="mb-3">
        <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"></v-parallax>
      </v-flex> -->

      <v-flex xs12 lg6 class="px-2" text-xs-center>
        <h1 class="display-1 primary--text">Konzerthäuser</h1>
        <v-divider></v-divider>
        <v-layout row wrap>

          <v-flex xs12 class="pa-2" v-for="customer in conzerts" :key="customer.title">
            <Customer :customer="customer" />
          </v-flex>

        </v-layout>
      </v-flex>

      <v-flex xs12 lg6 class="px-2" text-xs-center>
        <h1 class="display-1 primary--text">Orchester</h1>
        <v-divider></v-divider>
        <v-layout row wrap>

          <v-flex xs12 class="pa-2" v-for="customer in orchester" :key="customer.title">
            <Customer :customer="customer" />
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
  }
};
</script>
