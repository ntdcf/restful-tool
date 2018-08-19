import Vue from 'vue'
import Router from 'vue-router'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/googlecode.css'

Vue.use(Router)
Vue.use(iView)
Vue.use(VueHighlightJS)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
      children: [
        {
          path: '/',
          name: 'request',
          component: require('@/components/ContentPage/Request').default
        }
      ]
    }
  ]
})
