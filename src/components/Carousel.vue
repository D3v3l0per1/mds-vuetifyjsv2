<template>
  <v-carousel hide-delimiter-background show-arrows-on-hover cycle>

    <v-carousel-item v-for="item in items" :key="item.title">
      <v-layout
        align-center
        fill-height
        justify-center
      >
        <v-flex xs6 text-xs-center>
          <h1>lol</h1>
          
        </v-flex>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'This is a test',
          logo: '',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          src: 'http://lorempixel.com/output/abstract-q-c-1920-1080-2.jpg'
        },
        {
          title: '2nd fkn test',
          logo: '@/assets/logos/bo_logo.jpg',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          src: 'http://lorempixel.com/output/abstract-q-c-1920-1080-1.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .static-carousel-content {
    width: 100%;
    position: fixed;
  }
</style>
