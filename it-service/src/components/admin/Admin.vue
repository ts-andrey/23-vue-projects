<template>
  <section>
    <h1>Administrative Sections</h1>
    <BaseNav :linksData="linksData" />
    <router-view></router-view>
  </section>
</template>

<script>
import BaseNav from '../../ui/BaseNav.vue';
import adminLinksData from '../../data/adminLinksData';

export default {
  components: {
    BaseNav,
  },
  data() {
    return {
      linksData: adminLinksData,
    };
  },
};
</script>

<style scoped>
section {
  padding-top: 10px;
}

h1,
h2 {
  margin-bottom: 10px;
  text-align: center;
  color: var(--color-main--attract);
}

h1 {
  font-size: var(--size-font-header-main);
}

h2 {
  font-size: var(--size-font-header-second);
}

nav {
  margin-bottom: 30px;
  color: var(--color-main--attract);
}
</style>
