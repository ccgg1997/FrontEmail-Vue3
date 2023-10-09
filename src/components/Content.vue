<template>
  <div class="flex flex-col md:flex-row w-full pl-5 pr-5 justify-center">
    <div v-if="!emailsArrayEmpty" class="flex flex-col gap-y-3 w-full p-1">
      <Tablefilter :columns="columns" :rows="products" />
    </div>
    <div class="flex flex-col mt-16 mb-28 justify-center"  v-if="emailsArrayEmpty" >
      <img src="../images/noresults.webp" alt="noresults" class="rounded-lg w-350 h-350 justify-center "/>
      <p class="flex font-bold justify-center ">SIN RESULTADOS DE BUSQUEDA</p>
    </div>
 


  </div>
</template>

<script setup>
import Tablefilter from "./general/Tablefilter.vue";
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const emailsArray = computed(() => store.getters['emails/Emails'] ?? []);

const headers = computed(() => {
  if (emailsArray.value !== null && emailsArray.value.length > 0) {
    return Object.keys(emailsArray.value[0]);
  }
  return [];
});

const emailsArrayEmpty = computed(() => emailsArray.value === null || emailsArray.value.length === 0);
const columns = headers;
const products = emailsArray;
</script>

