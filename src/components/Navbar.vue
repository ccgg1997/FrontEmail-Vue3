<template>
  <div class="flex">
    <nav
      class="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
    >
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#/" class="flex items-center">
          <img src="../images/logo.webp" class="h-8 mr-3" alt="Logo" />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >EmailSearch</span
          >
        </a>

        <Modal
          modalId="defaultModal"
          toggleButtonText="Ayuda"
          modalTitle="Busca información indexada (Zincsearch)"
          modalContent="Esta aplicación puede ser utilizada por personas que necesitan encontrar correos electrónicos antiguos, correos electrónicos que contienen información específica, o correos electrónicos que se han perdido."
          modalContent2="La aplicación funciona comparando el texto ingresado con el contenido de los correos electrónicos almacenados en el sistema. Si el texto ingresado coincide con el contenido de un correo electrónico, el correo electrónico se mostrará en la lista de resultados."
        />
      </div>
      
    </nav>
  </div>
</template>
<script>
import Modal from "./general/Modal.vue";
export default {
  components: {
    Modal
  },
};
</script>
