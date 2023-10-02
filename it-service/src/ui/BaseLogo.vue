<template>
  <router-link to="/" class="link">
    <img src="../assets/logo.png" alt="Logo" />
  </router-link>
</template>

<script></script>

<style scoped>
a {
  position: relative;
  z-index: 10;

  height: inherit;

  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: inherit;
  max-height: 200px;
  display: flex;
  border-radius: 10px;
}
</style>
