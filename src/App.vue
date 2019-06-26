<template>
  <v-app>
    
    <Heading />

    <router-view></router-view>

    <Footer />

  </v-app>
</template>

<script>
import Heading from './components/layouts/Heading'
import Footer from './components/layouts/Footer'

export default {
  name: 'App',
  components: {
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
    background-color: white;
    color: #FF5722;
  } 
</style>
