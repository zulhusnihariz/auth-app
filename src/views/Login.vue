<template>
  <div class="login">
    <h1>Login page</h1>
    <LoginCard />
  </div>
</template>
<script>
import LoginCard from "../components/LoginCard";

export default {
  name: "Login",
  components: {
    LoginCard,
  },
};
</script>
