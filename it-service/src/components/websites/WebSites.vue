<template>
  <section class="web">
    <h1>We provide web developing services</h1>
    <p>
      <span> We are able to develop any kind of resource for you </span>
      <span>(website, server, API, desktop, mobile, widget, ADS)</span>
    </p>
    <h2>We are successfully developed the following recources:</h2>
    <ul>
      <li v-for="web in webData">
        <a :href="web.link" target="_blank">
          <h3>{{ web.name }}</h3>
        </a>
        <div @click="toggleItem(web)" class="general-info">
          <img :src="web.img" :alt="web.name" />
        </div>
        <div v-if="web.isSpread" class="more-info">
          <div class="info">
            <div>Date:</div>
            <div>{{ web.date }}</div>
          </div>
          <div class="info">
            <div>Description:</div>
            <div>{{ web.description }}</div>
          </div>
        </div>
      </li>
    </ul>
    <video class="video" src="../../assets/video/web-bg-video.mp4" muted autoplay loop></video>
  </section>
</template>

<script>
export default {
  computed: {
    webData() {
      const data = this.$store.getters['web/getData'];
      return data;
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
.web {
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.video {
  width: 100vw;
  height: calc(100vh - var(--size-header-height));

  position: fixed;
  left: 0;
  right: 0;
  top: var(--size-header-height);
  bottom: 0;
  z-index: -1;

  object-fit: cover;
  opacity: 20%;
}

h1 {
  font-size: var(--size-font-header-main);
  margin-bottom: 20px;
}

h2,
h3 {
  font-size: var(--size-font-header-second);
}

h2 {
  margin-bottom: 30px;
}
h3 {
  margin-bottom: 10px;
}

h3:hover {
  color: var(--color-main--attract);
}

p {
  display: flex;
  flex-flow: column;
  font-size: 20px;
  margin-bottom: 30px;
}

ul {
  padding: 0;
  list-style: none;
  display: grid;
  place-items: center;
  place-content: center;
  grid-template-columns: repeat(3, var(--size-web-img));
  gap: 20px;
}

li {
  padding: 10px 10px;
  display: flex;
  flex-direction: column;

  border: 1px dashed var(--color-main--light);
  border-radius: 5px;
  opacity: 80%;
  transition: all 0.3s;
  filter: blur(2px);
}

li:hover {
  opacity: 100%;
  transform: scale(1.2);
  border: 1px dashed var(--color-main--attract);
  filter: blur(0);
}

a {
  text-decoration: none;
  color: inherit;

  display: flex;
  flex-flow: column;
  align-items: center;
  overflow: hidden;
}

img {
  display: flex;
  width: calc(var(--size-web-img) - 40px);
  height: auto;
}

img:hover {
  cursor: pointer;
}

.general-info {
  flex-grow: 1;
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

@media screen and (max-width: 1300px) {
  h1,
  h2 {
    width: 95%;
  }

  h1,
  h2 {
    text-align: center;
  }

  ul{
    width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  li {
    width: calc(var(--size-web-img) * .8);
  }
  img {
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  h1,
  h2,
  span {
    width: 95%;
  }

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-size: var(--size-font-header-main_media-lowest);
  }
  h2 {
    font-size: var(--size-font-header-second_media-lowest);
  }

  p {
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    font-size: 16px;
  }

  ul {
    grid-template-columns: repeat(1, 95%);
    gap: 20px;
  }

  li {
    opacity: 90%;
    filter: blur(1px);
  }

  li:hover {
    transform: scale(0.95);
  }

  img {
    width: 100%;
  }
}
</style>
