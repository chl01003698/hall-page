import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hall-payment',
      name: 'hall_payment',
      component: () => ({component: import('@/views/hallPayment')})
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: () => ({component: import('@/recruit/recruit')})
    },
    {
      path: '/addQ',
      name: 'addQ',
      component: () => ({component: import('@/addQ/add')})
    },
    {
      path: '/Redenvelopes',
      name: 'Redenvelopes',
      component: () => ({component: import('@/addQ/Redenvelopes')})
    },
    {
      path: '/invitation',
      name: 'invitation',
      component: () => ({component: import('@/addQ/invitation')})
    }
  ]
})
