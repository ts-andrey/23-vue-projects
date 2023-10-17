<template>
  <button>
    <slot></slot>
  </button>
</template>

<script></script>

<style scoped>
button {
  padding: 10px 40px;

  font-size: 18px;

  color: var(--color-main--dark);
  background-color: var(--color-main--light);

  border-radius: 5px;

  transition: all var(--time-animation-duration);
}

button:hover {
  cursor: pointer;
  background-color: var(--color-main--attract);
}
</style>
