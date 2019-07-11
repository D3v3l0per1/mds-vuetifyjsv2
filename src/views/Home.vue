<template>
  <div>
    <!-- <Carousel /> -->

    <ParallaxWSloagan />

    <div style="max-width: 1690px; margin: 0 auto; width: 100%;">
      <h1 class="primary--text display-2 text-xs-center mt-4 mb-4">Dienstleistungen</h1>
      <v-divider></v-divider>
    </div>

    <Teasers />

    <!-- <Carousel /> -->

    <References />

    <News />
    
  </div>
</template>

<script>
import ParallaxWSloagan from '../components/ParallaxWSloagan'
// import Carousel from '../components/Carousel'
import Teasers from '../components/Teasers'
// import Parallax from '../components/Parallax'
import References from '../components/References'
import News from '../components/News'

export default {
  components: {
    ParallaxWSloagan,
    // Carousel,
    Teasers,
    // Parallax,
    References,
    News
  },
  mounted () {
    this.$vuetify.goTo(0, { 
      duration: 300,
      offset: 0,
      easing: 'easeInCubic'
    })
  }
};
</script>
