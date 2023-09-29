<template>
  <footer class="footer">
    <div class="logo">
      <base-logo />
    </div>
    <nav class="nav">
      <ul>
        <li v-for="link in linksArr">
          <router-link :to="link.link">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
import linksData from '../../data/linksData';
export default {
  data() {
    return {
      linksArr: linksData,
    };
  },
};
</script>

<style scoped>
.footer {
  position: relative;
  z-index: 10;

  height: var(--size-footer-height);
  display: flex;
  place-items: center;
  place-content: center;
  flex-shrink: 0;
}

.logo {
  height: calc(var(--size-footer-height) * 0.95);
  display: flex;
}
.nav {
  display: flex;
  justify-content: center;
}

.nav ul {
  display: flex;
  list-style: none;
}

.nav li {
  margin: 0 2px;
}

a {
  display: inline-block;
  padding: 4px 8px;
  color: inherit;
  text-decoration: none;
}
</style>
