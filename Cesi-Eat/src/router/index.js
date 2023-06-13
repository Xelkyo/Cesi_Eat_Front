import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import Register from '../views/Register.vue'
import RegisterDelivery from '../views/Delivery/registerDelivery.vue'
import RegisterClient from '../views/Client/registerClient.vue'
import RegisterRestaurant from '../views/Restaurant/registerRestaurant.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/LogIn',
      name:'LogIn',
      component: LogIn
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/registerDelivery',
      name:'RegisterDelivery',
      component: RegisterDelivery
    },
    {
      path:'/registerClient',
      name:'RegisterClient',
      component:RegisterClient
    },
    {
      path:'/registerRestaurant',
      name:'RegisterRestaurant',
      component:RegisterRestaurant
    }

  ]
})

export default router
