<script setup>
import Band from '../../components/Band.vue';
import NavbarRestaurant from '../../components/NavbarRestaurant.vue';
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
    <NavbarRestaurant/>
    <Band name="Vos Restaurants" />
    <div class="restaurants-list">
        <div v-for="restaurant in restaurants" :key="restaurant.id" class="restaurant-div">
                <RestaurantItem 
                :name="restaurant.name" 
                :image="restaurant.image"
                source="Restaurant"
                :_id="restaurant._id"/>
            </div>
            <div>
                <router-link to="/createRestaurant" custom v-slot="{ navigate }">
                <button @click="navigate" role="link" class="createRestaurant">
                    +
                </button>
            </router-link>
            </div>
        
    </div>
</template>

<style scoped>
.restaurants-list{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    margin-top: 5%;
}

.restaurant-div{
    margin: 20px;
}

.createRestaurant{
    width: 150px;
    height: 150px;
    background-color: rgb(209, 205, 205);
    border-radius: 20%;
    margin: 20px;
    font-size: 65px;
}

</style>
