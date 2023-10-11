<template>
  <div class="container">
    <h2>You can input below tne number of your order and check it's status!</h2>
    <div class="control">
      <label for="order">Your order number:</label>
      <input type="text" name="order" id="order" placeholder="Your order number" />
      <button class="btn">Check status</button>
    </div>
  </div>
</template>

<script></script>

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
</style>
