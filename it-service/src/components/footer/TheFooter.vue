<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/phones">Phones</router-link>
      </li>
      <li>
        <router-link to="/computers">Computers</router-link>
      </li>
      <li>
        <router-link to="/service">Service</router-link>
      </li>
      <li>
        <router-link to="/websites">Websites</router-link>
      </li>
    </ul>
  </nav>
</template>

<script></script>

<style scoped>
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
