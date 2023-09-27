<template>
  <li class="serviceItem">
    <base-card>
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
      <ul v-if="childrenData">
        <li v-for="child in childrenData">
          <h4>{{ child.name }}</h4>
          <span>{{ child.icon }}</span>
        </li>
      </ul>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['name', 'description', 'icon', 'childrenData'],
};
</script>

<style scoped>

</style>
