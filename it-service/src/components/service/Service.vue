<template>
  <section>
    <h1>We can offer our services to companies/individuals</h1>
    <div class="container">
      <h2>Personal services:</h2>
      <p class="description">We provide the same services for individuals as for the companies On Call</p>
    </div>
    <div class="container">
      <h2>Company services:</h2>
      <p class="description">
        If your company wants to use professional help in IT area - we are happy to help you. We can provide our
        services in different ways:
      </p>
      <ul>
        <li class="service" v-for="service in companyServices">
          <base-card>
            <h3 class="service-header">{{ service.type }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <ul v-if="service.details">
              <li>
                <h4>{{ service.details.type }}</h4>
                <ul class="details">
                  <li v-for="detail in service.details.description">{{ detail }}</li>
                </ul>
              </li>
            </ul>
          </base-card>
        </li>
      </ul>
    </div>
    <div class="container">
      <h2>We successfully provide our services to the following companies:</h2>
      <ul class="company-list">
        <li v-for="company in companyList" class="company-item">
          <div>
            <a :href="company.link" target="_blank">
              <h3 class="company-name">{{ company.name }}</h3>
            </a>
            <div class="company-image" @click="toggleItem(company)">
              <img :src="company.img" alt="company image" />
            </div>
            <p>time we have been providing our services: {{ company.cooperationTime }}</p>
          </div>
          <div v-if="company.isSpread && isAuthenticated" class="more-info">
            <div class="info">
              <div>Date:</div>
              <div>{{ company.date }}</div>
            </div>
            <div class="info">
              <div>Description:</div>
              <div>{{ company.description }}</div>
            </div>
            <base-item-config :itemData="company" type="company" />
          </div>
        </li>
      </ul>
    </div>
  </section>
  <div class="bg"></div>
</template>

<script>
import serviceCompanyData from '../../data/serviceCompanyData';
export default {
  data() {
    return {
      companyServices: serviceCompanyData,
    };
  },
  computed: {
    companyList() {
      return this.$store.getters['company/getData'];
    },
    isAuthenticated() {
      return this.$store.getters['auth/getUserStatus'];
    },
  },
  methods: {
    toggleItem(item) {
      item.isSpread = !item.isSpread;
    },
  },
};
</script>

<style scoped>
section {
  position: relative;
  z-index: 10;

  width: 100%;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(100vw - var(--size-scrollbar));
  z-index: 1;
  background: center / cover no-repeat url('../../assets/images/bg/bg-service.webp');
  opacity: 5%;
}

.container {
  max-width: 800px;
  margin-top: 80px;
  display: flex;
  flex-flow: column;
  align-items: center;
}

h1 {
  font-size: var(--size-font-header-main);
  margin-bottom: 10px;
}

h2 {
  font-size: var(--size-font-header-second);
  margin-bottom: 15px;
}

h3 {
  font-size: 26px;
  text-align: center;
  text-transform: capitalize;
}

h4 {
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-main--light);
}

.description {
  width: 600px;
  font-size: 17px;
}

ul {
  padding: 0;
  margin: 20px 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  gap: 30px 0;
}

.card {
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.service-header {
  width: fit-content;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-main--light);
}

.service-description {
  margin-top: 30px;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 150%;
}

.details {
  list-style: none;
  margin: 0 30px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 30%);
  gap: 10px 20px;
}

.details li {
  padding: 10px 20px;
  border: 1px dotted var(--color-main--light);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.company-list {
  width: 100%;
  padding: 40px 20px;

  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 45%);
  gap: 20px;

  border: 1px dotted var(--color-main--light);
  border-radius: 5px;
}
.company-item {
  padding: 10px 20px;
  border: 1px dotted var(--color-main--light);
  border-radius: 5px;

  transition: all 0.3s;
}

.company-item:hover {
  border: 1px dotted var(--color-main--attract);
}

.company-item:hover .company-name {
  transition: all 0.3s;
  border-bottom: 1px dotted var(--color-main--attract);
}

.company-name {
  width: fit-content;
  margin-bottom: 20px;

  text-align: center;

  border-bottom: 1px solid var(--color-main--light);
  transition: all 0.3s;
}

.company-image {
  display: flex;
  width: 100%;
}

img {
  display: flex;
  width: inherit;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;

  display: flex;
  flex-flow: column;
  align-items: center;
}

.more-info {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 10px;
}

.info {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 10px;

  border: 1px dotted var(--color-main--attract);
  border-radius: 5px;
}

@media screen and (max-width: 1000px) {
  h1,
  h2,
  h3,
  h4 {
    width: 95%;
    text-align: center;
  }

  .container {
    margin-top: 40px;
  }

  .description {
    width: 95%;
  }

  .details {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  .details li {
    width: 210px;
  }

  .company-list {
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: var(--size-font-header-main_media-lowest);
  }
  h2,
  h3 {
    font-size: var(--size-font-header-second_media-lowest);
  }

  .container {
    max-width: 100vw;
    margin-top: 30px;
  }
  .description {
    width: 95%;
  }

  .details {
    margin: 0 10px;
    grid-template-columns: repeat(1, 95%);
    gap: 20px;
  }

  .details li {
    padding: 10px 15px;
  }

  .company-list {
    width: 100%;
    padding: 20px 10px;

    grid-template-columns: repeat(1, 95%);
    gap: 20px;
  }
  .company-item {
    padding: 10px 20px;
  }
}
</style>
