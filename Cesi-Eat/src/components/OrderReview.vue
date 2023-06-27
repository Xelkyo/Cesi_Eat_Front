<script setup>
const props = defineProps(['restaurant', 'order_items', 'price', 'img'])


</script>

<template>
    <div class="flex">
        <img :src="props.img" class="restaurant-img">
        <div class="order-items">
            <div v-for="order_item in order_items" key:order_item.id class="order-item">
                {{ order_item.quantity }}
                {{ order_item.name }}
            </div>
        </div>
        <div class="order-price">{{ price }}€</div>
        <div class="buttons">
            <button class="Deny_btn">✕</button>
            <button class="Accept_btn">✓</button>
            <button class="OrderDone">Commande prête</button>
        </div>
    </div>
</template>

<style scoped>
.restaurant-img {
    width: 170px;
    border-radius: 20px;
}

.Deny_btn {
    background-color: rgb(198, 4, 4);
    width:35%;
    height: 60px
}

.Accept_btn {
    background-color: rgb(2, 146, 0);
    width:55%;
    height: 60px;
    margin-left:5px
}

.flex {
    justify-content: space-between;
}

.order-items {
    font-size: larger;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    flex-wrap: wrap;
}

.OrderDone{
    margin-top: 10%;
    height: 60px;
    align-self: flex-end;
}

.buttons{
width: 20%;
display: flex;
justify-content: flex-end;
flex-wrap: wrap;
}

.order-price{
    align-self: center;
    font-size: 22px;
}

</style>
