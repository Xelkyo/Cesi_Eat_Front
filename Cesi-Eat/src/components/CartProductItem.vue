<script setup>
const props = defineProps(['name', 'quantity', 'price', 'img'])
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
        <div>Quantité : {{ quantity }}</div>
    </div>
</template>

<style scoped>
.product-img {
    width: 180px;
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
