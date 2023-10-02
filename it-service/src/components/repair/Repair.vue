<template>
  <section>
    <h1>Repair page</h1>
    <RepairStatus />
    <RepairStatistics />
    <RepairContent />
  </section>
</template>

<script>
import RepairContent from './RepairContent.vue';
import RepairStatistics from './RepairStatistics.vue';
import RepairStatus from './RepairStatus.vue';

export default {
  components: {
    RepairContent,
    RepairStatistics,
    RepairStatus,
  },
};
</script>

<style scoped></style>
