import Vue from 'vue'
import Router from 'vue-router'
import Container from 'components/Container'
import Presentation from 'components/Presentation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container
    },
    {
      path: '/weather',
      name: 'Presentation',
      component: Presentation
    }
  ]
})
