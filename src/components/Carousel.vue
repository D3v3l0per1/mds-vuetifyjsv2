<template>
  <v-carousel height="700" hide-delimiter-background show-arrows-on-hover cycle>
    <v-carousel-item v-for="item in items" :key="item.title" :src="item.src">
      <!-- <v-layout
        align-center
        fill-height
        justify-start
      >
        <div class="display-3">Slide {{ i + 1 }}</div>
      </v-layout> -->
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
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          src: 'http://lorempixel.com/output/abstract-q-c-1920-1080-2.jpg'
        },
        {
          title: '2nd fkn test',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          src: 'http://lorempixel.com/output/abstract-q-c-1920-1080-1.jpg'
        }
      ]
    }
  }
}
</script>
