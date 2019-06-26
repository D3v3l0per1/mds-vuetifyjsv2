import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: colors.deepOrange.base
      }
    }
  }
});
