<template>
  <form @submit.prevent="addItem" class="form">
    <!-- GENERAL: Name -->
    <div class="control">
      <label for="name">{{ nameText }}</label>
      <input type="text" id="name" v-model="name" autocomplete="on" />
    </div>

    <!-- ORDER: Customer -->
    <div v-if="this.formType === 'order'" class="control">
      <label for="Customer">Customer</label>
      <input type="text" id="customer" v-model="customer" autocomplete="on" />
    </div>

    <!-- ORDER: Phone -->
    <div v-if="this.formType === 'order'" class="control">
      <label for="phone">Phone Number</label>
      <input type="text" id="phone" v-model="phone" autocomplete="on" />
    </div>

    <!-- ORDER: Mail -->
    <div v-if="this.formType === 'order'" class="control">
      <label for="mail">E-Mail</label>
      <input type="text" id="mail" v-model="mail" autocomplete="on" />
    </div>

    <!-- GENERAL: Description -->
    <div class="control">
      <label for="description" class="description__label">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        v-model="description"
        autocomplete="of"
      ></textarea>
    </div>

    <!-- ORDER: Status -->
    <div v-if="this.formType === 'order'" class="control">
      <label for="status">Pick Appliance Status</label>
      <select name="status" id="status" v-model="status">
        <option value="registered">registered</option>
        <option value="in examination process">in examination process</option>
        <option value="in a repairing process">in a repairing process</option>
        <option value="in a testing process">in a testing process</option>
        <option value="awaiting for spare parts">awaiting for spare parts</option>
        <option value="ready">ready</option>
        <option value="completed">completed</option>
      </select>
    </div>

    <!-- GENERAL: Image -->
    <div class="control">
      <label for="image">Image link</label>
      <input type="text" id="image" v-model="image" />
    </div>

    <!--COMPANY/WEBSITE: Link -->
    <div v-if="this.formType === 'company' || this.formType === 'web'" class="control">
      <label for="link">{{ this.formType === 'company' ? 'Company' : 'Website' }} link</label>
      <input type="text" id="link" v-model="link" />
    </div>

    <!--SHOP: Type -->
    <div v-if="this.formType === 'shop'" class="control">
      <p>Select Shop Item Type</p>
      <select name="itemType" v-model="type">
        <option value="phone">phone</option>
        <option value="notebook">notebook</option>
        <option value="pcComponent">PC Component</option>
        <option value="laptop">laptop</option>
      </select>
    </div>
    <!--SHOP: Price -->
    <div v-if="this.formType === 'shop'" class="control">
      <label for="price">Price</label>
      <input type="number" id="price" v-model="price" />
    </div>

    <base-button>{{ buttonText }}</base-button>
  </form>
</template>

<script src="./GeneralFormScript.js"></script>
<style scoped src="./GeneralFormStyles.css"></style>
