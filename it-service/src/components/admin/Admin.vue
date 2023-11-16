<template>
  <section>
    <h1>Administrative Sections</h1>
    <BaseNav :linksData="linksData" />
    <router-view></router-view>
  </section>
  <div class="bg"></div>
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
  position: relative;
  z-index: 10;

  width: 100%;
  padding-top: 10px;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(100vw - var(--size-scrollbar));
  z-index: 1;
  background: center / cover no-repeat url('../../assets/images/bg/bg-admin.webp');
  opacity: 8%;
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
  section {
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
