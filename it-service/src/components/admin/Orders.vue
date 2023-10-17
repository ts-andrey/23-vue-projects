<template>
  <h2>All Orders component</h2>
  <div class="filter-wrapper">
    <label for="filter">Filter orders</label>
    <input id="filter" type="text" @keyup="filter" :value="filterValue" />
  </div>
  <ul v-if="filteredOrders.length">
    <li v-for="order in filteredOrders">
      <div class="wrapper">
        <span>{{ order.order }}</span>
        <span>{{ order.status }}</span>
      </div>
      <div class="status-wrapper">
        <label for="status">Change status</label>
        <select name="status" id="status" :value="order.status" @change="setStatus">
          <option value="in examination process">in examination process</option>
          <option value="in a repairing process">in a repairing process</option>
          <option value="in a testing process">in a testing process</option>
          <option value="awaiting for spare parts">awaiting for spare parts</option>
          <option value="ready">ready</option>
          <option value="completed">completed</option>
        </select>
      </div>
    </li>
  </ul>
</template>

<script>
import ordersData from '../../data/admin/ordersData';
export default {
  data() {
    return {
      filterValue: '',
      orders: ordersData,
    };
  },
  computed: {
    filteredOrders() {
      return this.orders.filter(order => order.order.startsWith(this.filterValue));
    },
  },
  methods: {
    filter(event) {
      this.filterValue = event.target.value;
    },
    setStatus(event) {
      const newValue = event.target.value;

      const orderItem = event.target.parentNode.parentNode;
      const orderDataItem = orderItem.children[0];
      const order = orderDataItem.children[0].innerText;

      const index = this.filteredOrders.map(el => el.order).indexOf(order);
      this.filteredOrders[index].status = newValue;
    },
  },
};
</script>

<style scoped>
.filter-wrapper {
  margin-bottom: 30px;
}
label {
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
  padding: 5px 10px;
  border: 1px dotted var(--color-main--light);
  border-radius: 5px;

  display: flex;
  align-items: center;
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
</style>
