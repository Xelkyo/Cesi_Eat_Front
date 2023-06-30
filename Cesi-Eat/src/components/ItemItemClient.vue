<script setup>
import { StoreInCart } from '../store/cart.js'
import { useCartStore } from '../store/cart.js'

const CartStore = StoreInCart()
const CartCount = useCartStore()
const props = defineProps(['name', 'image', 'price', '_id'])

function addToCart(){

    const Item ={
        name:props.name,
        image:props.image,
        price:props.price,
        _id:props._id
    }
    CartCount.increment()
    CartStore.CartAdd(Item)

}

</script>

<template>
    <div class="Item-infos">
        <div class="restaurantItem-div">
            <img :src="props.image || '/img/No-Image-Placeholder.svg.png'" class="item-img">
        </div>
        <div class="item-name">{{ name }}</div>
        <div class="item-price">{{ price }}€</div>
        <button @click="addToCart()" class="add-to-cart">+</button>
    </div>
</template>

<style scoped>
.item-img {
    width: auto;
    height: 150px;
    border-radius: 20%;
    margin-left: 10px;
    margin-bottom: 5px;
}

.restaurantItem-div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    /* width: 150px;
    height: 150px;
    background-color: #ECB056 ;*/
    border-radius: 20%;
}


.item-name {
    font-size: 16px;
}

.Item-infos{
    display: flex;
    background-color: white;
    border-radius: 15%;
    color: black;
    flex-direction: column;
    text-align: center;
    font-weight: bold;
}

.add-to-cart{
    background-color: grey;
    width: 48px;
    height: 48px;
    text-align: center;
    border-radius: 50%;
    display: flex;
    align-self: center;
    font-size: x-large;
    padding-top: 9px;
    padding-left: 16px;
    margin-bottom: 10px;

}

</style>
