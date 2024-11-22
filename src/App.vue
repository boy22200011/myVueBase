<script setup lang="ts">
import { RouterView } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'))
const Header = defineAsyncComponent(() => import('./components/Header.vue'))
</script>

<template>
  <Header />
  <main role="主區域">
    <router-view />
  </main>
  <Footer />
</template>
