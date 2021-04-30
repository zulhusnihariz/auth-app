<template>
  <div class="home">
    <h1>Home page</h1>
    <span>Login status: {{ $store.state.isUserLogged }}</span>
    <br />
    <span>Token:</span>
    <p>{{ $store.state.token }}</p>
    <br />
    <span>User:</span>
    <p>{{ $store.state.user }}</p>

    <p></p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style scoped>
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
