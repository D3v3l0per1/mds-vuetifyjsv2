import jsonData from '@/data/news.json'

export default {
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
}