<template>
  <section>
    <h2>Our shop is successfully repaired:</h2>
    <ul class="stat">
      <li v-for="item in data" class="item">
        <span>{{ item.type }}</span>
        <span>{{ item.amount }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style scoped>
section {
  padding: 30px 0;
}

h2 {
  font-size: var(--size-font-header-second);
  margin-bottom: 20px;
}

ul {
  list-style: none;

  padding: 0;

  display: grid;
  grid-template-columns: repeat(4, 150px);
  gap: 20px 15px;
}

li {
  padding: 5px 10px;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  border: 1px dotted var(--color-main--light);
  border-radius: 5px;
}

span:nth-of-type(1) {
  margin-bottom: 5px;
}
span:nth-of-type(2) {
  font-size: 130%;
  color: var(--color-main--attract);
}
</style>
