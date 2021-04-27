<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Login' }">Login</router-link> |
    <router-link :to="{ name: 'Register' }">Register</router-link>
  </div>
  <router-view />
</template>

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
