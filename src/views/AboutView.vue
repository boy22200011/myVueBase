<template>
  <section aria-labelledby="main-heading">
    <h1 id="main-heading">歡迎來到無障礙網站</h1>
    <p>這是一個符合 WCAG AA 標準的範例。</p>
    <button @click="handleClick" aria-live="polite">點擊我</button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainContent',
  methods: {
    handleClick() {
      alert('你點擊了按鈕！')
    },
  },
})
</script>
