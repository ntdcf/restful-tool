import Vue from 'vue'
import Router from 'vue-router'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(Router)
Vue.use(iView)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
