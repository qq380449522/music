import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import('./views/Singer.vue')
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import('./views/Rank.vue')
    }
  ]
})
