<template>
  <header>

    <v-app-bar fixed elevate-on-scroll>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light ">More</span> <span class="font-weight-regular primary--text">Dimensions</span> <span class="font-weight-bold primary--text">GmbH</span>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text class="primary--text" v-for="item in menuItems" :key="item.title">{{item.title}}</v-btn>
      </v-toolbar-items>

    </v-app-bar>
  
  </header>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        { title: 'Wir', link: '' },
        { title: 'bieten', link: '' },
        { title: 'Lösungen', link: '' }
      ]
    }
  }
}
</script>
