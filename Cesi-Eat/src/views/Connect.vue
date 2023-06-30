<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body class="body">
    <div class="mid-div">
      <img :src="`/img/cesi_eat.png`" />
      <div class="bvn">Bienvenue sur Cesi_Eat</div>
      <div class="connect">Merci de vous connecter pour continuer</div>
      <router-link to="/logIn" custom v-slot="{ navigate }">
        <button @click="navigate" role="link">
          Log In
        </button>
      </router-link>
      <router-link to="/Register" custom v-slot="{ navigate }">
        <button @click="navigate" role="link">
          Register
        </button>
      </router-link>
    </div>
  </body>
</template>

<style scoped>
.tempo {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
}

.body {
  color: #ECB056;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 98vh;
  margin: 0;
  font-size: larger;
}


img {
  width: 50%;
  height: auto;
}

.mid-div {
  text-align: center;
}

.mid-div>* {
  margin-bottom: 10px;
}
</style>
