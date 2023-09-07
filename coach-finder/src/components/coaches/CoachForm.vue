<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">First Name</label>
      <input type="text" name="firstname" id="firstname" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastname">Last Name</label>
      <input type="text" name="lastname" id="lastname" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea name="description" id="description" cols="30" rows="5" v-model.trim="description"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" name="rate" id="rate" v-model.number="rate" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" value="frontend" id="frontend" v-model="areas" />
        <label for="frontend">FrontEnd</label>
      </div>
      <div>
        <input type="checkbox" value="backend" id="backend" v-model="areas" />
        <label for="backend">BackEnd</label>
      </div>
      <div>
        <input type="checkbox" value="career" id="career" v-model="areas" />
        <label for="career">Career Advisory</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        fname: this.firstName,
        lname: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas,
      };

      console.log(formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type='checkbox'] + label {
  display: inline;
  margin: 0 0 0 0.5rem;
  font-weight: normal;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  border-color: #3d008d;
  outline: none;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: 1px solid #3d008d;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: #ff0000;
}

.invalid input,
.invalid textarea {
  border: 1px solid #ff0000;
}
</style>
