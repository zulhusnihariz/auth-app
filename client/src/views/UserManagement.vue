<template>
  <Navbar />
  <div class="home">
    <h1>Account Setting</h1>

    <UserManagementCard />

    <!-- <ul v-if="$store.state.isUserLogged"> -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import UserManagementCard from "../components/UserManagementCard";

// @ is an alias to /src

export default {
  name: "UserManagement",
  components: { Navbar, UserManagementCard },
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
li {
  display: inline-block;
  width: 100px;
}

.container {
  width: 300px;
}
</style>
