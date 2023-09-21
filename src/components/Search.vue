<template>
    <form class="flex items-center p-3"  @submit.prevent="submitForm" >
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type and Search ..."
              required
              v-model="inputText"
            />
          </div>
          <button
            type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
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
    const inputOld = ref("");
    const emailsJson = ref("");

    async function submitForm() {
        if(inputOld.value !== inputText.value){
            inputOld.value = inputText.value;
            
            // Llama a la función 'cargarEmails' del módulo 'emails' de forma asíncrona
            await store.dispatch('emails/cargarEmails',inputText.value);
            
            // Una vez que se carguen los emails, los convertimos a un string JSON
            const emailsArray = store.getters['emails/Emails'];
            emailsJson.value = JSON.stringify(emailsArray, null, 2); // Formatea con 2 espacios
            console.log("datos input: " + inputText.value);
            console.log("datos api: " + emailsJson.value+" "+emailsArray.length);
            emailsJson.value = "";

            return;
        }
        console.log("data inputOld: " + inputOld.value);
    }
</script>