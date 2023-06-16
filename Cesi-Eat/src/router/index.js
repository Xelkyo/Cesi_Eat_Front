import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import Register from '../views/Register.vue'
import RegisterDelivery from '../views/Delivery/RegisterDelivery.vue'
import RegisterClient from '../views/Client/RegisterClient.vue'
import RegisterRestaurant from '../views/Restaurant/RegisterRestaurant.vue'
import MainClient from '../views/Client/MainClient.vue'
import OrderFollow from '../views/Client/OrderFollow.vue'
import ClientAccount from '../views/Client/ClientAccount.vue'
import BasketClient from '../views/Client/BasketClient.vue'
import FriendRefer from '../views/Client/FriendRefer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/logIn',
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
    },
    {
      path:'/mainClient',
      name:'MainClient',
      component:MainClient
    },
    {
      path:'/orderFollow',
      name:'OrderFollow',
      component:OrderFollow
    },
    {
      path:'/clientAccount',
      name:'ClientAccount',
      component:ClientAccount
    },
    {
      path:'/basketClient',
      name:'/BasketClient',
      component:BasketClient
    },
    {
      path:'/friendRefer',
      name:'/FriendRefer',
      component:FriendRefer
    }
  ]
})

export default router
