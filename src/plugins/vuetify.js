import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import de from 'vuetify/es5/locale/de'
import en from 'vuetify/es5/locale/en'

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { de, en },
    current: 'de',
  },
  theme: {
    themes: {
      light: {
        primary: '#ec6808'
      }
    }
  },
  icons: {
    iconfont: 'mdi',
  }
});
