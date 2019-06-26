<template>
  <v-container>
    <v-layout row wrap>
      
      <v-flex xs12 sm6 md4 class="pr-5 pl-5 pt-0 pb-5" v-for="teaser in teasers" :key="teaser.id">
        <v-card class="pt-4" style="height: 100%;">

          <v-img :src="teaser.imageUrl" height="100px" contain>
            <template v-slot:placeholder>
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

          <v-card-text style="min-height: 300px;">
            <div class="pr-3 pl-3">
              <h2 class="text-xs-center mb-2">{{ teaser.title }}</h2>
              <v-divider class="mb-3"></v-divider>
              <p style="text-align: left;">{{ teaser.text }} <a class="primary--text" style="text-decoration: none;" href="#">Weiterlesen</a></p>
            </div>
          </v-card-text>

        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      teasers: [
        {
          id: '3l4brl34',
          title: 'Intelligente Lösungen',
          text: 'Ob Event- oder Facility Management, professionelle Beratung oder Systemanpassung, Schnittstellen-Design oder Business Intelligence, Serverhosting oder Support Bei more dimensions erhalten Sie integrierte Werkzeuge und eine nachhaltige Betreuung für Ihren Arbeitsalltag. Durch die Kombination von Standardlösungen für Ihre Branche und individueller Anpassung befreien wir Ihre Mitarbeiter von Dingen, die eine intelligente Software für Sie erledigen kann – damit Sie sich wieder jenen Tätigkeiten widmen können, bei denen der Mensch gefragt ist.',
          imageUrl: 'https://moredms.github.io/moredms-com/teasers/teaser_1/pictogram_intelligence_orange_bitmap.png'
        },
        {
          id: '3l4bsdfrl34',
          title: 'Veranstaltungs Management',
          text: 'Mit unserer Branchen-Lösung evis bilden wir die Basis für das integrierte Management von Eventlocations, Konzerthäusern, Orchestern und Festivals. Ob Sie Ihre Projekte künstlerisch und organisatorisch planen und budgetieren, über die evis-Kommunikationstools mit ihrem Publikum kommunizieren oder ihr Personal disponieren wollen – evis bildet durch die richtige Auswahl der Module nahezu jede Konstellation des Veranstaltungsmanagements ab..',
          imageUrl: 'https://moredms.github.io/moredms-com/teasers/teaser_2/pictogram_stage_curtains_bitmap.png'
        },
        {
          id: '3l4b34rrl34',
          title: 'Facility Management',
          text: 'Mit der Standard-Lösung e.kus unseres Partners pit-cup GmbH sowie zahlreichen von uns entwickelten Erweiterungen steht Ihnen eine erweiterbare Plattform zur Verfügung, in der Gebäude- und Flächenmanagement, Instandhaltung, Investitionsplanung sowie Schnittstellen zu weiteren Systemen für einen reibungslosen und effektiven Informationsfluss im Facility Management sorgen.',
          imageUrl: 'https://moredms.github.io/moredms-com/teasers/teaser_3/pictogram_factory_green_bitmap.png'
        },
        {
          id: '3l4brcvl34',
          title: 'Business Intelligence',
          text: 'Auf Basis der Power-BI-Tools von Microsoft verdichten wir Ihre Daten – ob mit evis oder e.kus als Quelle oder zusätzlichen Datenbanken, die bei Ihnen im Einsatz sind. Wir schaffen die Verbindung zu Ihren Detailinformationen aus Rechnungswesen, Ticketing, Personalmanagement sowie öffentlichen Datenquellen und verdichten diese in Form intuitiver Dashboards, die Ihnen in Sekundenschnelle einen Überblick über Ihr unternehmerisches Handeln verschaffen.',
          imageUrl: 'https://moredms.github.io/moredms-com/teasers/teaser_4/pictogram_business_intelligence_orange_bitmap.png'
        },
        {
          id: '3l4brlh4e34',
          title: 'Hosting',
          text: 'Mit unserer eigenen Serverfarm können wir die von uns angebotenen Systeme hosten, ohne dass Sie sich im Alltag mit der dahinterliegenden Infrastruktur aus Hardware, Datenbanken, Lizenzen, Backups und Sicherheitsvorkehrungen befassen müssen. Wir liefern Ihnen ein Gesamtpaket aus Hard- und Software als Blackbox, das pro Mitarbeiter pro Monat einfach skalier- und kalkulierbar ist.',
          imageUrl: 'https://moredms.github.io/moredms-com/teasers/teaser_5/pictogram_hosting_orange_bitmap.png'
        },
        {
          id: '3l4brsdfl34',
          title: 'Dienstleistung',
          text: 'Ob Schulung, Beratung, Programmierung, Schnittstellen-Design oder Support – ein Software-System ist immer nur so gut wie die Implementierung im organisatorischen Zusammenhang. Mit einem Team von fachlich versierten Mitarbeitern kümmern wir uns um die zielgerechte Einführung unserer Systeme – stets im persönlichen Kontakt zwischen Kunde und Mitarbeiter. Wir sprechen nicht nur Programmiersprachen, sondern auch die Sprachen unserer Branchen – damit wir ohne Umwege gemeinsam zu effektiven Lösungen gelangen',
          imageUrl: 'https://moredms.github.io/moredms-com/teasers/teaser_6/pictogram_service_orange_bitmap.png'
        }
      ]
    }
  }
}
</script>
