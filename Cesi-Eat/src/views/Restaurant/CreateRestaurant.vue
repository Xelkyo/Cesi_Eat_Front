<script setup>
import Band from '../../components/Band.vue';
import NavbarRestaurant from '../../components/NavbarRestaurant.vue';
import router from "../../router/index.js";
import { saveIdUser } from '../../store/IdUser.js'

const SaveID = saveIdUser()

const formData = {
    address: '',
    name: '',
    image: '',
    restaurantmanagerId: SaveID._id
};

async function submitForm(event) {
    event.preventDefault();
    console.log(formData)
    try {
        const response = await fetch(import.meta.env.VITE_ENDPOINT_URL+'user/restaurant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.token
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            console.log('Le formulaire a été soumis avec succès !');
            router.push({path:'/mainRestaurant'})
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
    <Band name="Création de restaurant"/>
    <div class="main-div">
        <form @submit="submitForm" class="form">
            <div class="form">Adresse de l'établissement</div>
            <textarea v-model="formData.address" name="Address" id="address" placeholder="12 rue Magellan 31670 Labège"
                required></textarea>

            <div class="form"> Nom de l'établissement</div>
            <input v-model="formData.name" type="text" name="Cname" id="Cname"
                placeholder="Exemple: Chez Fan Fan - 58, rue de la République" required>

            <div class="form"> Image au format 1:1 (url)</div>
            <input v-model="formData.image" type="text" name="img" id="img" required>

            <input type="submit" value="Valider">
        </form>
    </div>

</template>

<style scoped>
.main-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-top: 5%;
}

input {
  width: 60%;
  padding: 8px;
  margin-bottom: 3%;

}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  max-height: 75%;
}

input[type="submit"] {
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
  width: 63%;
  will-change: transform;
  margin-top: 8px;
  align-items: flex-end;
}

.form {
  text-align: center;
  color: #ECB056;
  font-family: sans-serif;
  font-size: large;
  margin-bottom: 5px;
}

textarea {
  min-width: 63%;
  max-width: 63%;
  margin-bottom: 3%;
}
</style>
