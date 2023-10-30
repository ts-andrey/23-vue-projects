<template>
  <section class="repair">
    <h1>Welcome to our repair section!</h1>
    <RepairStatus />
    <RepairStatistic :data="statusData" />
    <RepairContent :data="repairProcesses" />
  </section>
  <div class="bg"></div>
</template>

<script>
import RepairContent from './RepairContent.vue';
import RepairStatistic from './RepairStatistic.vue';
import RepairStatus from './RepairStatus.vue';

import repairProcessesData from '../../data/repairProcessesData';

export default {
  components: {
    RepairContent,
    RepairStatistic,
    RepairStatus,
  },
  data() {
    return {
      repairProcesses: repairProcessesData,
    };
  },
  computed: {
    statusData() {
      const data = this.$store.getters['repair/getData'];
      return data;
    },
  },
};
</script>

<style scoped>
section {
  position: relative;
  z-index: 10;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  z-index: 1;
  background: center / cover no-repeat url('../../assets/images/bg/bg-repair.webp');
  opacity: 5%;
}

h1 {
  margin-bottom: 20px;
  font-size: var(--size-font-header-main);
}
.repair {
  letter-spacing: 0.45px;
}

.container {
  display: grid;
  place-items: center;
  place-content: center;
}

@media screen and (max-width: 1000px) {
  h1,
  h2 {
    text-align: center;
  }
  section {
    max-width: 100vw;
  }
}

@media screen and (max-width: 480px) {
  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-size: var(--size-font-header-main_media-lowest);
  }
}
</style>
