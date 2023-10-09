<template>
  <li class="shopItem">
    <h3 class="title">{{ model }}</h3>
    <img :src="image" alt="" class="img" />
    <p class="descr">{{ description }}</p>
    <p class="price">{{ price }}</p>
  </li>
</template>

<script>
export default {
  props: ['model', 'image', 'description', 'price'],
};
</script>

<style scoped>
li {
  display: flex;
  flex-flow: column;
}
</style>
