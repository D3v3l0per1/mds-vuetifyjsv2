<template>
  <div>

    <ParallaxWSloagan />

    <Teasers />

    <References />

    <!-- <News /> -->
    
  </div>
</template>

<script>
import ParallaxWSloagan from '../components/ParallaxWSloagan'
import Teasers from '../components/Teasers'
import References from '../components/References'
import News from '../components/News'

export default {
  components: {
    ParallaxWSloagan,
    Teasers,
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
