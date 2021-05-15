<template>
  <div class="card">
    <div id="delete-container" class="container">
      <h2>Delete Account</h2>
      <br />
      <button class="delete" @click="delete">Delete Account</button>

      <!-- <p>{{ $store.state.user }}</p> -->
    </div>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "DeleteAccount",
  data() {
    return {
      error: null,
    };
  },
  methods: {
    async delete() {
      try {
        const response = await AuthenticationService.delete({
          email: this.$store.state.user.email,
        });

        this.$store.dispatch("setToken", null);
        this.$store.dispatch("setUser", null);
        this.$router.push("/login");
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

#delete-container {
  align-self: flex-start;
  margin-top: 0;
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

.notification {
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  color: rgb(26, 212, 26);
  font-size: 0.8rem;
}
</style>
