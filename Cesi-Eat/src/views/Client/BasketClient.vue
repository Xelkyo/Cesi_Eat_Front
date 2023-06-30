<script setup>
import Band from '../../components/Band.vue';
import NavbarClient from '../../components/NavbarClient.vue';
import CartProductItem from '../../components/CartProductItem.vue';
import CartPayment from '../../components/CartPayment.vue'
import { StoreInCart } from '../../store/cart.js'

const CartStore = StoreInCart()

var sum_order = 0;

for (let Item of CartStore.Items){
    sum_order +=Item.price
    sum_order = sum_order*100
    sum_order = (Math.round(sum_order))/100
}

</script>

<template>
    <NavbarClient/>
    <Band name="Panier" />
    <div class="main-div">
        <article class="order-article">
            <div v-for="Item in CartStore.Items" :key="Item.id" class="orderItem-div">
                <CartProductItem 
                :name="Item.name" 
                :price="Item.price" 
                :img="Item.image" />
            </div>
        </article>
        <article class="payment-article">
            <div class="payment-div">
            <CartPayment :sum_order="sum_order"/>
            </div>
        </article>
    </div>
</template>

<style scoped>

.order-article{
    width: 60%;
}

.payment-article{
width: 23%;
}


.main-div {
    display: flex;
    align-self: flex-start;
    padding-left: 10px;
    padding-top: 10px;
    justify-content: space-between;
    width: 98%;
}

.orderItem-div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color:rgb(255, 255, 255);
    margin-top: 25px;
    border-radius: 40px;
}

.payment-div{
    display: flex;
    flex-direction: column;
    background-color:rgb(255, 255, 255);
    margin-top: 25px;
    border-radius: 40px;
    color: black;
}
</style>