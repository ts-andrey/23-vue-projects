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

<style>
.main {
  position: relative;
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

section {
  padding: var(--padding-section-default);
  display: grid;
  place-items: center;
}

@media screen and (max-width: 480px) {
  section {
    padding: var(--padding-section-media_lowest);
  }
}
</style>
