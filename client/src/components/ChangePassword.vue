<template>
  <div class="card">
    <div class="container">
      <h2>Change Password</h2>
      <br />
      <form @submit.prevent="change">
        <label for="">Email</label>
        <input
          class="disabled-email"
          type="email"
          v-model="$store.state.user.email"
          disabled
          required
        />
        <label for="">Old Password</label>
        <input type="password" v-model="password" required />
        <label for="">New Password</label>
        <input type="password" v-model="newPassword" required />
        <label for="">Confirm New Password</label>
        <input type="password" v-model="confirmPassword" required />

        <div class="error" v-html="error" />
        <div class="notification" v-if="pwchanged">
          Password has been changed successfully
        </div>

        <button type="submit">Change Password</button>
      </form>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "ChangePassword",
  data() {
    return {
      password: "",
      newPassword: "",
      confirmPassword: "",
      pwchanged: false,
      error: null,
    };
  },
  methods: {
    async change() {
      this.pwchanged = false;

      console.log("change button was clicked");
      try {
        const response = await AuthenticationService.change({
          email: this.$store.state.user.email,
          password: this.password,
          newPassword: this.newPassword,
          confirmPassword: this.confirmPassword,
        });

        this.$store.dispatch("setUser", response.data.user);
        this.error = "";
        this.pwchanged = true;

        console.log(response.data.user);
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

button {
  padding: 0;
  margin: 0;
}

form {
  margin: 0;
  padding: 0;
}

.card {
  position: relative;
  align-items: flex-start;
  padding: 25px;
  max-width: 1020px;
}

.disabled-email {
  color: rgba(0, 0, 0, 0.507);
}

.notification {
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  color: rgb(26, 212, 26);
  font-size: 0.8rem;
}
</style>
