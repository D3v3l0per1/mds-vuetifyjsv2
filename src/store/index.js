import Vue from "vue";
import Vuex from "vuex";

import news from "./news/index";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    news: news
  }
});
