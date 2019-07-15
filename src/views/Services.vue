<template>
  <v-container>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-layout row wrap>

          <OutCar :content="intelligent_solutions" id="intelligent_solutions" />

          <OutCar :content="interfaces" />

          <Solutions :content="software_solutions" class="mb-3" />

          <OutCar :content="business_intelligence" id="business_intelligence" />

          <OutCar :content="hosting" id="hosting" />

          <OutCar :content="consultation" id="beratung" />

          <OutCar :content="customizing" />

          <OutCar :content="training" />

        </v-layout>  
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import jsonData from '../data/service.json'
import OutCar from '../components/PageLayout/OutlineCard'
import Solutions from '../components/Solutions'

export default {
  data () {
    return {
      intelligent_solutions: jsonData.intelligent_solutions,
      business_intelligence: jsonData.business_intelligence,
      interfaces: jsonData.interfaces,
      software_solutions: jsonData.software_solutions,
      hosting: jsonData.hosting,
      consultation: jsonData.consultation,
      customizing: jsonData.customizing,
      training: jsonData.training
    }
  },
  components: {
    OutCar,
    Solutions
  },
  // mounted () {
  //   console.log()
  //   goTo(this.content.link)
  // }
  mounted () {
    this.$vuetify.goTo(0, { 
      duration: 300,
      offset: 0,
      easing: 'easeInCubic'
    })
  }
}
</script>
