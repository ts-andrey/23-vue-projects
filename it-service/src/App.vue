<template>
  <TheHeader />
  <main class="main">
    <router-view></router-view>
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from './components/header/TheHeader.vue';
import TheFooter from './components/footer/TheFooter.vue';
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
.main {
  padding: 2rem 0 2rem;
  display: flex;
  justify-content: center;
  flex-grow: 1;
}
</style>
