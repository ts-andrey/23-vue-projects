<template>
  <section>
    <h1>Our services</h1>
    <ul class="services">
      <ServiceItem
        v-for="service in servicesList"
        :name="service.name"
        :description="service.description"
        :childrenData="service.childrenData"
        :icon="service.icon"
        :link="service.link"
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
h1 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
}
.services {
  list-style: none;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(3, 17rem);
  gap: 4rem 2rem;
}
</style>
