import Vue from 'vue'
import Router from 'vue-router'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

// import VueElectron from 'vue-electron'

// Vue.use(VueElectron)


//router import
import Index from '@/components/LandingPage'
import ContentRequest from '@/components/ContentPage/Request'

Vue.use(Router)
Vue.use(iView)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: Index,
      children: [
        {
          path: '/',
          name: 'request',
          component: ContentRequest
        }
      ]
    }
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
