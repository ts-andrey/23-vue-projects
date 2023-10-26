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
import { checkSession } from '../../util/helpFuncs';

export default {
  components: {
    BaseNav,
  },
  data() {
    return {
      linksData: adminLinksData,
    };
  },
  beforeCreate() {
    const sessionData = checkSession();
    if (sessionData.isValid) {
      this.$store.dispatch('auth/login', sessionData.data);
    } else {
      this.$store.dispatch('auth/logout');
    }

    const isLoggedIn = this.$store.getters['auth/getUserStatus'];
    if (!isLoggedIn) {
      this.$router.push('/auth');
    }
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

@media screen and (max-width: 480px) {
  section{
    display: grid;
    place-items: center;
    place-content: center;
  }
  
  h1 {
    font-size: var(--size-font-header-main_media-lowest);
    margin-bottom: 20px;
  }

  nav {
    margin-bottom: 20px;
    color: var(--color-main--attract);
  }
}
</style>
