<template>
  <ul>
    <ShopItem v-for="el in data" :="el" />
  </ul>
</template>

<script>
import ShopItem from './ShopItem.vue';
export default {
  components: { ShopItem },
  props: ['data'],
};
</script>

<style scoped>
ul {
  padding: 90px 40px 40px 40px;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: center;
  gap: 20px;

  border-top: 5px solid var(--color-main--light);
  border-bottom: 5px solid var(--color-main--light);
  border-left: 2px ridge var(--color-main--light);
  border-right: 2px ridge var(--color-main--light);
  border-radius: 50px;
}
</style>
