<script setup>

</script>


<template>
    <header>
        <nav class="navbar">
            <img :src="`/img/logo.png`" class="logo" alt="Cesi Eats Logo">
            <div class="Links">
                <router-link class="link" to="/mainDelivery">Commandes</router-link>
                <router-link class="link" to="/deliveryAccount">Mon Compte</router-link>
            </div>
        </nav>
    </header>
</template>
  
<style scoped>
    @import '../../src/assets/navbar.css';
</style>


