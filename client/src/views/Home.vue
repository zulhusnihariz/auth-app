<template>
  <div class="home">
    <h1>Home page</h1>
    <p v-if="$store.state.isUserLogged">
      Welcome, {{ $store.state.user.username }} !
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
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
