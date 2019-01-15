import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact'
import Blog from './views/03-Blog'
import New from './views/News-Bit'
import Event from './views/04-Events'
import Explained from './views/05-Explained'

Vue.use(Router)

export default new Router({

    mode : 'history',
  routes: [
      {
          path: '/',
          name: 'home',
          component: Home
      },
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
     {
      path: '/Contact',
      name: 'contact',
      component: Contact
        },
      {
          path: '/Blog',
          name: 'blog',
          component: Blog
      },
      {
          path: '/News-bit',
          name: 'new',
          component: New
      },
      {
          path: '/04-Events',
          name: 'event',
          component: Event
      },
      {
          path: '/05-Explained',
          name: 'explained',
          component: Explained
      },


  ]
})
