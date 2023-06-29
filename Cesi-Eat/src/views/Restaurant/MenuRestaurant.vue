<script setup>
import Band from '../../components/Band.vue';
import NavbarRestaurant from '../../components/NavbarRestaurant.vue';
import ItemItemRestaurant from '../../components/ItemItemRestaurant.vue'
import { saveMenuSelect } from '../../store/menu.js'
import { ref, onBeforeMount } from 'vue';

const menuStore = saveMenuSelect()
const Items = ref([]);
const sentBodyData = { restaurantId: menuStore._id }
const name = "Menu de " + menuStore.name;


async function getMenus() {
    try {
        const response = await fetch(import.meta.env.VITE_ENDPOINT_URL + 'menu/menus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.token
            },
            body: sentBodyData
        });
        const jsonData = await response.json();
        let dataBody = jsonData.body
        if (response.ok) {
            restaurants.value = dataBody;
            console.log(dataBody)
        } else {
            console.log('Une erreur s\'est produite lors de la récupération des restaurants');
        }
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la requête GET :', error);
    }
}

async function getItems() {
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

onBeforeMount(async () => {
    await getItems()
})

</script>

<template>
    <NavbarRestaurant />
    <Band :name=name />

    <div class="Item-list">

        <div v-for="Item in Items" :key="Item.id" class="Item-div">
            <ItemItemRestaurant 
            :name="Item.name" 
            :image="Item.image" 
            :price="Item.price" 
            :_id="Item._id" />
        </div>

        <div>
            <router-link to="/createItem" custom v-slot="{ navigate }">
                <button @click="navigate" role="link" class="createItem">
                    +
                </button>
            </router-link>
        </div>


    </div>
</template>

<style scoped>
.createItem {
    width: 150px;
    height: 150px;
    background-color: rgb(209, 205, 205);
    border-radius: 20%;
    font-size: 65px;
    margin: 20px;
}

.Item-list{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    margin-top: 5%;
}

.Item-div{
    margin: 20px;
}
</style>
