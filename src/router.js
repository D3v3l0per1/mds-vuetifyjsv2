import Vue from 'vue'
import Router from 'vue-router'
import goTo from 'vuetify/es5/services/goto'

import Error from './components/Error'

Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;
    if(to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home')
    },
    {
      path: '/about',
      name: 'about',
      component: loadView('About')
    },
    {
      path: '/contact',
      name: 'contact',
      component: loadView('Contact')
    },
    {
      path: '/news/:id',
      name: 'viewNews',
      props: true,
      component: loadView('News/ViewNews')
    },
    {
      path: '/news',
      name: 'news',
      component: loadView('News/News')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: loadView('Jobs')
    },
    {
      path: '/services',
      name: 'services',
      component: loadView('Services')
    },
    {
      path: '/references',
      name: 'references',
      component: loadView('References')
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ],
})
