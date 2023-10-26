<template>
  <div class="container">
    <h2>Our shop is successfully repaired:</h2>
    <ul class="stat">
      <li v-for="item in data" class="item">
        <span>{{ item.type }}</span>
        <span>{{ item.amount }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style scoped>
.container {
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

@media screen and (max-width: 480px) {
  h2 {
    width: 95%;
    text-align: center;
    font-size: var(--size-font-header-second_media-lowest);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    gap: 15px;
  }
}
</style>
