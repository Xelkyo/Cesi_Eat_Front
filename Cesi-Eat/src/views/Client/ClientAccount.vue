<script setup>
import NavbarClient from '../../components/NavbarClient.vue';
import Band from '../../components/Band.vue';

import { SHA256 } from 'crypto-js';

const formData = {
  email: '',
  address: '',
  birth: '',
  lastName: '',
  firstName: '',
  password: '',
  phone: '',
  role:'Client'
};

async function getUserData() {
  try {
    const UserData = await fetch(import.meta.env.VITE_ENDPOINT_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.token
      },
    });
    if (UserData.ok) {
      console.log(UserData);
    } else {
      console.log('Une erreur s\'est produite lors de la récupération des données utilisateurs');
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la requête GET :', error);
  }

  return UserData;

}
const UserData = getUserData()


async function submitForm(event) {
  formData.password = SHA256(formData.password).toString();
  event.preventDefault(); // Empêche le comportement par défaut du formulaire
  // Accédez aux données du formulaire via this.formData
  console.log('Données du formulaire:', formData);

  try {
    const response = await fetch(import.meta.env.VITE_ENDPOINT_URL, {
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
    <NavbarClient />
    <Band name="Mon Compte"/>
    <div class="main-div">
        <article>
            <form @submit="submitForm" class="form">
                <div class="form"> Nom</div>
                <input v-model="formData.lastName" type="text" name="Lname" id="Lname" required> <!--:value="UserData.lastName" -->
                <div class="form"> Prénom</div>
                <input v-model="formData.firstName" type="text" name="Fname" id="Fname" required>
                <div class="form"> Adresse e-mail</div>
                <input v-model="formData.email" type="email" name="email" id="email" required>
                <div class="form">Mot de passe</div>
                <input v-model="formData.password" type="password" name="pwd" id="pwd" minlength="7" required>
                <div class="form">Adresse</div>
                <textarea v-model="formData.address" name="Address" id="address" required></textarea>
                <div class="form">Numéro de téléphone</div>
                <input v-model="formData.phone" type="phone" name="phone" id="phone" required>
                <div class="form">Date de naissance (facultatif)</div>
                <input v-model="formData.birth" type="date" name="birth" id="birth">

                <input type="submit" value="Valider">
            </form>
        </article>
        <article>
            <router-link class="link" to="/friendRefer" custom v-slot="{ navigate }">
                <button @click="navigate" role="link" class="links">
                    Parrainer un ami !
                </button>
            </router-link>
        </article>
        <article>
            <div class="history">[Historique ici]</div>
        </article>
    </div>
</template>

<style scoped>
.Band {
    margin-top: 10px;
    background-color: #ECB056;
    width: 99%;
    height: 17%;
    font-size: 58px;
    color: black;
    padding-top: 15px;
    padding-left: 30px;
}

.history{
    background-color:#ECB056;
    width: 300px;
    height: 500px;
    padding-right: 25px;
    text-align: center;
    font-size: 20px;
    margin-top:20px;
}   

.main-div{
    display: flex;
    align-self: flex-start;
    padding-left: 10px;
    padding-top: 10px;
    justify-content: space-between;
    width: 98%;
}

.form {
  text-align:left;
  color: #ECB056;
  font-family: sans-serif;
  font-size: large;
}

textarea{
  min-width: 105%;
  max-width: 105%;
}

input[type="submit"]{
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
  width: 70%;
  will-change: transform;
  margin-top: 8px;
  align-items: flex-end;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

form{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 25px;
}

.links{
    width: 300px;
    min-height: 100px;
    font-size: larger;
    margin-top: 25px;
}

</style>
