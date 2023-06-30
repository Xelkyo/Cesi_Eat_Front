<script setup>
import {TTCCart} from '../../store/cart.js'
import { StoreInCart } from '../../store/cart.js'
import {saveIdUser} from '../../store/IdUser.js'
import {saveMenuSelect} from '../../store/menu.js'

const Price = TTCCart();
const Items = StoreInCart();
const Id = saveIdUser();
const RestId = saveMenuSelect();

let sentBodyData = {
    customerId : Id._id,
    restaurantId : RestId._id,
    price: Price.price,
    order_items : Items.Items
}

console.log(sentBodyData)

async function SendOrder(){
    try {
        const response = await fetch(import.meta.env.VITE_ENDPOINT_URL + 'order/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.token
            },
            body: JSON.stringify(sentBodyData)
        });
        const jsonData = await response.json();
        let dataBody = jsonData.body
        if (response.ok) {
            Items.value = dataBody;
            console.log(dataBody)
        } else {
            console.log('Une erreur s\'est produite lors de la récupération des restaurants');
        }
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la requête GET :', error);
    }
}

</script>

<template>
    <div>[Vous êtes bien sur la page de paiement]</div>
    <button @click="SendOrder()">Valider le paiement</button>
</template>

<style scoped>

</style>
