import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    }
  ]
})

// router.beforeEach((to, from, next) => {

// })

export default router
