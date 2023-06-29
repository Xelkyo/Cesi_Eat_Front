<script setup>
import Band from '../../components/Band.vue';
import NavbarClient from '../../components/NavbarClient.vue';
import {saveMenuSelect} from '../../store/menu.js'

const menuStore = saveMenuSelect()
const name ="Menu de "+ menuStore.name;


async function getMenus() {
  try {
    const response = await fetch(import.meta.env.VITE_ENDPOINT_URL + 'menus/ID_TO_COMPLETE', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.token
      },
    });
    const jsonData = await response.json();
    let dataBody = jsonData.body
    if (response.ok) {
      restaurants.value=dataBody;
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
        'Authorization': 'Token ' + localStorage.token
      },
    });
    const jsonData = await response.json();
    let dataBody = jsonData.body
    if (response.ok) {
      restaurants.value=dataBody;
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
    <NavbarClient/>
    <Band :name=name />

</template>

<style scoped>

</style>
