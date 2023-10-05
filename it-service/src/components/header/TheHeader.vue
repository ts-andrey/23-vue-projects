<template>
  <header class="header">
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
  </header>
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
.header {
  position: sticky;
  z-index: 10;

  height: var(--size-header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  font-size: 22px;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--size-header-height) * 0.95);
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  z-index: 1;
  background: center / cover no-repeat url('../../assets/images/bg/bg-header.webp');
  opacity: 40%;
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
  margin: 0 5px;
  display: flex;
  border: 1px dotted var(--color-main--light);
  border-radius: 5px;

  transition: all var(--time-animation-duration);
}

.nav li:hover {
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
