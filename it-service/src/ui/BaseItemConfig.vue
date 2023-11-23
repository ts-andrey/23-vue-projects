<template>
  <div class="config">
    <base-button isCompact="true" @click="deleteItem">Delete</base-button>
    <base-button isCompact="true" @click="updateItem">Update</base-button>
  </div>
</template>

<script>
export default {
  props: ['itemData', 'type'],
  methods: {
    deleteItem() {
      console.log({ data: this.itemData, type: this.type });
      if (this.type === 'web') {
        this.$store.dispatch('web/removeWebItem', this.itemData);
      } else if (this.type === 'shop') {
        this.$store.dispatch('shop/removeShopItem', this.itemData);
      } else if (this.type === 'company') {
        this.$store.dispatch('company/removeCompanyItem', this.itemData);
      } else if (this.type === 'order') {
        this.$store.dispatch('orders/removeOrderItem', this.itemData);
      }
    },
    updateItem() {
      if (this.type === 'web') {
        this.$store.dispatch('web/updateWebItem', this.itemData);
      } else if (this.type === 'shop') {
        this.$store.dispatch('shop/updateShopItem', this.itemData);
      } else if (this.type === 'company') {
        this.$store.dispatch('company/updateCompanyItem', this.itemData);
      } else if (this.type === 'order') {
        this.$store.dispatch('order/updateOrderItem', this.itemData);
      }
    },
  },
};
</script>

<style scoped>
.config {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0px 20px;
}
</style>
