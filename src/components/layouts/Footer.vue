<template>
  <v-footer padless dark>
    <v-card flat style="width: 100%;" class="primary white--text text-xs-center">
      <v-card-text>
        <v-layout row wrap>

          <v-flex xs12 sm6 md3 v-for="item in footerItems" :key="item.title" class="pa-2">
            <v-card class="primary" flat>
              <v-card-title>
                {{ item.title }}
              </v-card-title>

              <v-divider class="white mr-3 ml-3"></v-divider>

              <v-card-text class="text-xs-left">
                <div>
                  <ul style="list-style: none;" class="pl-0">
                    <li v-for="subItem in item.items" :key="subItem.title"><a :href="subItem.link" class="white--text body-1 footer-links" style="text-decoration: none;">{{ subItem.title }}</a></li>
                  </ul>
                </div>
              </v-card-text>

            </v-card>
          </v-flex>

        </v-layout>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        &copy; {{ new Date().getFullYear() }} - More Dimensions GmbH
      </v-card-text>
    </v-card>   
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footerItems: [
        {
          title: 'Warum wir?',
          items: [
            {
              title: 'Über uns',
              link: '/' 
            },
            {                   
              title: 'Technologie',
              link: '/'
            }
          ]
        },
        {
          title: 'Zielgruppen',
          items: [
            {
              title: 'Veranstaltungsbetriebe',
              link: '/' 
            },
            {                   
              title: 'Konzerthäuser',
              link: '/'
            },
            {                   
              title: 'Orchester',
              link: '/'
            },
            {                   
              title: 'Festivals',
              link: '/'
            },
            {                   
              title: 'Facillity Management',
              link: '/'
            },
            {                   
              title: 'Serverhosting',
              link: '/'
            }
          ]
        },
        {
          title: 'Module',
          items: [
            {
              title: 'Veranstaltungs- und Raummanagement',
              link: '/' 
            },
            {                   
              title: 'Vermietung',
              link: '/'
            },
            {                   
              title: 'Adress- und Kontaktmanagement',
              link: '/'
            },
            {                   
              title: 'Marketing-Tools',
              link: '/'
            },
            {                   
              title: 'Werke, Interpreten, Noten & Instrumente',
              link: '/'
            },
            {                   
              title: 'Orchestermanagement',
              link: '/'
            },
            {                   
              title: 'Kalkulation, Budgetierung & Controlling',
              link: '/'
            },
            {                   
              title: 'Mobile Applications',
              link: '/'
            },
            {                   
              title: 'Facillity Management',
              link: '/'
            },
            {                   
              title: 'Serverhosting',
              link: '/'
            }
          ]
        },
        {
          title: 'Kontakt',
          items: [
            {
              title: 'Kontaktieren Sie uns',
              link: '/' 
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  .footer-links:hover {
    text-decoration: underline;
  }
</style>
