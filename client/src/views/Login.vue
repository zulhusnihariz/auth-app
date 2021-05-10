<template>
  <Navbar />
  <div class="login">
    <h1>Login page</h1>
    <LoginCard />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCard";

export default {
  name: "Login",
  components: {
    Navbar,
    LoginCard,
  },
};
</script>
