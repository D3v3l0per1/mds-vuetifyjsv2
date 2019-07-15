import Vue from 'vue'
import Router from 'vue-router'

import Error from './components/Error'

Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
      path: '*',
      name: 'error',
      component: Error
    }
  ],
})
