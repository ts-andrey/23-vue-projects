<template>
  <button :className="isCompact ? 'mini' : ''">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['isCompact'],
};
</script>

<style scoped>
button {
  padding: 10px 40px;

  font-size: 18px;

  color: var(--color-main--dark);
  background-color: var(--color-main--light);

  border-radius: 5px;

  transition: all var(--time-animation-duration);
}

.mini{
  padding: 5px 20px;
}

button:hover {
  cursor: pointer;
  background-color: var(--color-main--attract);
}
</style>
