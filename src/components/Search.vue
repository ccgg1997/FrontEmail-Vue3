<template>
  <form class="flex items-center pt-3 pb-3 pl-6 pr-24" @submit.prevent="submitForm">
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">

      <input type="text" id="simple-search"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Type and Search ..." required v-model="inputText" />
    </div>
    <button type="submit"
      class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
      <span class="sr-only">Search</span>
    </button>
  </form>
</template>
<script setup>
import { ref} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const inputText = ref("");
const cache = ref({});

async function submitForm() {
  //console.log(JSON.stringify(cache))
  if (!cache.value[inputText.value]) {
    // Si no está en el caché, carga los emails.
    await store.dispatch('emails/cargarEmails', inputText.value);
    const emailsArrayValue = store.getters['emails/Emails'] ?? [];
    cache.value[inputText.value] = JSON.stringify(emailsArrayValue);
  }
  else {
    // Usa los datos del caché para llenar el estado global.
    const cachedEmails = JSON.parse(cache.value[inputText.value]);
    store.commit('emails/LlenarEmails', cachedEmails);
    inputText.value = "";
  }


}
</script>