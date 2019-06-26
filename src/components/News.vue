<template>
  <v-container>
    <v-layout row wrap>

      <v-flex xs12>
        <h1 class="display-2 primary--text text-xs-center mt-4 mb-4">Neuigkeiten</h1>
        <v-divider class="mb-4"></v-divider>
      </v-flex>

      <v-flex xs12>
        <v-layout row wrap>

          <v-flex xs12 sm6 class="pa-3">
            <v-card outlined>
              <v-img src="https://moredms.github.io/moredms-com/banner_wien.png" height="500px" gradient="to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px">
                <v-card-title class="align-end fill-height">
                  <span class="display-1 font-weight-regular white--text text-truncate">Success Story Konzerthaus Berlin</span>
                </v-card-title>
              </v-img>
              <v-card-text>
                <div>
                  <p class="subtitle-1 text-truncate">Seit 2014 ist im Konzerthaus Berlin evis im Einsatz. Inzwischen arbeiten 60 Mitarbeiterinnen und Mitarbeiter im System – Zeit für ein Gespräch mit der Projektleiterin Anna Saß über die damaligen Überlegungen, die Einführungsphase und die bisherigen Erfahrungen.</p>
                </div>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text class="primary--text">Weiterlesen</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6>
            <v-layout row wrap>
              
              <v-flex xs12 class="pa-3">
                <v-card outlined>
                  <v-img src="https://moredms.github.io/moredms-com/banner_wien.png" height="175px" gradient="to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px">
                    <v-card-title class="align-end fill-height">
                      <span class="display-1 font-weight-regular white--text text-truncate">Lorem Ipsum Dolor sit amet</span>
                    </v-card-title>
                    <template v-slot="placeholder">
                      <v-layout
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-layout>
                    </template>
                  </v-img>
                  <v-card-text>
                    <div>
                      <p class="subtitle-1 text-truncate">Seit 2014 ist im Konzerthaus Berlin evis im Einsatz. Inzwischen arbeiten 60 Mitarbeiterinnen und Mitarbeiter im System – Zeit für ein Gespräch mit der Projektleiterin Anna Saß über die damaligen Überlegungen, die Einführungsphase und die bisherigen Erfahrungen.</p>
                    </div>
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text class="primary--text">Weiterlesen</v-btn>
                  </v-card-actions>                               
                </v-card>
              </v-flex>

              <v-flex xs12 class="pa-3">
                <v-card outlined>
                  <v-img src="https://moredms.github.io/moredms-com/banner_wien.png" height="175px" gradient="to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px">
                    <v-card-title class="align-end fill-height">
                      <span class="display-1 font-weight-regular white--text text-truncate">Success Story Konzerthaus Hamburg</span>
                    </v-card-title>
                  </v-img>
                  <v-card-text>
                    <div>
                      <p class="subtitle-1 text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text class="primary--text">Weiterlesen</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>

            </v-layout>
          </v-flex>

        </v-layout>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'News'
}
</script>