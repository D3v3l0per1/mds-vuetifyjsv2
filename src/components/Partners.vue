<template>
  <v-flex xs12>
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 text-xs-center class="mb-3">
        <h1 class="display-1 primary--text">Unsere Partner</h1>
      </v-flex>
      <v-flex xs12>
        <v-card flat class="grey lighten-5">

            <v-card-text>
              <v-layout row wrap justify-center align-center>
                <v-flex xs12 lg6>
                  <Partner :partner="partner" />
                </v-flex>
              </v-layout>
            </v-card-text>

            <v-divider class="mx-2"></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="showRestofPartners = !showRestofPartners">
                Alle Partner
                <v-icon>{{ showRestofPartners ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="showRestofPartners">
                <v-layout row wrap>

                  <v-flex xs12 lg6 class="pa-2" v-for="partner in others" :key="partner.name">
                    <Partner :partner="partner" />
                  </v-flex>

                </v-layout>
              </div>
            </v-expand-transition>

        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
  import Partner from './Partner'

  export default {
    props: ['partners'],
    components: {
      Partner
    },
    data () {
      return {
        showRestofPartners: false,
        partner: this.partners.main,
        others: this.partners.others
      }
    }
  }
</script>