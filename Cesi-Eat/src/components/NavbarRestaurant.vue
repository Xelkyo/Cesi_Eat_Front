<script setup>

</script>


<template>
    <header>
        <nav class="navbar">
            <img :src="`/img/logo.png`" class="logo" alt="Cesi Eats Logo">
            <div class="Links">
                <router-link class="link" to="/mainRestaurant">Accueil</router-link>
                <router-link class="link" to="/orderRestaurant">Suivi de commande</router-link>
                <router-link class="link" to="/restaurantAccount">Mon Compte</router-link>
            </div>
        </nav>
    </header>
</template>
  
<style scoped>
    @import '../../src/assets/navbar.css';
</style>


