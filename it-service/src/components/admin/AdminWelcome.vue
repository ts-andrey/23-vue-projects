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

@media screen and (max-width: 860px) {
  p {
    width: 95%;
    place-items: center;
    place-content: center;
  }

  span {
    text-align: center;
  }
}

@media screen and (max-width: 480px) {
  p {
    width: 90%;
    place-items: center;
    place-content: center;
    font-size: var(--size-font-header-second_media-lowest);
  }
}
</style>
