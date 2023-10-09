<script setup>
import Navbar from "./components/Navbar.vue";
import Content from "./components/Content.vue";
import Search from "./components/Search.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const auth = computed(() => store.getters['auth/isAuthenticated']) ;
</script>

<template>
  <div class="flex-col h-screen">
    <Navbar />
    <Hero v-if="!auth" />
    <Search v-if="auth" />
    <Content v-if="auth" />
    <Footer />

    
  </div>
</template>

<style></style>
