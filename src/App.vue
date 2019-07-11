<template>
  <v-app>
    
    <!-- <vue-custom-scrollbar class="scr"> -->
      <Heading style="margin-bottom: 170px;" />

      <router-view></router-view>

      <Footer />
    <!-- </vue-custom-scrollbar> -->

    <scroll-top></scroll-top>

  </v-app>
</template>

<script>
// import vueCustomScrollbar from 'vue-custom-scrollbar'
import Heading from './components/layouts/Heading'
import Footer from './components/layouts/Footer'

export default {
  name: 'App',
  components: {
    // vueCustomScrollbar,
    Heading,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  *::selection {
    background-color: rgba(236, 104, 8,.7);
    color: #ffffff;
  } 
</style>
