<script setup>
const props = defineProps(['restaurant', 'restaurant_address', 'delivery_address', 'img'])


</script>

<template>
    <div class="flex">
        <img :src="props.img" class="restaurant-img">
        <div class="">
            <div class="delivery_title">Restaurant:</div>
            <div class="delivery_title">Adresse du restaurant:</div>
            <div class="delivery_title">Adresse du client:</div>
        </div>
        <div>
            <div class="delivery_infos">{{ restaurant }}</div>
            <div class="delivery_infos">{{ restaurant_address }}</div>
            <div class="delivery_infos">{{ delivery_address }}</div>
        </div>

        <div class="buttons">
            <button class="Deny_btn">✕</button>
            <button class="Accept_btn">✓</button>
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
    width: 35%;
    height: 60px
}

.Accept_btn {
    background-color: rgb(2, 146, 0);
    width: 55%;
    height: 60px;
    margin-left: 5px
}

.flex {
    justify-content: space-between;
}

.delivery_infos {
    font-size: larger;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top:5%
}

.delivery_title {
    font-size: larger;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: flex-end;
    margin-top:7%
}

.buttons {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
}
</style>
