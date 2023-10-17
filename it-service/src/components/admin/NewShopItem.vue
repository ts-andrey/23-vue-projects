<template>
  <h2>New Shop Item form:</h2>
  <form @submit.prevent="addShopItem" class="form">
    <div class="control">
      <label for="model">Model</label>
      <input type="text" id="model" v-model="model" autocomplete="on"/>
    </div>
    <div class="control">
      <label for="description">Description</label>
      <textarea name="description" id="description" cols="30" rows="10" v-model="description" autocomplete="of"></textarea>
    </div>
    <div class="control">
      <label for="price">Price</label>
      <input type="number" id="price" v-model="price" />
    </div>
    <div class="control">
      <label for="image">Image</label>
      <input type="text" id="image" v-model="image" />
    </div>
    <base-button>Add New Shop Item</base-button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      model: '',
      description: '',
      price: 0,
      image: '',
    };
  },
  methods: {
    addShopItem() {
      const uniqueID = uuidv4();
      const date = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });
      const shopItem = {
        model: this.model,
        description: this.description,
        price: this.price,
        image: this.image,
        date: date,
        id: uniqueID,
      };
      console.log(shopItem);
      this.clearForm();
    },
    clearForm() {
      this.model = '';
      this.description = '';
      this.price = 0;
      this.image = '';
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-size: var(--size-font-header-second);
  margin-bottom: 10px;
}

.form {
  padding: 40px 20px;

  display: flex;
  flex-flow: column;
  align-items: flex-end;

  border-top: 3px solid var(--color-main--light);
  border-bottom: 3px solid var(--color-main--light);
  border-left: 1px ridge var(--color-main--light);
  border-right: 1px ridge var(--color-main--light);
  border-radius: 10px;
}

.control {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  font-size: 18px;
}

input,
textarea {
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 18px;
  width: 400px;
}
</style>
