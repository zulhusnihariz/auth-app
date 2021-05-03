<template>
  <div class="card">
    <div class="container">
      <label for="">Email</label>
      <input type="email" v-model="email" autofocus required />
      <label for="">Password</label>
      <input type="password" v-model="password" required />
      <div class="error" v-html="error" />

      <button @click="login">Sign In</button>

      <div class="create-account">
        New to this site?
        <router-link :to="{ name: 'Register' }">Sign Up</router-link>.
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "UserManagement",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      error: null,
    };
  },
  methods: {
    async login() {
      console.log("login button was clicked");
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);

        this.$router.push("/");
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
.create-account {
  margin-top: 25px;
  margin-left: 25px;
  border: solid 1px white;
  padding: 10px;
  width: 300px;
}
</style>
