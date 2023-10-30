<template>
  <header class="header">
    <div class="logo">
      <base-logo />
    </div>
    <BaseNav :linksData="linksArr" isHeader="{{true}}" />
    <div class="bg"></div>
    <div class="undercover"></div>
  </header>
</template>

<script>
import BaseNav from '../../ui/BaseNav.vue';
import linksData from '../../data/linksData';
export default {
  components: {
    BaseNav,
  },
  data() {
    return {
      linksArr: linksData,
    };
  },
};
</script>

<style scoped>
.header {
  position: sticky;
  z-index: 100;

  height: var(--size-header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  font-size: 22px;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--size-header-height) * 0.95);
}

.undercover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;

  height: var(--size-header-height);
  width: 100vw;
  opacity: 100%;
  background: var(--color-bg-main);
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  z-index: 20;
  background: center / cover no-repeat url('../../assets/images/bg/bg-header.webp');
  opacity: 40%;
}

.nav {
  position: relative;
  z-index: 100;

  display: flex;
  justify-content: center;
}

a {
  text-decoration: none;
  color: inherit;

  padding: 6px 12px;
  display: inline-block;

  font-weight: 500;
  letter-spacing: 0.5px;
}

@media screen and (max-width: 1100px) {
  .header {
    padding: 0 10px;
  }
  .logo {
    height: 160px;
  }
}

@media screen and (max-width: 480px) {
  .header {
    justify-content: flex-start;
    flex-direction: column;
  }

  .logo {
    height: 90px;
    margin: 10px 0 20px 0;
  }
}
</style>
