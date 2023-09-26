<template>
  <header class="header">
    <nav class="nav">
      <ul>
        <li v-for="link in linksArr">
          <router-link :to="link.link">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
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
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 110%;
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
  margin: 0 5px;
  display: flex;
  border: 1px solid #000;
  border-radius: 5px;

  transition: all 0.3s;
}

.nav li:hover {
  color: #fff;
  background-color: #000;
}

a {
  display: inline-block;
  padding: 6px 12px;
  color: inherit;
  text-decoration: none;
}
</style>
