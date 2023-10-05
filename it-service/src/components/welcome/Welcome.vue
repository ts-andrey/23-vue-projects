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
  <div class="bg"></div>
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
section {
  position: relative;
  z-index: 10;
  padding: var(--padding-section-default);
}

h1 {
  text-align: center;
  font-size: var(--size-font-header-main);
  margin-bottom: 40px;
}
.services {
  list-style: none;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(3, 290px);
  gap: 4rem 2rem;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  z-index: 1;
  background: center / cover no-repeat url('../../assets/images/bg/bg-home.webp');
  opacity: 23%;
}
</style>
