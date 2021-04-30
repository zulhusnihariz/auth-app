<template>
  <div class="login-card">
    <div class="container">
      <label for="">Email</label>
      <input type="email" v-model="email" autofocus required />
      <label for="">Password</label>
      <input type="password" v-model="password" required />
      <div class="error" v-html="error" />

      <button @click="login">Sign In</button>

      <div class="create-account">
        New to this site?
        <router-link :to="{ name: 'Login' }">Sign Up</router-link>.
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "LoginCard",
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

<style>
.login-card {
  width: 550px;
  height: 360px;
  background-color: hsl(235, 24%, 19%);
  margin: auto;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  align-content: center;
  margin: auto;
}

label {
  align-self: start;
  margin-left: 10px;
  margin-bottom: 10px;
}

label:first-child {
  margin-top: 25px;
}

input {
  border: none;
  outline: none;
  margin-bottom: 25px;
  width: 310px;
  height: 30px;
  margin-left: 25px;
}

button {
  border: none;
  margin-top: 10px;
  margin-left: 25px;
  width: 320px;
  height: 35px;
  background-color: rgba(35, 134, 54);
  color: white;
  font-weight: bold;
}

button:hover {
  background-color: rgba(35, 134, 54, 0.7);
}

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
</style>
