<template>
  <v-flex xs12>
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 text-xs-center class="mb-3">
        <h1 class="display-1 primary--text">Unser Team</h1>
      </v-flex>
      <v-flex xs12>
        <v-card flat class="grey lighten-5">

          <v-card-text>
            <v-layout row wrap justify-center align-center>
              <v-flex xs12 lg6 class="pa-2" v-for="member in bosses" :key="member.name">
                <TeamMember :member="member" />
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-divider class="mx-2"></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="showRestOfTeam = !showRestOfTeam">
              Ganzes Team
              <v-icon>{{ showRestOfTeam ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showRestOfTeam">
              <v-layout row wrap>

                <v-flex xs12 lg6 class="pa-2" v-for="member in members" :key="member.name">
                  <TeamMember :member="member" />
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
import TeamMember from './TeamMember'

export default {
  props: ['team'],
  data () {
    return {
      showRestOfTeam: false,
      bosses: this.team.bosses,
      members: this.team.members
    }
  },
  components: {
    TeamMember
  }
}
</script>