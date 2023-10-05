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

import tempRepairData from '../../data/tempRepairStatisticData';
import repairProcessesData from '../../data/repairProcessesData';

export default {
  components: {
    RepairContent,
    RepairStatistic,
    RepairStatus,
  },
  data() {
    return {
      statusData: [],
      repairProcesses: repairProcessesData,
    };
  },

  created() {
    this.statusData = tempRepairData;
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
  font-size: var(--size-font-header-main);
}
.repair {
  padding: var(--padding-section-default);

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
