<template>
  <div class="login">
    <h1>Create your account</h1>
    <RegisterCard />
  </div>
</template>
<script>
import RegisterCard from "../components/RegisterCard";
import axios from "axios";
export default {
  name: "Register",
  components: { RegisterCard },
};
</script>
