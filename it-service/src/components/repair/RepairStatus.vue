<template>
  <div class="container">
    <h2>You can input below tne number of your order and check it's status!</h2>
    <div class="control">
      <label for="order">Your order number:</label>
      <input type="text" name="order" id="order" placeholder="Your order number" v-model="orderID" />
      <button class="btn" @click="checkOrder">Check status</button>
    </div>
  </div>
  <div v-if="isModalShown" class="modal" @click="closeModal">
    <div class="state-wrapper">
      <div v-if="currentOrder && currentOrder.status" class="state">{{ currentOrder.status }}</div>
      <div v-else class="state">
        There is no information about an order with such ID, please check for any typos and if there is none please
        contact us directly.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: this.$store.getters['orders/getData'],
      orderID: '',
      currentOrder: undefined,
      isModalShown: false,
    };
  },
  methods: {
    checkOrder() {
      this.currentOrder = this.orders.find(order => order.id === this.orderID);
      console.log(this.currentOrder);
      this.isModalShown = true;
    },
    closeModal() {
      this.isModalShown = false;
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: var(--size-font-header-second);
}
.control {
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 8px;

  font-size: 18px;
}

input {
  outline: none;
  padding: 10px 20px;
  font-size: 100%;
  transition: 0.3s all;
  letter-spacing: 1px;
  border: 1px dotted var(--color-main--dark);
  border-radius: 4px;
}
input:focus,
input:hover {
  color: var(--color-main--dark);
  background: var(--color-main--attract);
}

.btn {
  padding: 10px 20px;
  border: 1px dotted var(--color-main--dark);
  border-radius: 4px;
  background: var(--color-main--light);
  font-size: 100%;
  transition: 0.3s all;
}
.btn:hover {
  cursor: pointer;
  background: var(--color-main--attract);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  z-index: 100;
  opacity: 0.95;

  background-color: var(--color-bg-main);

  display: flex;
  justify-content: center;
  align-items: center;
}

.state-wrapper {
  padding: 30px 50px;
  width: 900px;

  font-size: var(--size-font-header-second);
  color: var(--color-main--light);

  border: 2px dotted var(--color-main--attract);
  border-radius: 5px;
}

.state {
  display: flex;
  justify-content: center;
}
</style>
