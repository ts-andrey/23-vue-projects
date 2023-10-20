<template>
  <h2>Form for a new Company that works with us:</h2>
  <form @submit.prevent="addCompanyItem" class="form">
    <div class="control">
      <label for="company">Company</label>
      <input type="text" id="company" v-model="company" autocomplete="on" />
    </div>
    <div class="control">
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        v-model="description"
        autocomplete="of"
      ></textarea>
    </div>
    <div class="control">
      <label for="image">Image link</label>
      <input type="text" id="image" v-model="image" />
    </div>
    <div class="control">
      <label for="link">Company link</label>
      <input type="text" id="link" v-model="link" />
    </div>
    <div class="control">
      <label for="cooperationTime">Cooperation Time</label>
      <input type="text" id="cooperationTime" v-model="cooperationTime" />
    </div>
    <base-button>Add New Company</base-button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      name: '',
      description: '',
      image: '',
      link: '',
      cooperationTime: 'Less than a year',
    };
  },
  methods: {
    addCompanyItem() {
      const uniqueID = uuidv4();
      const date = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });
      const companyItem = {
        name: this.name,
        description: this.description,
        image: this.image,
        link: this.link,
        cooperationTime: this.cooperationTime,
        date: date,
        id: uniqueID,
        isSpread: false,
      };
      console.log(companyItem);
      this.$store.dispatch('company/addCompanyItem', companyItem);
      this.clearForm();
    },
    clearForm() {
      this.company = '';
      this.description = '';
      this.image = '';
      this.cooperationTime = 'Less than a year';
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
