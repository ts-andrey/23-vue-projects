<template>
  <section>
    <h1>Welcome to the IT-Service company!</h1>
    <article>
      <p>Our company is in buisnes over 10 years.</p>
      <p>We are proudly can tell that we always treat all our customers politely and with respect.</p>
      <p>When we providing our services we strive to achieve the best possible result.</p>
      <p>We always pay attention to the customer's requirements and requests.</p>
      <p>Over the years our company successfully provided our services and satisfied countless customers.</p>
      <p>Our company is providing a variety of services, you can check them out below.</p>
    </article>
    <h2>Our services</h2>
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
}

h1,
h2 {
  text-align: center;
  font-size: var(--size-font-header-main);
  margin-bottom: 40px;
}

article {
  margin: 0 auto 50px auto;
  width: 1100px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  font-size: 22px;
  letter-spacing: 1px;
}

p {
  padding: 20px 30px;
  width: 300px;

  border: 2px dotted var(--color-main--light);
}
.services {
  list-style: none;
  padding: 0;

  display: grid;
  justify-content: center;
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
