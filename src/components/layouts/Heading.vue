<template>
  <header>

    <v-app-bar fixed elevate-on-scroll prominent>

      <v-toolbar-title class="text-uppercase pl-0">
        <router-link to="/" tag="span" style="cursor: pointer;">
          <v-img :src="getImageUrl('logo-mds-small.png')" contain width="200px" height="80px">
            <template v-slot:placeholder>
              <v-layout
                fill-height
                align-center
                justify-center
                ma-0
              >
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </router-link>
        <!-- <span class="font-weight-light ">More</span> <span class="font-weight-regular primary--text">Dimensions</span> <span class="font-weight-bold primary--text">GmbH</span> -->
      </v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon class="hidden-sm-and-up" @click="sidenav = true"></v-app-bar-nav-icon>

      <v-btn icon v-for="item in socialLinks" :key="item.icon" class="hidden-xs-only">
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>
      
      <v-btn icon class="hidden-xs-only">
        <v-icon>person</v-icon>
      </v-btn>
      
      <template v-slot:extension>
        <v-toolbar-items class="hidden-xs-only" v-for="item in menuItems" :key="item.title">
          <v-btn :to="item.link" text class="grey--text text--darken-2">{{ item.title }}</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-xs-only">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn outlined text class="grey--text text--darken-2" v-on="on">Kundenbereich <v-icon right>mdi-arrow-down-drop-circle-outline</v-icon></v-btn>
            </template>
            <v-list>
              <v-list-item v-for="item in customerMenu" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon right>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
      </template>

    </v-app-bar>

    <v-navigation-drawer v-model="sidenav" temporary fixed>
      <v-list>

        <v-list-item>
          <v-list-item-content>
            <v-img src=""></v-img>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in menuItems" :key="item.title" link :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <h3 class="body-1 grey--text text--darken-2 text-xs-left mt-3 pl-3">Kundenbereich</h3>

        <v-divider class="mt-2"></v-divider>

        <v-list-item v-for="item in customerMenu" :key="item.title" link :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

      <template v-slot:append>

        <h3 class="body-1 grey--text text--darken-2 text-xs-center">Social Links</h3>

        <v-divider></v-divider>

        <v-layout justify-center align-center class="pa-2">
          <v-btn icon v-for="item in socialLinks" :key="item.link"><v-icon>{{ item.icon }}</v-icon></v-btn>
        </v-layout>
      </template>

    </v-navigation-drawer>
  
  </header>
</template>

<script>
import jsonData from '../../data/main-nav.json'

export default {
  data () {
    return {
      sidenav: false,
      menuItems: jsonData.menuItems,
      socialLinks: jsonData.socialLinks,
      customerMenu: jsonData.customerMenu
    }
  },
  mounted () {
    console.log(this.menuItems.sublinks)
  },
  methods: {
    getImageUrl(pic) {
      return require('../../assets/logos/'+pic)
    }
  }
}
</script>
