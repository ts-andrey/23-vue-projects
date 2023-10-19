<template>
  <section class="repair">
    <h1>Welcome to our repair section!</h1>
    <RepairStatus />
    <RepairStatistic :data="statusData" />
    <RepairContent :data="repairProcesses" />
  </section>
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
h1 {
  margin-bottom: 20px;
  font-size: var(--size-font-header-main);
}
.repair {
  letter-spacing: 0.45px;
}

section {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  max-width: 1200px;
}
</style>
