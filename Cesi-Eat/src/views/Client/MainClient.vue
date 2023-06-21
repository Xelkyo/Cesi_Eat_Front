<script setup>
import NavbarClient from '../../components/NavbarClient.vue';
import { SHA256 } from 'crypto-js';
import FooterC from '../../components/Footer.vue';

async function getRestaurant() {
  try {
    const response = await fetch(import.meta.env.RESTAURANTS_LIST, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log(response);
    } else {
      console.log('Une erreur s\'est produite lors de la récupération des restaurants');
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la requête GET :', error);
  }

}

getRestaurant()

</script>

<template>
    <NavbarClient />

    <body>
        <p>Choisissez votre restaurant !</p>
        <div class="restaurants-list">
            <img :src="`/img/No-Image-Placeholder.svg.png`" class="placeholder" alt="Placeholder img">
            <img :src="`/img/No-Image-Placeholder.svg.png`" class="placeholder" alt="Placeholder img">
            <img :src="`/img/No-Image-Placeholder.svg.png`" class="placeholder" alt="Placeholder img">
            <img :src="`/img/No-Image-Placeholder.svg.png`" class="placeholder" alt="Placeholder img">
            <img :src="`/img/No-Image-Placeholder.svg.png`" class="placeholder" alt="Placeholder img">
            <img :src="`/img/No-Image-Placeholder.svg.png`" class="placeholder" alt="Placeholder img">
            <img :src="`/img/No-Image-Placeholder.svg.png`" class="placeholder" alt="Placeholder img">
            <img :src="`/img/No-Image-Placeholder.svg.png`" class="placeholder" alt="Placeholder img">
            <img :src="`/img/No-Image-Placeholder.svg.png`" class="placeholder" alt="Placeholder img">
            <img :src="`/img/No-Image-Placeholder.svg.png`" class="placeholder" alt="Placeholder img">
            <img :src="`/img/No-Image-Placeholder.svg.png`" class="placeholder" alt="Placeholder img">
        </div>
    </body>
    <FooterC />
</template>

<style scoped>
p{
    color:#ECB056;
    font-size: 30px;
}

body{
    flex-direction: column;
}

.restaurants-list{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
}

.placeholder{   
    width: 15%;
    margin: 20px;
}

</style>
