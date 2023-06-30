<script setup>
import NavbarRestaurant from '../../components/NavbarRestaurant.vue';
import Band from '../../components/Band.vue';
import RestaurantItem from '../../components/RestaurantItem.vue'
import { ref, onBeforeMount } from 'vue';

const restaurants = ref([]);

async function getRestaurant() {
  try {
    const response = await fetch(import.meta.env.VITE_ENDPOINT_URL + 'user/restaurantmanagid', {
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

onBeforeMount( async () => {
  await getRestaurant()
})

</script>

<template>
    <NavbarRestaurant/>
    <Band name="Réception de commandes"/>

    <div class="restaurants-list">
        <div v-for="restaurant in restaurants" :key="restaurant.id" class="restaurant-div">
                <RestaurantItem 
                :name="restaurant.name" 
                :image="restaurant.image"
                source="Restaurant"
                target="/order"
                :_id="restaurant._id"/>
            </div>
        </div>  

</template>

<style scoped>
.orderItem-div{
    width: 80%;
    margin-top: 2%;
    padding: 1%;
    background-color: white;
    border-radius: 30px;
    color: black;
    font-weight: bold;
}

.restaurants-list{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    margin-top: 5%;
}
.restaurant-div{
    margin: 20px;
}


</style>
