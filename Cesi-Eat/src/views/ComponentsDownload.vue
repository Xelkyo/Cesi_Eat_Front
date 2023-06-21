<script setup>
import NavbarClient from '../components/NavbarClient.vue';


</script>

<template>
    <form action="https://www.npmjs.com/package/navbar-fisea4-paa" method="get" target="_blank">
        <button type="submit" class="component-button">Voici notre composant Navbar</button>
    </form>
        <div>Exemple ci-dessous</div>
        <NavbarClient />

        <div class="basket-component">
            <form action="https://www.npmjs.com/package/basket-fisea4-paa" method="get" target="_blank">
        <button type="submit" class="component-button">Voici notre composant Panier client</button>
    </form>
        <div>Exemple ci-dessous</div>
        
        </div>
</template>

<style scoped>
.component-button{
    margin-top: 4%;
    margin-bottom: 8px;
}

.basket-component{
    display: flex;
    width: 100%;
    
}

</style>
