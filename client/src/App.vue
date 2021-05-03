<template>
  <div id="nav">
    <router-link id="home" :to="{ name: 'Home' }">Home</router-link>
    <ul>
      <li :class="{ hidden: !$store.state.isUserLogged }">
        <router-link
          :to="{ name: 'UserManagement' }"
          v-show="$store.state.isUserLogged"
          >Account</router-link
        >
      </li>
      <li :class="{ hidden: !$store.state.isUserLogged }">
        <router-link
          :to="{ name: 'Login' }"
          v-show="$store.state.isUserLogged"
          @click="logOut"
          >Logout</router-link
        >
      </li>
      <li :class="{ hidden: $store.state.isUserLogged }">
        <router-link :to="{ name: 'Login' }" v-show="!$store.state.isUserLogged"
          >Login</router-link
        >
      </li>
      <li :class="{ hidden: $store.state.isUserLogged }">
        <router-link
          :to="{ name: 'Register' }"
          v-show="!$store.state.isUserLogged"
          >Register</router-link
        >
      </li>
    </ul>
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
  margin: 0;
  padding: 0;
}

#nav a.router-link-exact-active {
  color: #5079c9;
}

ul {
  margin: 0;
  padding: 0;
  margin-top: 25px;
  border: 1px white solid;
  padding: 15px 0;
}

li {
  list-style-type: none;
  display: inline-block;
  margin: 0 15px;
}

label {
  align-self: start;
  margin-left: 10px;
  margin-bottom: 10px;
}

label:first-child {
  margin-top: 25px;
}

input {
  border: none;
  outline: none;
  margin-bottom: 25px;
  width: 310px;
  height: 30px;
}

button {
  border: none;
  margin-top: 10px;
  margin-left: 25px;
  width: 320px;
  height: 35px;
  background-color: rgba(35, 134, 54);
  color: white;
  font-weight: bold;
}

button:hover {
  background-color: rgba(35, 134, 54, 0.7);
}

a {
  text-decoration: none;
  color: #5079c9;
}

a:hover {
  text-decoration: underline;
}

.card {
  display: flex;
  width: auto;
  height: auto;
  padding: 15px;
  background-color: hsl(235, 24%, 19%);
  max-width: 500px;

  margin: auto;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  align-content: center;
  margin: auto;
}

.hidden {
  margin: 0;
  width: 0;
}

.error {
  color: red;
  font-size: 0.8rem;
}

.create-account {
  margin-top: 25px;
  border: solid 1px white;
  padding: 10px;
  width: 300px;
}
</style>
