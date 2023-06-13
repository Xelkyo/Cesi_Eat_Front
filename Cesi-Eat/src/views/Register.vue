<script setup>

</script>

<template>
    <body>
        <div class="main-div">
            <img :src="`/img/cesi_eat.png`" />
            <div class="text">
                Quel type de compte voulez vous créer ?
            </div>
            <router-link to="/registerClient" custom v-slot="{ navigate }">
                <button @click="navigate" role="link" class="links">
                    Client
                </button>
            </router-link>
            <router-link to="/registerDelivery" custom v-slot="{ navigate }">
                <button @click="navigate" role="link" class="links">
                    Livreur
                </button>
            </router-link>
            <router-link to="/registerRestaurant" custom v-slot="{ navigate }">
                <button @click="navigate" role="link" class="links">
                    Restaurant
                </button>
            </router-link>


        </div>
    </body>
</template>

<style scoped>
body {
    align-content: center;
    justify-content: center;
    background-color: #272625;
    color: #ECB056;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    font-size: medium;
    font-family: sans-serif
}

.links{
    display: flex;
    flex-direction: column;
    text-align: center;
}

.main-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 35%;
    will-change: transform;
    margin-top: 6px;
    align-items: center;
}

button:disabled {
    pointer-events: none;
}

button:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
}

button:active {
    box-shadow: none;
    transform: translateY(0);
}

.text {
    margin-bottom: 15px;
    align-self: center;
}

img {
    width: 50%;
    height: auto;
}


</style>
