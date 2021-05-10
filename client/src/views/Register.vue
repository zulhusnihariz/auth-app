<template>
  <Navbar />
  <div class="login">
    <h1>Create your account</h1>
    <RegisterCard />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";

import RegisterCard from "../components/RegisterCard";

export default {
  name: "Register",
  components: { Navbar, RegisterCard },
};
</script>
