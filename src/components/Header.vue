<script lang="ts" setup>
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
defineComponent({
  name: 'Header',
})
</script>

<template>
  <header role="banner">
    <nav aria-label="主要導航">
      <ul class="menu">
        <li><router-link to="/" aria-current="page">首頁</router-link></li>
        <li><router-link to="/about" aria-current="page">關於我們</router-link></li>
        <li><router-link to="/contact" aria-current="page">聯絡我們</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
</style>
