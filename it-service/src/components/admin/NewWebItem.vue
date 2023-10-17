<template>
  <h2>New Web Item form:</h2>
  <form @submit.prevent="addWebItem" class="form">
    <div class="control">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title" autocomplete="on"/>
    </div>
    <div class="control">
      <label for="description">Description</label>
      <textarea name="description" id="description" cols="30" rows="10" v-model="description" autocomplete="of"></textarea>
    </div>
    <div class="control">
      <label for="image">Image</label>
      <input type="text" id="image" v-model="image" />
    </div>
    <base-button>Add New Web Item</base-button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      title: '',
      description: '',
      image: '',
    };
  },
  methods: {
    addWebItem() {
      const uniqueID = uuidv4();
      const date = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });
      const webItem = {
        title: this.title,
        description: this.description,
        image: this.image,
        date: date,
        id: uniqueID,
      };
      console.log(webItem);
      this.clearForm();
    },
    clearForm() {
      this.title = '';
      this.description = '';
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
