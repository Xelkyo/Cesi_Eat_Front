<script setup>
import NavbarRestaurant from '../../components/NavbarRestaurant.vue';
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
  role:'Restaurant'
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
        'Authorization': 'Token ' + localStorage.token
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
    <NavbarRestaurant />
    <Band name="Mon Compte"/>
    <div class="main-div">
        <article class="form-article">
            <form @submit="submitForm" class="form">
                <div class="form-div"> Nom</div>
                <input v-model="formData.lastName" type="text" name="Lname" id="Lname" required> <!--:value="UserData.lastName" -->
                <div class="form-div"> Prénom</div>
                <input v-model="formData.firstName" type="text" name="Fname" id="Fname" required>
                <div class="form-div"> Adresse e-mail</div>
                <input v-model="formData.email" type="email" name="email" id="email" required>
                <div class="form-div">Mot de passe</div>
                <input v-model="formData.password" type="password" name="pwd" id="pwd" minlength="7" required>
                <div class="form-div">Numéro de téléphone</div>
                <input v-model="formData.phone" type="phone" name="phone" id="phone" required>

                <input type="submit" value="Valider">
            </form>
        </article>
        <article>
            <router-link class="link" to="/friendRefer" custom v-slot="{ navigate }">
                <button @click="navigate" role="link" class="links">
                    Parrainez un restaurateur !
                </button>
            </router-link>
        </article>
    </div>
</template>

<style scoped>

.main-div{
    display: flex;
    align-self: flex-start;
    padding-left: 10px;
    padding-top: 10px;
    justify-content: space-around;
    width: 98%;
}

.form-article{
  width: 25%;
}

.form-div {
  text-align:left;
  color: #ECB056;
  font-family: sans-serif;
  font-size: large;
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
  width: 100%;
  will-change: transform;
  margin-top: 8px;
  align-items: flex-end;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
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
