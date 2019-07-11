<template>
  <v-flex xs12 class="pt-4 pb-4">
    <v-layout align-center>
      <v-flex xs12 sm8 md6 offset-sm2 offset-md3 >
        <v-layout row wrap>

          <v-flex xs12 text-xs-center class="mb-3">
            <h1 class="display-2 primary--text">Unsere Partner</h1>
          </v-flex>

          <v-flex xs12>
            <v-card flat class="grey lighten-5">
              <v-card-text>
                <v-layout row wrap justify-center align-center fill-height>
                  
                  <v-flex xs12 sm6 class="pa-2" text-xs-center>
                    <v-card outlined>
                      <v-img :src="main.image" contain height="200px"></v-img>
                      <v-card-title class="pb-0">
                      <div>{{ main.name }}</div>
                      </v-card-title>
                      <v-card-actions class="pt-0 pl-3">
                        <span class="grey--text subtitle-1 text-truncate">{{ main.where }}</span>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="showDesc = !showDesc">
                          <v-icon>{{ showDesc ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                      </v-card-actions>
                      <v-divider></v-divider>
                      <v-expand-transition>
                        <div v-show="showDesc">
                          <v-card-text style="max-height: 180px; text-align: left;">
                            <simplebar class="scroll-content pl-3 pr-3" data-simplebar-auto-hide="false">
                              <p style="white-space: pre-line;">
                                {{ main.text }}
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
                <v-btn text @click="showRestOfPartners = !showRestOfPartners">
                  Alle Partner
                  <v-icon>{{ showRestOfPartners ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="showRestOfPartners">
                  
                  <v-layout  justify-center align-center fill-height>
                  
                    <v-flex xs12 sm6 class="pa-2" text-xs-center v-for="partner in partners.others" :key="partner.name">
                      <v-card outlined>
                        <v-img :src="partner.image" contain style="max-height: 200px;"></v-img>
                        <v-card-title class="pb-0">
                        <div>{{ partner.name }}</div>
                        </v-card-title>
                        <v-card-actions class="pt-0 pl-3">
                          <span class="grey--text subtitle-1 text-truncate">{{ partner.where }}</span>
                          <v-spacer></v-spacer>
                          <v-btn icon @click="showDesc = !showDesc">
                            <v-icon>{{ showDesc ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                          </v-btn>
                        </v-card-actions>
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
                    </v-flex>
                  
                  </v-layout>

                </div>
              </v-expand-transition>
            </v-card>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  props: ['partners'],
  data () {
    return {
      showDesc: false,
      showRestOfPartners: false,
      main: this.partners.main
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

<style scoped>
  .banner {
    background-color: rgba(0,0,0,.6);
    border: 2px solid #ffffff;
    border-radius: 5px;
    padding: 20px;
  }

  .custom-img {
    max-height: 200px; 
    max-width: 100%;
  }
</style>
