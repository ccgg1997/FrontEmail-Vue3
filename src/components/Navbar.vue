<template>
  <div class="flex gap-2" >
    <nav class="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#/" class="flex items-center">
          <img src="../images/logo.webp" class="h-8 mr-3" alt="Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EmailSearch</span>
        </a>
        <div class="flex gap-2">
          <button
            v-if="auth"
            class="block text-white bg-red-700 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            type="button" @click="logout">
            Salir
          </button>
          <LoginButton v-else />
          <Modal v-if="auth" modalId="'defaultModal'" toggleButtonText="Ayuda" modalTitle="Busca información indexada (Zincsearch)"
            modalContent="Esta aplicación puede ser utilizada por personas que necesitan encontrar correos electrónicos antiguos, correos electrónicos que contienen información específica, o correos electrónicos que se han perdido."
            modalContent2="La aplicación funciona comparando el texto ingresado con el contenido de los correos electrónicos almacenados en el sistema. Si el texto ingresado coincide con el contenido de un correo electrónico, el correo electrónico se mostrará en la lista de resultados." />
        </div>
      </div>

    </nav>
  </div>
</template>
<script setup>
import Modal from "./general/Modal.vue";
import LoginButton from "./LoginButton.vue";
import { useStore } from "vuex";
import { computed } from 'vue';

const store = useStore();
const auth = computed(() => store.getters['auth/isAuthenticated']) ;
const logout = () => {
  store.dispatch('auth/logout');
};

</script>

