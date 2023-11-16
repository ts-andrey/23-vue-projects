<template>
  <h2>New Web Item form:</h2>
  <GeneralForm formType="web" />
</template>

<script>
import GeneralForm from '../form/GeneralForm.vue';
export default {
  components: {
    GeneralForm,
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-size: var(--size-font-header-second);
  margin-bottom: 10px;
}
</style>
