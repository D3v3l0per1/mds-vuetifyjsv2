import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import FlagIcon from 'vue-flag-icon'
import DateFilter from './filters/date'
import VueMarkdown from 'vue-markdown'
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'

import ScrollTop from '@/components/Shared/ScrollTop'
import GoBack from '@/components/Shared/GoBack'

Vue.config.productionTip = false

Vue.component('scroll-top', ScrollTop)
Vue.component('go-back', GoBack)
Vue.component('vue-markdown', VueMarkdown)
Vue.component('simplebar', simplebar)

Vue.filter('date', DateFilter)

Vue.use(FlagIcon)

new Vue({
  router,
  vuetify,
  // created () {
  //    this.$store.dispatch('loadNews')
  // },
  render: h => h(App)
}).$mount('#app')
