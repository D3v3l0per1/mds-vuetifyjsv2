<template>
  <v-card outlined>
          
    <v-img :src="partner.image" contain height="200px" class="my-3">
      <template v-slot:placeholder>
        <v-layout fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-layout>
      </template>
    </v-img>

    <v-divider></v-divider>

    <v-card-title class="py-2">
      {{ partner.name }}
      <v-spacer></v-spacer>
      <v-btn text small class="primary--text" @click="openLinkInNewTab(partner.web)">
        Website <v-icon right>keyboard_arrow_right</v-icon>
      </v-btn>
      <v-btn icon @click="showDesc = !showDesc">
        <v-icon>{{ showDesc ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-title>

    <v-divider></v-divider>

    <v-expand-transition>
      <div v-show="showDesc">
        <v-card-text style="max-height: 180px; text-align: left;">
          <simplebar class="scroll-content pl-3 pr-3" data-simplebar-auto-hide="false">
            <p style="white-space: pre-line;">
              {{ partner.text }}
            </p>
          </simplebar>
        </v-card-text>
      </div>
    </v-expand-transition>
  
  </v-card>
</template>

<script>
export default {
  props: ['partner'],
  data () {
    return {
      showDesc: false,
    }
  },
  methods: {
    openLinkInNewTab (url) {
      var win = window.open(url, '_blank')
      win.focus()
    }
  }
}
</script>