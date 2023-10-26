<template>
  <section>
    <h1>Authorization page</h1>

    <form @submit.prevent="authLogin" class="auth">
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
import { checkSession, login } from '../../util/helpFuncs';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  beforeCreate() {
    const sessionData = checkSession();
    if (sessionData.isValid) {
      this.$store.dispatch('auth/login', sessionData.data);
    } else {
      this.$store.dispatch('auth/logout');
    }

    const isLoggedIn = this.$store.getters['auth/getUserStatus'];
    if (isLoggedIn) {
      this.$router.push('/admin');
    }
  },
  methods: {
    authLogin() {
      const data = {
        user: this.username,
        password: this.password,
      };
      const loginData = login(data);
      if (loginData.loggedIn) {
        this.$store.dispatch('auth/login', data);
        this.$router.push('admin');
      }
      this.clearForm();
    },
    clearForm() {
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

@media screen and (max-width: 480px) {
  h1 {
    width: 95%;
    margin-bottom: 40px;
    font-size: var(--size-font-header-main_media-lowest);
  }
  .auth {
    width: 95%;
    padding: 30px 10px;
  }
  .control {
    flex-direction: column;
    place-items: center;
    place-content: center;
  }

  input {
    margin: 0;
    margin-top: 10px;
    width: 100%;
  }
}
</style>
