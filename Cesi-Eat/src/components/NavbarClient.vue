<script setup>
import {useCartStore} from '../store/cart.js'

const cartStore = useCartStore()

</script>


<template>
    <header>
        <nav class="navbar">
            <img :src="`/img/logo.png`" class="logo" alt="Cesi Eats Logo">
            <div class="Links">
                <router-link class="link" to="/mainClient">Accueil</router-link>
                <router-link class="link" to="/register">Travailler avec nous</router-link>
                <router-link class="link" to="/orderFollow">Suivi de commande</router-link>
                <router-link class="link" to="/clientAccount">Mon Compte</router-link>
                <router-link class="link" to="/basketClient" custom v-slot="{ navigate }">
                <button @click="navigate" role="link" class="links">
                    Panier ({{cartStore.count}})
                </button>
            </router-link>
            </div>
        </nav>
    </header>
</template>
  
<style scoped>
    @import '../../src/assets/navbar.css';
</style>


