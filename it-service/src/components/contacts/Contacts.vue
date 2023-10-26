<template>
  <section>
    <h1>Our contacts information:</h1>
    <h2>
      You can reach to us either by calling us on number <span>012-345-67-89</span>
      or by coming into our office
    </h2>

    <div class="container">
      <h3>In our office you can:</h3>
      <ul class="service-list">
        <li v-for="service in services" class="service-item">{{ service.option }}</li>
      </ul>
    </div>

    <h2>
      Our office location is:
      <span>Gomel, st. Karpovicha 31</span>
    </h2>

    <div class="map-container">
      <yandex-map :coords="coords" :settings="settings" :zoom="14">
        <ymap-marker :coords="coords" marker-id="123" hint-content="IT-Service" />
      </yandex-map>
    </div>
  </section>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import officeServicesData from '../../data/officeServicesData';
export default {
  components: { yandexMap, ymapMarker },
  data() {
    return {
      services: officeServicesData,
      coords: [52.426061, 30.996908],
      settings: {
        apiKey: 'bc96803f-09f0-4b50-bb83-e478793ba58a',
        lang: 'en_US',
      },
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  align-items: center;
  letter-spacing: 0.4px;
}

h1 {
  margin-bottom: 20px;
  font-size: var(--size-font-header-main);
}

h2 {
  max-width: 850px;
  margin-bottom: 20px;
  text-align: center;
  font-size: var(--size-font-header-second);
}

h3 {
  margin-bottom: 10px;
  font-size: var(--size-font-header-second);
  color: var(--color-main--attract);
}

span {
  color: var(--color-main--attract);
}

.container {
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 20px 0;
}

.service-list {
  list-style: none;
  width: 100%;
  padding: 40px 20px;

  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 45%);
  gap: 20px;

  border: 1px dotted var(--color-main--light);
  border-radius: 5px;
}
.service-item {
  padding: 10px 20px;
  color: var(--color-main--light);
  border: 1px dotted var(--color-main--attract);
  border-radius: 5px;
}

.map-container {
  height: 700px;
  width: 1000px;
  display: flex;

  padding: 20px 20px;
  border: 1px dotted var(--color-main--attract);
  border-radius: 5px;
  overflow: hidden;
}
.ymap-container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

@media screen and (max-width: 480px) {
  h1 {
    text-align: center;
    font-size: var(--size-font-header-main_media-lowest);
  }
  h2 {
    margin: 0;
    text-align: center;
    font-size: var(--size-font-header-second_media-lowest);
  }
  .service-list {
    width: 95%;
    padding: 20px 10px;

    grid-template-columns: repeat(1, 95%);
    gap: 20px;
  }
  .service-item {
    padding: 10px;
  }

  .map-container {
    height: 400px;
    width: 95%;

    padding: 10px;
  }
}
</style>
