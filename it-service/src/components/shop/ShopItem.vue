<template>
  <li class="shopItem">
    <div @click="toggleItem()" class="general-info">
      <h3 class="title">{{ name }}</h3>
      <img :src="image" alt="" class="img" />
      <p class="descr">{{ description }}</p>
      <p class="price">Price: {{ price }}$</p>
    </div>
    <div v-if="isDataSpread && isAuthenticated" class="more-info">
      <div class="info">
        <div>Date:</div>
        <div>{{ date }}</div>
      </div>
      <div class="info">
        <div>Type:</div>
        <div>{{ type }}</div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['type', 'name', 'description', 'price', 'image', 'date', 'id', 'isSpread'],
  data() {
    return {
      isDataSpread: this.isSpread,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/getUserStatus'];
    },
  },
  methods: {
    toggleItem() {
      this.isDataSpread = !this.isDataSpread;
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  flex-flow: column;
  padding: 10px 20px;
  border: 1px dotted var(--color-main--light);
  border-radius: 5px;
}

.general-info {
  flex-grow: 1;
  display: grid;
  justify-items: center;
  align-items: center;
}
.general-info:hover {
  cursor: pointer;
}

.img {
  margin: 20px 0;
  height: 130px;
  width: fit-content;
  display: flex;

  border-radius: 8px;
}

.title {
  text-align: center;
}

.descr {
  line-height: 160%;
}

.price {
  align-self: end;
  margin-top: 20px;
  font-size: 20px;
  color: var(--color-main--attract);
}

.more-info {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 10px;
}

.info {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 10px;

  border: 1px dotted var(--color-main--attract);
}

@media screen and (max-width: 1200px) {
  li {
    width: 335px;
  }
}

@media screen and (max-width: 480px) {
  li {
    padding: 5px 10px;
  }

  .img {
    margin: 10px 0;
    height: 100px;
  }

  .price {
    margin-top: 10px;
  }
}
</style>
