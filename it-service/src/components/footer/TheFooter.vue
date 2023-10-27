<template>
  <footer class="footer">
    <div class="wrapper">
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
    </div>
    <div class="bg"></div>
    <p class="copyright">&copy Copyright by Andrei Tsakunou, 2023</p>
  </footer>
</template>

<script>
import linksData from '../../data/linksData';
export default {
  computed: {
    linksArr() {
      const links = linksData.filter(link => !link.isProtected && !link.isConditional);
      return links;
    },
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
  flex-direction: column;
  place-items: center;
  place-content: center;

  flex-shrink: 0;
}

.wrapper {
  position: relative;
  z-index: 10;

  display: flex;
  place-items: center;
  place-content: center;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--size-footer-height) * 0.9);
}
.nav {
  display: flex;
  justify-content: center;
}

.nav ul {
  display: flex;
  list-style: none;
  gap: 10px;
}

.nav li {
  border: 1px dotted var(--color-main--light);
  border-radius: 5px;
}
.nav li:hover {
  border: 1px dotted var(--color-main--attract);
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
  user-select: none;
  pointer-events: none;
}

.copyright {
  position: relative;
  z-index: 10;
  padding: 0 10px;

  margin-top: 20px;

  text-align: center;
  font-size: 20px;

  color: var(--color-main--attract);
}

@media screen and (max-width: 600px) {
  .nav ul {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 480px) {
  .footer {
    flex-direction: column;
  }
  .nav ul {
    padding-left: 10px;
    flex-wrap: wrap;
    gap: 20px 15px;
  }
}
</style>
