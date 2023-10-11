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
</template>

<script>
import ShopList from './ShopList.vue';

import laptopsData from '../../data/store/laptopsData';
import notebooksData from '../../data/store/notebookData';
import pcComponentsData from '../../data/store/pcComponentsData';
import phonesData from '../../data/store/phoneData';

export default {
  components: { ShopList },
  data() {
    return {
      laptops: laptopsData,
      notbooks: notebooksData,
      pcComponents: pcComponentsData,
      phones: phonesData,
    };
  },
};
</script>

<style scoped>
section {
  padding: var(--padding-section-default);
  max-width: 1200px;
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
</style>
