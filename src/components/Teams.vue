<template>
  <!-- <v-flex xs12 class="pt-4 pb-4"> -->
    <!-- <v-img src="@/assets/hero.jpg" class="pt-4" height="auto"> -->
    <v-container>
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm8>
          <v-layout row wrap>

            <v-flex xs12 text-xs-center class="mb-3">
              <h1 class="display-1 primary--text">Unser Team</h1>
            </v-flex>

            <v-flex xs12>
              <v-card flat class="grey lighten-5">
                <v-card-text class="pa-0 mb-4">
                  <v-layout row wrap align-center fill-height>
                    
                    <v-flex xs12 lg6 class="pa-2" text-xs-center v-for="member in bosses" :key="member.id">
                      <v-card outlined>
                        <img v-if="member.picture" :src="member.picture" class="mt-3 custom-img">
                        <img v-else :src="getImageUrl('fp.jpg')" class="mt-3 custom-img">
                        <v-card-title class="pb-0">
                        <div class="text-truncate">{{ member.name }}</div>
                        </v-card-title>
                        <v-card-actions class="pt-0 pl-3">
                          <span class="grey--text subtitle-1 text-truncate">{{ member.position }}</span>
                          <v-spacer></v-spacer>
                          <v-btn icon @click="showBossOneDesc = !showBossOneDesc">
                            <v-icon>{{ showBossOneDesc ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                          </v-btn>
                        </v-card-actions>
                        <v-divider></v-divider>
                        <v-expand-transition>
                          <div v-show="showBossOneDesc">
                            <v-card-text style="max-height: 180px; text-align: left;">
                              <simplebar class="scroll-content pl-3 pr-3" data-simplebar-auto-hide="false">
                                <p style="white-space: pre-line;">
                                  {{ member.story }}
                                </p>
                              </simplebar>
                            </v-card-text>
                          </div>
                        </v-expand-transition>
                      </v-card>
                    </v-flex>
                  
                  </v-layout>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="showRestOfTeam = !showRestOfTeam">
                    Das ganze Team
                    <v-icon>{{ showRestOfTeam ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="showRestOfTeam">
                    
                    <v-layout row wrap align-center fill-height>
                    
                      <v-flex xs12 lg6 class="pa-2" text-xs-center v-for="member in teams" :key="member.id">
                        <v-card outlined>
                          <img v-if="member.picture" :src="member.picture" class="mt-3 custom-img">
                          <img v-else :src="getImageUrl('fp.jpg')" class="mt-3 custom-img">
                          <v-card-title class="pb-0">
                          <div class="text-truncate mb-2">{{ member.name }}</div>
                          </v-card-title>
                          <v-card-actions class="pt-0 pl-3">
                            <span class="grey--text subtitle-1 text-truncate">{{ member.position }}</span>
                          </v-card-actions>
                        </v-card>
                      </v-flex>
                    
                    </v-layout>

                  </div>
                </v-expand-transition>
              </v-card>
            </v-flex>

          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- </v-img> -->
  <!-- </v-flex> -->
</template>

<script>
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'

export default {
  props: ['bosses','teams'],
  data () {
    return {
      showBossOneDesc: false,
      showRestOfTeam: false
    }
  },
  components: {
    simplebar
  },
  methods: {
    getImageUrl(pic) {
      return require('@/assets/'+pic)
    }
  }
}
</script>

<style scoped>
  .scroll-content {
    max-height: 150px;
  }

  .banner {
    background-color: rgba(0,0,0,.6);
    border: 2px solid #ffffff;
    border-radius: 5px;
    padding: 20px;
  }

  .custom-img {
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    max-height: 200px;
    max-width: 200px;
  }
</style>
