<script setup>
import { SHA256 } from 'crypto-js';

const formData = {
  email: '',
  password: '',
  role: ''
};

async function submitForm(event) {
  formData.password = SHA256(formData.password).toString();
  event.preventDefault(); // Empêche le comportement par défaut du formulaire
  // Accédez aux données du formulaire via this.formData
  console.log('Données du formulaire:', formData);

  try {
    const response = await fetch(import.meta.env.VITE_ENDPOINT_URL+"user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        mode: 'no-cors'
      },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      console.log('Le formulaire a été soumis avec succès !');
    } else {
      console.log('Une erreur s\'est produite lors de la soumission du formulaire.');
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la requête POST :', error);
  }

}
</script>

<template>
  <body>
    <div class="main-div">
      <img :src="`/img/cesi_eat.png`" />
      <div class="text">
        Veuillez entrer vos informations
      </div>
      <form @submit="submitForm" class="form">
        <div class="form"> adresse e-mail</div>
        <input v-model="formData.email" type="email" name="email" id="email" required>
        <div class="form">Mot de passe</div>
        <input v-model="formData.password" type="password" name="pwd" id="pwd" required>
        <div>
          <input v-model="formData.role" type="radio" id="Client" name="role" value="Client" required>
          <label for="Client">Client</label>
          <input v-model="formData.role" type="radio" id="Delivery" name="role" value="Delivery" required>
          <label for="Delivery">Livreur</label>
          <input v-model="formData.role" type="radio" id="Restaurant" name="role" value="Restaurant" required>
          <label for="Restaurant">Restaurateur</label>
        </div>

        <button type="submit">Submit</button>
      </form>

      <router-link class="link" to="/register">Vous n'avez pas de compte ? Cliquez ici pour le créer</router-link>
    </div>

  </body>
</template>

<style scoped>
body {

  background-color: #272625;
  color: #ECB056;
  align-items: center;
  justify-content: center;
  height: 98vh;
  margin: 0;
  font-size: medium;
  font-family: sans-serif
}


.link{
  margin-top: 25px;
    color:#ECB056;
    text-align: center;
}

input[type="email"],
input[type="password"] {
  width: 40%;
  padding: 8px;
  margin-bottom: 10px;
}

input[type="radio"]{
  margin-top: 15px;
  margin-bottom: 20px;
}

button {
  width: 35%;
}

.text {
  margin-bottom: 15px;
  align-self: center;
}

img {
  width: 50%;
  height: auto;
  align-self: center;
}

.form {
  text-align: center;
}

.main-div{
  display: flex;
  justify-content: center;
  flex-direction: column;
}

</style>
