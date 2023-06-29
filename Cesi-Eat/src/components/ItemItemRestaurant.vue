<script setup>
//import {saveMenuSelect} from '../store/menu.js'

//const menuStore = saveMenuSelect()
const props = defineProps(['name', 'image', 'price', '_id'])

const sentBodyData = {
    method: "DELETE",
    itemId: props._id

}

async function deleteItem(){
    try {
        const response = await fetch(import.meta.env.VITE_ENDPOINT_URL + 'menu/items', {
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
    <div class="restaurantItem-div">
                    <img :src="props.image||'/img/No-Image-Placeholder.svg.png'" class="item-img">
                    <button @click="deleteItem()" class="delete-item">X</button>
    </div>

    <div class="item-name">{{ name }}</div>
</template>

<style scoped>
.item-img {
    width: 150px;
    height: 150px;
    border-radius: 20%;
    margin-left: 10px;
}

.restaurantItem-div {
    display: flex;
    flex-direction: row;
    align-items:flex-start;
    justify-content: flex-end;
    /* width: 150px;
    height: 150px;
    background-color: #ECB056 ;*/
    border-radius: 20%; 
}


.item-name{
    color: white;
    text-align:center;
    font-size: 16px;
}

.delete-item{
    position: relative;
    background-color: rgb(158, 7, 7);
    border: 0;
    border-radius: 50%;
    height: 44px;
    width: 44px;
    font-size: 10px;
    top: -15px;
    left: -20px;
}

</style>
