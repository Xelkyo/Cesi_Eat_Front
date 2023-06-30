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
import PaymentPage from '../views/Client/PaymentPage.vue'
import MainRestaurant from '../views/Restaurant/MainRestaurant.vue'
import OrderRestaurant from '../views/Restaurant/OrderRestaurant.vue'
import RestaurantAccount from '../views/Restaurant/RestaurantAccount.vue'
import CreateRestaurant from '../views/Restaurant/CreateRestaurant.vue'
import MenuRestaurant from '../views/Restaurant/MenuRestaurant.vue'
import ComponentsDownload from '../views/ComponentsDownload.vue'
import MenuClient from '../views/Client/MenuClient.vue'
import CreateItem from '../views/Restaurant/CreateItem.vue'
import NotFound from '../components/NotFound.vue'
import MainDelivery from '../views/Delivery/MainDelivery.vue'
import DeliveryAccount from '../views/Delivery/deliveryAccount.vue'
import OrderMain from '../views/Restaurant/OrderMain.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/:pathMatch(.*)*',
      name:'not-found',
      component:NotFound
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
    },
    {
      path:'/paymentPage',
      name:'/PaymentPage',
      component:PaymentPage
    },
    {
      path:'/mainRestaurant',
      name:'MainRestaurant',
      component:MainRestaurant
    },
    {
      path:'/orderRestaurant',
      name:'OrderRestaurant',
      component:OrderRestaurant
    },
    {
      path:'/restaurantAccount',
      name:'RestaurantAccount',
      component:RestaurantAccount
    },
    {
      path:'/createRestaurant',
      name:'CreateRestaurant',
      component:CreateRestaurant
    },
    {
      path:'/menuRestaurant',
      name:'MenuRestaurant',
      component:MenuRestaurant
    },
    {
      path:'/componentsDownload',
      name:'ComponentsDownload',
      component:ComponentsDownload
    },
    {
      path:'/menuClient',
      name:'MenuClient',
      component:MenuClient
    },
    {
      path:'/createItem',
      name:'CreateItem',
      component:CreateItem
    },
    {
      path:'/mainDelivery',
      name:'MainDelivery',
      component:MainDelivery
    },
    {
      path:'/deliveryAccount',
      name:'DeliveryAccount',
      component:DeliveryAccount
    },
    {
      path:'/orderMain',
      name:'OrderMain',
      component:OrderMain
    }
  ]
})

export default router
