<template>
  <div class="card">
    <div class="container">
      <h2>Change Password</h2>
      <label for="">Email</label>
      <input
        class="disabled-email"
        type="email"
        v-model="$store.state.user.email"
        disabled
        required
      />
      <label for="">Old Password</label>
      <input type="password" required />
      <label for="">New Password</label>
      <input type="password" required />
      <label for="">Confirm New Password</label>
      <input type="password" required />
      <div class="error" v-html="error" />
      <button @click="change">Change Password</button>
    </div>
    <div id="delete-container" class="container">
      <h2>Delete Account</h2>
      <br />
      <button class="delete" @click="deleteUser">Delete Account</button>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "UserManagementCard",
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
label,
input {
  margin: 0;
  margin-bottom: 15px;
}

h2 {
  margin: 15px 0;
  padding: 0;
}

.card,
.container {
  max-width: 1200px;
}

button {
  padding: 0;
  margin: 0;
}

#delete-container {
  justify-content: start;
  margin: 0;
  margin-left: 25px;
}

.delete {
  background-color: #21262d;
  color: red;
  margin-top: 12px;
}

.delete:hover {
  background-color: red;
  color: white;
}

.disabled-email {
  color: rgba(0, 0, 0, 0.507);
}
</style>
