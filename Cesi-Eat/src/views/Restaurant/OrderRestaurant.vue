<script setup>
import NavbarRestaurant from '../../components/NavbarRestaurant.vue';
import Band from '../../components/Band.vue';
import {orders} from '../../data/orderRestaurant.json'
import OrderReview from '../../components/OrderReview.vue';

</script>

<template>
    <NavbarRestaurant/>
    <Band name="Réception de commandes"/>
    <div v-for="order in orders" :key="order.id" class="orderItem-div">
                <OrderReview 
                :restaurant="order.restaurant" 
                :order_items="order.order_items" 
                :price="order.price" 
                :img="order.restaurant_img" />
            </div>

</template>

<style scoped>
.orderItem-div{
    width: 80%;
    margin-top: 2%;
    padding: 1%;
    background-color: white;
    border-radius: 30px;
    color: black;
    font-weight: bold;
}

</style>
