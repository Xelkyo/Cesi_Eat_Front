<script setup>

</script>

<template>
<footer>
    <router-link class="link" to="/componentsDownload">Télécharger nos composants</router-link>
</footer>
</template>

<style scoped>
.link{
    text-decoration: none;
    color:#ECB056;
    margin-right: 2%;
}

.link:hover {
    text-decoration: underline;
}

footer{
    margin-top: 5%;
    margin-bottom: 2%;
    width: 100%;
    display: flex;
    justify-content:right
}

</style>
