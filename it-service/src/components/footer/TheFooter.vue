<template>
  <footer class="footer">
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
  height: 5rem;
  display: flex;
  place-items: center;
  place-content: center;
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
