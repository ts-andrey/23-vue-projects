<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="title">
      </div>
      <div class="product__text">
        <h3>{{ title }}</h3>
        <h4>{{ price }}</h4>
        <p>{{ description }}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'price', 'description'],
}
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  widows: 10rem;
  object-fit: cover;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}
</style>