<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Login' }" v-if="!$store.state.isUserLogged"
      >Login</router-link
    >
    |
    <router-link :to="{ name: 'Register' }" v-if="!$store.state.isUserLogged"
      >Register</router-link
    >
    <router-link
      :to="{ name: 'Login' }"
      v-if="$store.state.isUserLogged"
      @click="logOut"
      >Logout</router-link
    >
  </div>
  <router-view />
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push("/login");
    },
  },
};
</script>

<style>
body {
  background-color: hsl(235, 21%, 11%);
}
#app {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #5079c9;
}
</style>
