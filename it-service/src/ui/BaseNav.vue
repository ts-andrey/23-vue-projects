<template>
  <nav class="nav">
    <ul>
      <li v-for="link in linksData">
        <router-link :to="link.link">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['linksData'],
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
