<template>
  <section>
    <h1>We have some repaired and used items for sale. Check out our stock!</h1>

    <div class="container">
      <h2>Laptops:</h2>
      <ShopList :data="laptops" />
    </div>

    <div class="container">
      <h2>Notebooks:</h2>
      <ShopList :data="notbooks" />
    </div>

    <div class="container">
      <h2>PC Components:</h2>
      <ShopList :data="pcComponents" />
    </div>

    <div class="container">
      <h2>Phones:</h2>
      <ShopList :data="phones" />
    </div>
  </section>
  <div class="bg"></div>
</template>

<script>
import ShopList from './ShopList.vue';

export default {
  components: { ShopList },
  computed: {
    laptops() {
      const data = this.$store.getters['shop/getLaptops'];
      return data;
    },
    notbooks() {
      const data = this.$store.getters['shop/getNotebooks'];
      return data;
    },
    pcComponents() {
      const data = this.$store.getters['shop/getPCComponents'];
      return data;
    },
    phones() {
      const data = this.$store.getters['shop/getPhones'];
      return data;
    },
  },
};
</script>

<style scoped>
section {
  position: relative;
  z-index: 10;

  max-width: 1200px;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  z-index: 1;
  background: center / cover no-repeat url('../../assets/images/bg/bg-store.webp');
  opacity: 5%;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}

h2 {
  margin-top: 60px;
  margin-bottom: -55px;
  text-align: center;
  color: var(--color-main--attract);
  font-size: 30px;
}
.container {
  margin-bottom: 40px;
}

.container:last-of-type {
  margin-bottom: 0;
}

@media screen and (max-width: 1200px) {
  h1 {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: var(--size-font-header-main_media-lowest);
  }

  h2 {
    margin-top: 30px;
    margin-bottom: -45px;
    font-size: var(--size-font-header-main_media-lowest);
  }
}
</style>
