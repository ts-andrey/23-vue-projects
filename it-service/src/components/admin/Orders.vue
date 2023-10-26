<template>
  <h2>All Orders component</h2>
  <div class="filter-wrapper">
    <label for="filter">Filter orders</label>
    <input id="filter" type="text" @keyup="filter" :value="filterValue" />
  </div>
  <ul v-if="filteredOrders.length">
    <li v-for="order in filteredOrders" :key="order.id">
      <div class="data-wrapper">
        <div class="wrapper">
          <span @click="toggleItem(order)">{{ order.id }}</span>
          <span>{{ order.status }}</span>
        </div>
        <div class="status-wrapper">
          <p>Change status</p>
          <select name="status" :value="order.status" @change="setStatus($event, order.id)">
            <option value="registered">registered</option>
            <option value="in examination process">in examination process</option>
            <option value="in a repairing process">in a repairing process</option>
            <option value="in a testing process">in a testing process</option>
            <option value="awaiting for spare parts">awaiting for spare parts</option>
            <option value="ready">ready</option>
            <option value="completed">completed</option>
          </select>
        </div>
      </div>
      <div v-if="order.isSpread" class="more-info">
        <div class="info">
          <div class="descr">Date:</div>
          {{ order.date }}
        </div>
        <div class="info">
          <div class="descr">Appliance:</div>
          {{ order.appliance }}
        </div>
        <div class="info">
          <div class="descr">Details:</div>
          {{ order.details }}
        </div>
        <div class="info">
          <div class="descr">Customer:</div>
          {{ order.customer }}
        </div>
        <div class="info">
          <div class="descr">Mail:</div>
          {{ order.mail }}
        </div>
        <div class="info">
          <div class="descr">Phone:</div>
          {{ order.phone }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { checkSession } from '../../util/helpFuncs';

export default {
  data() {
    return {
      filterValue: '',
    };
  },
  computed: {
    orders() {
      const data = this.$store.getters['orders/getData'];
      return data;
    },
    filteredOrders() {
      return this.orders.filter(order => order.id.startsWith(this.filterValue));
    },
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
    filter(event) {
      this.filterValue = event.target.value;
    },
    setStatus(event, id) {
      const newStatus = event.target.value;
      this.$store.dispatch('orders/setStatus', { id: id, newStatus: newStatus });
    },
    toggleItem(order) {
      order.isSpread = !order.isSpread;
    },
  },
};
</script>

<style scoped>
.filter-wrapper {
  margin-bottom: 30px;
}
label,
p {
  margin-right: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

input {
  padding: 5px 10px;
}

ul {
  padding: 0;
  list-style: none;
  display: grid;

  gap: 10px;
}

li {
  max-width: 800px;
  padding: 5px 10px;
  border: 1px dotted var(--color-main--light);
  border-radius: 5px;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
}

.data-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.wrapper {
  display: flex;
}

h2 {
  margin-bottom: 30px;
  text-align: center;
  color: var(--color-main--attract);
  font-size: var(--size-font-header-second);
}

span {
  align-self: center;
}

span:first-of-type {
  width: 200px;
  margin-right: 25px;
  letter-spacing: 2px;
  border-right: 1px dotted var(--color-main--attract);
}
span:last-of-type {
  letter-spacing: 1px;
  color: var(--color-main--light);
}

span:first-of-type:hover {
  cursor: pointer;
}

.status-wrapper {
  margin-left: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
}

select {
  margin-top: 5px;
  padding: 5px;
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
  border-radius: 5px;
}

@media screen and (max-width: 480px) {
  .filter-wrapper {
    display: flex;
    flex-direction: column;
  }

  label{
    margin-left: 0;
    margin-bottom: 10px;
  }

  ul {
    width: fit-content;
    place-items: center;
    gap: 20px;
  }
  li {
    width: 95%;
    padding: 10px 20px;
  }
  .data-wrapper {
    width: 95%;
    flex-direction: column;
    place-items: center;
    place-content: center;
    gap: 10px;
  }

  .wrapper {
    flex-direction: column;
  }

  span {
    text-align: center;
  }

  span:first-of-type {
    width: 200px;
    margin-right: 0px;
    margin-bottom: 5px;
    padding-bottom: 5px;
    letter-spacing: 2px;
    border-right: none;
    border-bottom: 1px dotted var(--color-main--attract);
  }

  .status-wrapper {
    margin-left: 0;
  }
}
</style>
