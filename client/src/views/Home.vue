<template>
  <Navbar />
  <div class="home">
    <h1>Home page</h1>
    <p v-if="$store.state.isUserLogged">
      Welcome, {{ $store.state.user.username }} !
    </p>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
// @ is an alias to /src

export default {
  components: { Navbar },
  name: "Home",
};
</script>

<style>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
}
p {
  width: 500px;
  word-break: break-all;
}
</style>
