<template>
  <div class="register-card">
    <div class="container">
      <label for="">Username</label>
      <input type="text" v-model="username" autofocus required />
      <label for="">Email</label>
      <input type="email" v-model="email" required />
      <label for="">Password</label>
      <input type="password" v-model="password" required />
      <button @click="registerUser">Sign Up</button>

      <div class="create-account">
        Already have an account?
        <router-link :to="{ name: 'Login' }">Sign In</router-link>.
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RegisterCard",
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    registerUser() {
      console.log("clicked");

      const data = [
        { username: this.username, password: this.password, email: this.email },
      ];

      console.log(data);
    },
  },
};
</script>

<style>
.register-card {
  width: 550px;
  height: 560px;
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
