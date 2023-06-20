<script setup>
import NavbarClient from '../../components/NavbarClient.vue';
import Band from '../../components/Band.vue';



</script>

<template>
    <NavbarClient />
    <Band name="Suivi de commande" />
    <div class="main-div">
        <article class="animation-article">
            <div class="line1 transform"></div>
            <div class="dot1"></div>
            <div class="line2"></div>
            <div class="dot2"></div>
            <div class="line3"></div>
            <div class="dot3"></div>
            <div class="line4"></div>
            <div class="dot4"></div>
        </article>
        <article class="text-article">
            <div class="text">Commande acceptée !</div>
            <div class="text">Commande prête !</div>
            <div class="text"> Commande récupérée !</div>
            <div class="text"> Livreur arrivé !</div>
        </article>
        <div>
            <button>Phase 1</button>
            <button>Phase 2</button>
            <button>Phase 3</button>
            <button>Phase 4</button>
        </div>
    </div>
</template>

<style scoped>
.main-div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.line1 {
    margin-top: 40px;
    background-color: #D9D9D9;
    width: 20px;
    height: 50px;
    margin-left: 15px;
}
.transform{
  transition: all 2s ease;
}

.transform-active{
  background-color: #45cee0;
}

.line2, .line3, .line4 {
    margin-top: -5px;
    background-color: #D9D9D9;
    width: 20px;
    height: 100px;
    margin-left: 15px;
}

.dot1, .dot2, .dot3, .dot4 {
    background-color: #D9D9D9;
    height: 52px;
    width: 52px;
    border-radius: 50%;
    margin-top: -5px;
}

.text {
    font-size: 45px;
    margin-bottom: 70px;
}
.text-article{
    display: flex;
    flex-direction: column;
    margin-left: -100px;
    margin-top: 60px;
}

</style>
