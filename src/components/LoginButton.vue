<script setup>
import { decodeCredential } from 'vue3-google-login'
import { useStore } from 'vuex';
const store = useStore();

// This callback will be triggered when the user selects or login to
// his Google account from the popup
const callback = (response) => {
    const { name, email } = decodeCredential(response.credential)
    store.commit('auth/SET_USER_DATA', {
        nombre: name,
        correo: email
    });
    store.commit('auth/SET_AUTH', true);
}
</script>

<template>
    <div>
        <GoogleLogin :callback="callback" />
    </div>
</template>
