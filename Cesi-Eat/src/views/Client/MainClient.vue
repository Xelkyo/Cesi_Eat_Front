<script setup>
import NavbarClient from '../../components/NavbarClient.vue';
import FooterC from '../../components/Footer.vue';
import RestaurantItem from '../../components/RestaurantItem.vue'
import { ref, onBeforeMount } from 'vue';


async function getRestaurant() {
  try {
    const response = await fetch(import.meta.env.VITE_ENDPOINT_URL+'user/restaurants', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const jsonData = await response.json();
    let dataBody = jsonData.body
    if (response.ok) {
      return (dataBody);
    } else {
      console.log('Une erreur s\'est produite lors de la récupération des restaurants');
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la requête GET :', error);
  }
}

// onBeforeMount( async () => {
//     let restaurant = await getRestaurant()
// })

// for (let restaurant of restaurants){
//   console.log(restaurant.name)
// }

</script>

<template>
    <NavbarClient />

    <body>
        <p>Choisissez votre restaurant !</p>
        <div class="restaurants-list">

          <div v-for="restaurant in restaurants" :key="restaurant._id" class="restaurant-div">
                <RestaurantItem 
                :name="restaurant.name" 
                :img="restaurant.img" />
            </div>
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
