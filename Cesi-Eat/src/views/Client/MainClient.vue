<script setup>
import NavbarClient from '../../components/NavbarClient.vue';
import RestaurantItem from '../../components/RestaurantItem.vue'
import { ref, onBeforeMount } from 'vue';

// Déclare une variable réactive pour stocker les restaurants
const restaurants = ref([]);

async function getRestaurant() {
  try {
    const response = await fetch(import.meta.env.VITE_ENDPOINT_URL + 'user/restaurants', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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

onBeforeMount( async () => {
  await getRestaurant()
})

</script>

<template>
  <NavbarClient />

  <body>
    <p>Choisissez votre restaurant !</p>
    <div class="restaurants-list">
        <div v-for="restaurant in restaurants" :key="restaurant._id" class="restaurant-div">
          <RestaurantItem :name="restaurant.name" :image="restaurant.image" source="Client" :_id="restaurant._id"/>
        </div>

    </div>
  </body>
</template>

<style scoped>
p {
  color: #ECB056;
  font-size: 30px;
}

body {
  flex-direction: column;
}

.restaurants-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;
}

.placeholder {
  width: 15%;
  margin: 20px;
}

.restaurant-div{
  margin-left: 10px;
  margin-right: 10px;
}

</style>
