<template>
  <h2>New Order form:</h2>
  <form @submit.prevent="addOrder" class="form">
    <div class="control">
      <label for="customer">Customer</label>
      <input type="text" id="customer" v-model="customer" autocomplete="on" />
    </div>
    <div class="control">
      <label for="phone">Phone Number</label>
      <input type="text" id="phone" v-model="phone" autocomplete="on" />
    </div>
    <div class="control">
      <label for="mail">E-Mail</label>
      <input type="text" id="mail" v-model="mail" autocomplete="on" />
    </div>

    <div class="control">
      <label for="appliance">Appliance</label>
      <input type="text" id="appliance" v-model="appliance" autocomplete="on" />
    </div>
    <div class="control">
      <label for="details">Details</label>
      <textarea id="details" cols="30" rows="10" v-model="details" autocomplete="of"></textarea>
    </div>
    <div class="control">
      <label for="status">Pick Appliance Status</label>
      <select name="status" id="status" v-model="status">
        <option value="registered">registered</option>
        <option value="in examination process">in examination process</option>
        <option value="in a repairing process">in a repairing process</option>
        <option value="in a testing process">in a testing process</option>
        <option value="awaiting for spare parts">awaiting for spare parts</option>
        <option value="ready">ready</option>
        <option value="completed">completed</option>
      </select>
    </div>
    <base-button>Add New Order</base-button>
  </form>
</template>

<script>
import { checkSession } from '../../util/helpFuncs';
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      appliance: '',
      customer: '',
      details: '',
      mail: '',
      phone: '',
      status: 'registered',
    };
  },
  beforeCreate() {
    const sessionData = checkSession();
    if (sessionData.isValid) {
      this.$store.dispatch('auth/login', sessionData.data);
    } else {
      this.$store.dispatch('auth/logout');
    }

    const isLoggedIn = this.$store.getters['auth/getUserStatus'];
    if (!isLoggedIn) {
      this.$router.push('/auth');
    }
  },
  methods: {
    addOrder() {
      const uniqueID = uuidv4();
      const date = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });
      const order = {
        appliance: this.appliance,
        customer: this.customer,
        details: this.details,
        mail: this.mail,
        phone: this.phone,
        status: this.status,
        date: date,
        id: uniqueID,
        isSpread: false,
      };
      console.log(order);
      this.$store.dispatch('orders/addOrder', order);
      this.clearForm();
    },
    clearForm() {
      this.appliance = '';
      this.customer = '';
      this.details = '';
      this.mail = '';
      this.phone = '';
      this.status = 'registered';
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

@media screen and (max-width: 480px) {
  .form{
    width: 95%;
    place-items: start;
  }
  .control {
    flex-direction: column;
  }

  input,
  textarea {
    margin-left: 0;
    padding: 5px 10px;
    font-size: 18px;
    width: 95%;
  }
}
</style>
