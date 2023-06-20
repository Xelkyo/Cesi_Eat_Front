<script setup>
import Band from '../../components/Band.vue';
import NavbarRestaurant from '../../components/NavbarRestaurant.vue';
import { restaurants } from '../../data/restaurants_fast-food.json'
import RestaurantItem from '../../components/RestaurantItem.vue'

</script>

<template>
    <NavbarRestaurant/>
    <Band name="Vos Restaurants" />
    <div class="restaurants-list">
        <div v-for="restaurant in restaurants" :key="restaurant.id" class="restaurant-div">
                <RestaurantItem 
                :name="restaurant.name" 
                :img="restaurant.img" />
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
