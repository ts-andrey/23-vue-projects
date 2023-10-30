<template>
  <section>
    <h1>Welcome to the IT-Service company!</h1>
    <article>
      <p>We are in business over 15 years!</p>
      <p>We always treat all our customers with courtesy and respect.</p>
      <p>When we providing our services we strive to achieve the best possible result.</p>
      <p>We always pay attention to the customer's requirements and requests.</p>
      <p>Over the years our company successfully provided our services and satisfied countless customers.</p>
      <p>Our company is providing a variety of services, please check them out below.</p>
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
  place-items: center;
  place-content: center;
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

@media screen and (max-width: 1100px) {
  article {
    width: 98vw;
    gap: 20px;
  }
  .services {
    width: 98vw;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
}

@media screen and (max-width: 480px) {
  h1,
  h2 {
    font-size: var(--size-font-header-main_media-lowest);
    margin-bottom: 30px;
  }

  article {
    width: 100%;
    gap: 20px 0;
    font-size: 18px;
  }

  p {
    width: 90%;
  }

  .services {
    grid-template-columns: repeat(1, 280px);
    gap: 20px 0;
  }
}
</style>
