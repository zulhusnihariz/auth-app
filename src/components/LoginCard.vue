<template>
  <div class="login-card">
    <div class="container">
      <label for="">Username or Email</label>
      <input type="text" required />
      <label for="">Password</label>
      <input type="password" required />
      <button>Sign In</button>

      <div class="create-account">
        New to this site?
        <router-link :to="{ name: 'Register' }">Create an account</router-link>.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginCard",
};
</script>

<style>
.login-card {
  width: 550px;
  height: 360px;
  background-color: hsl(235, 24%, 19%);
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
  margin-left: 25px;
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

.create-account {
  margin-top: 25px;
  margin-left: 25px;
  border: solid 1px white;
  padding: 10px;
  width: 300px;
}

a {
  text-decoration: none;
  color: #5079c9;
}

a:hover {
  text-decoration: underline;
}
</style>
