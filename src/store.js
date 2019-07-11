import Vue from 'vue'
import Vuex from 'vuex'

import jsonData from './data/news.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedNews: [
      {
        id: '1',
        title: 'Lol',
        image: 'lol',
        date: new Date(),
        description: 'Was geeehhhtt'
      }
    ]
  },
  mutations: {
    setLoadedNews (state, payload) {
      state.loadedNews = payload
    }
  },
  actions: {
    loadNews ({commit}) {
      const news = jsonData.news
      console.log(news)
      commit('setLoadedNews', news)
    }
  },
  getters: {
    loadedNews (state) {
      return state.loadedNews.sort((postA, postB) => {
        return postA.date < postB.date
      })
    },
    featuredNews (state, getters) {
      return getters.loadedNews.slice(0,2)
    },
    loadedNewsPost (state) {
      return (postId) => {
        return state.loadedNews.find((post) => {
          return post.id === postId
        })
      }
    }
  }
})
