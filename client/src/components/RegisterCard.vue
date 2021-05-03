<template>
  <div class="card">
    <div class="container">
      <label for="">Username</label>
      <input type="text" v-model="username" autofocus required />
      <label for="">Email</label>
      <input type="email" v-model="email" required />
      <label for="">Password</label>
      <input type="password" v-model="password" required />
      <div class="error" v-html="error" />

      <button @click="register">Sign Up</button>

      <div class="create-account">
        Already have an account?
        <router-link :to="{ name: 'Login' }">Sign In</router-link>.
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "RegisterCard",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      error: null,
    };
  },
  methods: {
    async register() {
      console.log("register button was clicked");
      try {
        const response = await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password,
        });

        this.$router.push("/login");
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

a {
  text-decoration: none;
  color: #5079c9;
}

a:hover {
  text-decoration: underline;
}

.error {
  color: red;
  font-size: 0.8rem;
}
</style>
