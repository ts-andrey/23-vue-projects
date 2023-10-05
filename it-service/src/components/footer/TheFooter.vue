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
    <div class="bg"></div>
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

  padding: 30px 0;
  min-height: var(--size-footer-height);
  display: flex;
  place-items: center;
  place-content: center;
  flex-shrink: 0;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--size-footer-height) * 0.9);
}
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
  margin: 0 2px;
}

a {
  display: inline-block;
  padding: 4px 8px;
  color: inherit;
  text-decoration: none;
}

.bg {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  z-index: 1;
  background: bottom / cover no-repeat url('../../assets/images/bg/bg-header.webp');
  opacity: 40%;
}
</style>
