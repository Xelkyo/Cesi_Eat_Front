<script setup>

</script>

<template>
    <img :src="`/img/cesi_eat.png`" />
    <div class="text-div">
        <div>Oups... 404</div>
        <div>Page Inexistante, veuillez retourner sur une page existante !</div>
    </div>
    <router-link to="/" custom v-slot="{ navigate }">
        <button @click="navigate" role="link" class="links">
          Retour
        </button>
      </router-link>
</template>

<style scoped>
    .text-div{
        color: #ECB056;
        font-size: 40px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 2%;
    }

    img {
  width: 25%;
  margin-top: 2%;
  height: auto;
  align-self: center;
}

.links{
    margin-top: 2%;
}


</style>
