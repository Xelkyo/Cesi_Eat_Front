<script setup>

</script>

<template>
  <div class="main-div">
    <img :src="`/img/cesi_eat.png`" />
    <div class="text">
      Veuillez entrer vos informations
    </div>
    <form action="" method="post" class="form">
      <div class="form"> Nom</div>
      <input type="text" name="Lname" id="Lname" required>
      <div class="form"> Prénom</div>
      <input type="text" name="Fname" id="Fname" required>
      <div class="form"> Adresse e-mail</div>
      <input type="email" name="email" id="email" required>
      <div class="form">Mot de passe</div>
      <input type="password" name="pwd" id="pwd" required>
      <div class="form">Numéro de téléphone</div>
      <input type="phone" name="phone" id="phone" required>
      <div class="form">Véhicule de livraison</div>
      <input list ="vehicles" name="vehicle" id="vehicle" required>
      <datalist id="vehicles">
      <option value="Vélo"></option>
      <option value="Scooter"></option>
      <option value="Moto"></option>
      <option value="Voiture"></option>
      </datalist>
      <input type="submit" value="Valider">
    </form>
  </div>
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


.main-div {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

input {
width: 60%;
padding: 8px;
margin-bottom: 10px;
}

form{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 75%;
max-height: 75%;
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
width: 63%;
will-change: transform;
margin-top: 8px;
align-items: flex-end;
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
align-items: flex-end;
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
color: #ECB056;
font-size: large;
}

img {
width: 50%;
height: auto;
}

.form {
text-align: center;
color: #ECB056;
font-family: sans-serif;
font-size: large;
}

textarea{
min-width: 63%;
max-width: 63%;
}
</style>
