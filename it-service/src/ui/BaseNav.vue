<template>
  <nav class="nav">
    <ul>
      <li v-for="link in activeLinks">
        <router-link :to="link.link">{{ link.name }}</router-link>
      </li>
      <li v-if="isLoggedIn && isHeader">
        <BaseButton @click="logout">Logout</BaseButton>
      </li>
    </ul>
  </nav>
</template>

<script>
import { logout } from '../util/helpFuncs';
import BaseButton from './BaseButton.vue';

export default {
  props: ['linksData', 'isHeader'],
  components: {
    BaseButton,
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/getUserStatus'];
    },
    activeLinks() {
      let linksArr = this.linksData.filter(link => !link.isProtected || (link.isProtected && this.isLoggedIn));
      if (this.isLoggedIn) {
        linksArr = linksArr.filter(link => !link.isConditional);
      }
      return linksArr;
    },
  },
  methods: {
    logout() {
      logout();
      this.$store.dispatch('auth/logout');
      this.$router.push('/auth');
    },
  },
};
</script>

<style scoped>
.nav {
  position: relative;
  z-index: 10;

  display: flex;
  justify-content: center;
}

.nav ul {
  display: flex;
  list-style: none;
}

.nav li {
  margin: 0 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px dotted var(--color-main--light);
  border-radius: 5px;

  transition: all var(--time-animation-duration);
}

.nav li:hover {
  cursor: pointer;
  color: var(--color-main--dark);
  background-color: var(--color-main--light);
}

a {
  text-decoration: none;
  color: inherit;

  padding: 6px 12px;
  display: inline-block;

  font-weight: 500;
  letter-spacing: 0.5px;
}
</style>
