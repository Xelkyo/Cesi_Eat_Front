<script setup>
import {saveMenuSelect} from '../store/menu.js'

const menuStore = saveMenuSelect()
const props = defineProps(['name', 'image', 'source', '_id'])

let pathlink = "/menu"+props.source;

function storeId(){
    menuStore.transfer_id(props._id,props.name)
}

</script>

<template>
    <div class="restaurantItem-div">
        <div class="img-back">
            <router-link :to=pathlink custom v-slot="{ navigate }">
                <button @click="navigate(),storeId()" role="link" class="menu">
                    <img :src="props.image||'/img/No-Image-Placeholder.svg.png'" class="restaurant-img">
                </button>
            </router-link>
        </div>

        <div class="product-name">{{ name }}</div>
    </div>
</template>

<style scoped>
.restaurant-img {
    width: 150px;
    height: 150px;
    border-radius: 20%;
    cursor:pointer
}

button{
    background-color:rgba(240, 248, 255, 0);
    border: 0;
    min-width: 0;
    min-height: 0;
    padding: 0;
    margin-top: 0;
    border-radius: 20%;
}

.restaurantItem-div {
    display: flex;
    flex-direction: column;
    align-items: center;

}

</style>
