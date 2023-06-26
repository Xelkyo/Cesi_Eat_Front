<script setup>
import NavbarClient from '../components/NavbarClient.vue';
import basketClient from '../views/Client/BasketClient.vue'


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
        <div class="ex-basket"><basketClient/></div>
        

        </div>
</template>

<style scoped>
.component-button{
    margin-top: 5%;
    margin-bottom: 8px;
}

.basket-component{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
}

.ex-basket{
    width: 1000px;
}

</style>
