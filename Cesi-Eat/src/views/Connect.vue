<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<body>
    <div class="mid-div">
       <img :src= "`/img/cesi_eat.png`"/> 
       <div class="bvn">Bienvenue sur Cesi_Eat</div>
       <div class="connect">Merci de vous connecter pour continuer</div>
       <router-link to="/LogIn" custom v-slot="{ navigate }">
          <button @click="navigate" role="link">
            Log In
          </button>
        </router-link>
    <router-link
      to="/Register"
      custom
      v-slot="{ navigate }"
    >
      <button
        @click="navigate"
        role="link"
      >
        Register
      </button>
    </router-link>


    </div>
</body>
</template>

<style scoped>
body {
    color: #ECB056;
    align-items: center;
    justify-content: center;
    height: 98vh;
    margin: 0;
    font-size: larger;
}


img {
    width: 50%;
    height: auto;
}

.mid-div{
    text-align: center;
}

.mid-div > * {
    margin-bottom: 10px;
}


button {

  background-color: #ECB056;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  min-height: 25px;
  min-width: 0;
  outline: none;
  padding: 14px 22px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  touch-action: manipulation;
  width: 18%;
  will-change: transform;
  margin-top: 6px;
}

button:disabled {
  pointer-events: none;
}

button:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-3px);
}

button:active {
  box-shadow: none;
  transform: translateY(0);
}
</style>
