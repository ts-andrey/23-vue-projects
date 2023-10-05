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
          <a :href="company.link" target="_blank">
            <h3 class="company-name">{{ company.name }}</h3>

            <div class="company-image">
              <img :src="company.img" alt="company image" />
            </div>
            <p>time we have been providing our services: {{ company.cooperationTime }}</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import serviceCompanyData from '../../data/serviceCompanyData';
import companyListData from '../../data/companyListData';
export default {
  data() {
    return {
      companyServices: serviceCompanyData,
      companyList: companyListData,
    };
  },
};
</script>

<style scoped>
section {
  padding: var(--padding-section-default);
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
  padding: 10px 20px;
  text-decoration: none;
  color: inherit;

  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>
