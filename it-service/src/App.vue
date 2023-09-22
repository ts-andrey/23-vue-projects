<template>
  <TheHeader />
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/header/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
};
</script>

<style scoped></style>
