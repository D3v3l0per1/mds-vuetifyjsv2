<template>
  <div>
    <Carousel />

    <div style="max-width: 1690px; margin: 0 auto; width: 100%;">
      <h1 class="primary--text display-2 text-xs-center mt-4 mb-4">Dienstleistungen</h1>
      <v-divider></v-divider>
    </div>

    <Teasers />

    <Parallax />

    <News />
    
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import Teasers from '../components/Teasers'
import Parallax from '../components/Parallax'
import News from '../components/News'

export default {
  components: {
    Carousel,
    Teasers,
    Parallax,
    News
  },
};
</script>
