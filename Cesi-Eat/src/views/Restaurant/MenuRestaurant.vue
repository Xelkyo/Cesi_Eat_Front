<script setup>
import Band from '../../components/Band.vue';
import NavbarRestaurant from '../../components/NavbarRestaurant.vue';
import { saveMenuSelect } from '../../store/menu.js'

const menuStore = saveMenuSelect()
const name = "Menu de " + menuStore.name;


async function getMenus() {
    try {
        const response = await fetch(import.meta.env.VITE_ENDPOINT_URL + 'menus/ID_TO_COMPLETE', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
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
        const response = await fetch(import.meta.env.VITE_ENDPOINT_URL + 'items/ID_TO_COMPLETE', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
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

</script>

<template>
    <NavbarRestaurant />
    <Band :name=name />

    <div>
        <router-link to="/createItem" custom v-slot="{ navigate }">
            <button @click="navigate" role="link" class="createItem">
                +
            </button>
        </router-link>
    </div>
</template>

<style scoped>


.createItem{
    width: 150px;
    height: 150px;
    background-color: rgb(209, 205, 205);
    border-radius: 20%;
    margin: 20px;
    font-size: 65px;
}
</style>
