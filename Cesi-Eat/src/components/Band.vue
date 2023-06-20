<script setup>
  const props = defineProps(['name'])
</script>

<template>
    <div class="Band"><div class="pa-2">{{ name }}</div></div>
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

.pa-2{
  padding-left: 15px;
}
</style>
