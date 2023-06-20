<script setup>
const props = defineProps(['sum_order'])

var delivery_price = (1.5 + 0.02* props.sum_order)*100;
delivery_price = (Math.round(delivery_price))/100
var TVA = (0.1* props.sum_order)*100;
TVA = (Math.round(TVA))/100

var total=props.sum_order+delivery_price+TVA

</script>

<template>
    <div class="payment">
        <div class="div-1">Résumé de la commande</div>
        <div class="div-2"><div>Sous-total : </div><div>{{ sum_order }} €</div></div>
        <div class="div-3"><div>Livraison : </div><div>{{ delivery_price }} €</div></div>
        <div class="div-4"><div>TVA : </div><div>{{ TVA }} €</div></div>
        <div class="div-5"><div>Total : </div><div>{{ total }} €</div></div>
        <router-link class="link" to="/paymentPage" custom v-slot="{ navigate }">
            <button @click="navigate" role="link" class="links">
                Continuer vers le paiement ➜
            </button>
        </router-link>
    </div>
</template>

<style scoped>
.payment{
    margin: 20px;
}
.div-1{
    font-size: 20px;
    font-weight: bold;
}

.div-2, .div-3, .div-4, .div-5{
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
}

.div-5{
    font-weight: bolder;
    margin-bottom: 20px;
}

</style>
