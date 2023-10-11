<template>
  <li class="shopItem">
    <h3 class="title">{{ model }}</h3>
    <img :src="image" alt="" class="img" />
    <p class="descr">{{ description }}</p>
    <p class="price">Price: {{ price }}$</p>
  </li>
</template>

<script>
export default {
  props: ['model', 'image', 'description', 'price'],
};
</script>

<style scoped>
li {
  padding: 10px 20px;
  display: grid;
  justify-items: center;
  align-items: center;

  border: 1px dotted var(--color-main--light);
  border-radius: 5px;
}

.img {
  margin: 20px 0;
  height: 130px;
  width: fit-content;
  display: flex;

  border-radius: 8px;
}

.descr {
  line-height: 160%;
}

.price {
  margin-top: 20px;
  font-size: 20px;
  color: var(--color-main--attract);
}
</style>
