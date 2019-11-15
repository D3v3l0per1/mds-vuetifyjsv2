<template>
  <v-card outlined>
    <v-img v-if="member.picture" :src="getImageUrl(member.picture)" class="custom-img my-3">
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
    <v-img v-else :src="getImageUrl('fp.jpg')" class="custom-img my-3">
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

    <v-card-title class="pb-0">
      <div class="text-truncate">{{ member.name }}</div>
    </v-card-title>

    <v-card-actions class="pt-0 mt-0 ml-2">
      <span class="grey--text subtitle-1 text-truncate">{{ member.position }}</span>
      <v-spacer></v-spacer>
      <v-btn icon @click="showBossOneDesc = !showBossOneDesc" v-if="member.story">
        <v-icon>{{ showBossOneDesc ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-divider></v-divider>
    
    <v-expand-transition  v-if="member.story">
      <div v-show="showBossOneDesc">
        <v-card-text style="max-height: 180px; text-align: left;">
          <simplebar class="pl-3 pr-3" style="max-height: 150px;" data-simplebar-auto-hide="false">
            <p style="white-space: pre-line;">
              {{ member.story }}
            </p>
          </simplebar>
        </v-card-text>
      </div>
    </v-expand-transition>

  </v-card>
</template>

<script>
import simplebar from 'simplebar-vue'

export default {
  props: ['member'],
  methods: {
    getImageUrl(pic) {
      return require('@/assets/'+pic)
    }
  },
  data () {
    return {
      showBossOneDesc: false
    }
  }
}
</script>

<style scoped>
  .custom-img {
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    max-height: 200px;
    max-width: 200px;
    margin: 0 auto;
  }
</style>