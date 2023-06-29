<script setup>
import NavbarDelivery from '../../components/NavbarDelivery.vue';
import Band from '../../components/Band.vue';
import {orders} from '../../data/orderRestaurant.json'
import OrderDelivery from '../../components/OrderDelivery.vue';

</script>

<template>
    <NavbarDelivery/>
    <Band name="Réception de commandes"/>
    <div v-for="order in orders" :key="order.id" class="orderItem-div">
                <OrderDelivery
                :restaurant="order.restaurant" 
                :img="order.restaurant_img"
                :restaurant_address="order.restaurant_address"
                :delivery_address="order.delivery_address"/>
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
