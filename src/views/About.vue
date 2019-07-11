<template>
  <v-layout row wrap>
    
    <AboutParallax :pContent="about_us" customHeight="500" />

    <GreyText :content="story" />

    <Teams :bosses="bosses" :teams="teams" />

    <Partners :partners="partners" />

    <PlainText :content="philosophy" />

    <GreyText :content="technical" />
  
  </v-layout>
</template>

<script>
import jsonData from '../data/about.json'
import AboutParallax from '../components/AboutParallax'
import Teams from '../components/Teams'
import Partners from '../components/Partners'
import PlainText from '../components/PageLayout/PlainText'
import GreyText from '../components/PageLayout/GreyText'

export default {
  components: {
    AboutParallax,
    Teams,
    Partners,
    PlainText,
    GreyText
  },
  data () {
    return {
      about_us: jsonData.about.about_us,
      philosophy: jsonData.about.philosophy,
      story: jsonData.about.story,
      partners: jsonData.about.partners,
      bosses: jsonData.about.bosses,
      teams: jsonData.about.teams,
      technical: jsonData.about.technical
    }
  },
  methods: {
    scrollTop () {
      this.$vuetify.goTo(0, { 
        duration: 300,
        offset: 0,
        easing: 'easeInCubic'
      })
    }
  },
  mounted () {
    this.scrollTop()
  }
}
</script>


<style>
  .partner-style {
    background-color: white;
    padding: 30px;
    border: 2px solid #999999;
    border-radius: 5px;
  }
</style>
