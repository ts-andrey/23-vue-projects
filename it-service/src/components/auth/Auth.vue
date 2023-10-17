<template>
  <section>
    <h1>Authorization page</h1>

    <form @submit.prevent="login" class="auth">
      <div class="control">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" autocomplete="on" />
      </div>
      <div class="control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" autocomplete="on" />
      </div>
      <base-button>Login</base-button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log(this.username, this.password);
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
section {
  padding: var(--padding-section-default);
}
h1 {
  text-align: center;
  font-size: var(--size-font-header-main);
  margin-bottom: 50px;
}

.auth {
  padding: 40px 60px;

  display: flex;
  flex-flow: column;
  align-items: flex-end;

  border-top: 3px solid var(--color-main--light);
  border-bottom: 3px solid var(--color-main--light);
  border-left: 1px ridge var(--color-main--light);
  border-right: 1px ridge var(--color-main--light);
  border-radius: 10px;
}

.control {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  font-size: 18px;
}

input {
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 18px;
}
</style>
