<template>
  <section>
    <h1>Welcome page</h1>
    <h2>Services we provide</h2>
    <ul class="services">
        <ServiceItem
          v-for="service in servicesList"
          :name="service.name"
          :description="service.description"
          :childrenData="service.childrenData"
          :icon="service.icon"
        ></ServiceItem>
    </ul>
  </section>
</template>

<script>
import ServiceItem from './ServiceItem.vue';
import servicesData from '../../data/servicesData.js';
export default {
  components: {
    ServiceItem,
  },
  data() {
    return {
      servicesList: servicesData,
    };
  },
};
</script>

<style scoped>
.services {
  list-style: none;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(3, 15rem);
  gap: 4rem 2rem;
}
</style>
