<template>
  <h2>New Shop Item form:</h2>
  <GeneralForm formType="shop" />
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
