import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/inicio',
      name: 'startview',
      component: StartView
    },
    {
      path: '/',
      redirect: '/inicio'

    }
    
  ]
})

export default router
