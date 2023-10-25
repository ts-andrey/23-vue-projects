<template>
  <p>
    <span>Welcome to the administrative section.</span>
    <span>Please pick a section above for a specific administrative operation.</span>
  </p>
</template>

<script>
import { checkSession } from '../../util/helpFuncs';

export default {
  beforeCreate() {
    const sessionData = checkSession();
    if (sessionData.isValid) {
      this.$store.dispatch('auth/login', sessionData.data);
    } else {
      this.$store.dispatch('auth/logout');
    }
    
    const isLoggedIn = this.$store.getters['auth/getUserStatus'];
    if (!isLoggedIn) {
      this.$router.push('/auth');
    }
  },
};
</script>

<style scoped>
p {
  display: flex;
  flex-flow: column;
  align-items: center;

  font-size: var(--size-font-header-second);
  color: var(--color-main--light);
}
</style>
