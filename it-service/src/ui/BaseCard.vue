<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script></script>

<style scoped>
.card {
  height: 100%;
  
  padding: 10px 20px;
  
  border: 1px dotted var(--color-main--light);
  border-radius: 15px;
}
</style>
