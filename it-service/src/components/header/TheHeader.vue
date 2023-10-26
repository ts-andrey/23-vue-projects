<template>
  <header class="header">
    <div class="logo">
      <base-logo />
    </div>
    <BaseNav :linksData="linksArr" isHeader="{{true}}" />
    <div class="bg"></div>
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
  z-index: 10;

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

.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  z-index: 1;
  background: center / cover no-repeat url('../../assets/images/bg/bg-header.webp');
  opacity: 40%;
}

.nav {
  position: relative;
  z-index: 10;

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

@media screen and (max-width: 480px) {
  .header {
    justify-content: flex-start;
    flex-direction: column;
  }

  .logo {
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;

    margin: 20px 10px;
  }
}
</style>
