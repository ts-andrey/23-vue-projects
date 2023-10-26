<template>
  <div class="container">
    <h2>
      We understand that all customers wants their orders to be repaired as fast and as best as possible and we are
      happy to help you with that. We just need you to understand what it takes to make it happen from our side:
    </h2>

    <ul>
      <li v-for="item in data">
        <div class="content">
          <h3 :class="item.details ? 'indent' : ''">{{ item.process }}</h3>
          <p v-if="item.details">{{ item.details }}</p>
        </div>
        <div class="icon">
          <RepairArrowIcon />
        </div>
      </li>
    </ul>

    <div class="comment">
      <h2>Not all processes may be necessary, but it is usually what is needed to fix something.</h2>
    </div>
  </div>
</template>

<script>
import RepairArrowIcon from '../icons/repairBasic/RepairArrowIcon.vue';
export default {
  components: {
    RepairArrowIcon,
  },
  props: ['data'],
};
</script>

<style scoped>
h2 {
  font-size: var(--size-font-header-second);
  width: 800px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 30px 0;
  display: grid;
  place-items: center;
}

li {
  width: 800px;
}

.content {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  border: 1px dotted var(--color-main--light);
  border-radius: 5px;

  padding: 20px;
}

.icon {
  margin: 20px 0;
  height: 60px;
  display: flex;
  justify-content: center;

  fill: var(--color-main--light);
}

li:last-of-type .icon {
  display: none;
}

.indent {
  margin-bottom: 20px;
}

h3 {
  width: fit-content;
  padding-bottom: 5px;

  border-bottom: 2px inset var(--color-main--light);

  font-size: 24px;
  text-align: center;
  text-transform: capitalize;
}

p {
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 145%;
}

.comment {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 480px) {
  h2 {
    width: 95%;
    font-size: var(--size-font-header-second_media-lowest);
  }
  h3 {
    font-size: var(--size-font-header-second_media-lowest);
  }
  li {
    width: 95%;
  }
  .icon {
    margin: 10px 0;
    height: 30px;
  }

  .content {
    padding: 10px;
  }
  .indent {
    margin-bottom: 10px;
  }
}
</style>
