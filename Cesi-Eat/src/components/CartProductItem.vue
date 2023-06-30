<script setup>
const props = defineProps(['name', 'quantity', 'price', 'img'])

function removeItem()
{
    console.log("Work in Progress function...")
}
</script>

<template>
    <div class="flex">
    <img :src="props.img" class="product-img">
    <div class="product-infos">
        <div class="product-name">{{ name }}</div>
        <div class="product-price">{{ price }}€</div>
    </div>
</div>
    <div class="product-qty">
        <div>Quantité : 1</div>
    </div>
    <button @click="removeItem()" class="remove-btn">Retirer l'article</button>
</template>

<style scoped>
.product-img {
    width: 180px;
}

.remove-btn{
    background-color: rgb(126, 1, 1);
    width: 15%;
    height: 25%;
    font-size: 10px;
    margin-top: 10%;
    margin-right: 10px;
}

.product-infos {
    margin-top: 20px;
    margin-left: 10px;
}

.product-name {
    font-size: x-large;
    font-weight: bold;
    color: black;
}

.product-price {
    font-size: larger;
    color: #ECB056;
    font-weight: bold;
}

.product-qty {
    font-size: large;
    color: black;
    margin-right: 20px;
    margin-top: 20px;
}
</style>
