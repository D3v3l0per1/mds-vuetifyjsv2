<template>
  <v-container>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm8 services>
        <v-layout row wrap>
          <OutCar :content="intelligent_solutions" id="intelligent_solutions" />

          <OutCar :content="interfaces" />

          <Solutions :content="software_solutions" class="mb-3" />

          <OutCar :content="business_intelligence" id="business_intelligence" />

          <OutCar :content="hosting" id="hosting" />

          <OutCar :content="consultation" id="beratung" />

          <OutCar :content="customizing" id="customizing" />

          <OutCar :content="training" id="training" />
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import jsonData from "../data/service.json";
import OutCar from "../components/PageLayout/OutlineCard";
import Solutions from "../components/Solutions";

export default {
  data() {
    return {
      intelligent_solutions: jsonData.services.intelligent_solutions,
      business_intelligence: jsonData.services.business_intelligence,
      interfaces: jsonData.services.interfaces,
      software_solutions: jsonData.services.software_solutions,
      hosting: jsonData.services.hosting,
      consultation: jsonData.services.consultation,
      customizing: jsonData.services.customizing,
      training: jsonData.services.training
    };
  },
  components: {
    OutCar,
    Solutions
  },
  // mounted () {
  //   console.log()
  //   goTo(this.content.link)
  // }
  // mounted() {
  //   this.$vuetify.goTo(0, {
  //     duration: 300,
  //     offset: 0,
  //     easing: "easeInCubic"
  //   });
  // }
};
</script>
