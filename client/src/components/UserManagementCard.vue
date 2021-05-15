<template>
  <ul class="account-setting">
    <li @click="changePassword">
      <router-link
        :to="{ name: 'ChangePassword' }"
        :class="{ active: !isActive }"
        >Change Password</router-link
      >
    </li>

    <li @click="deleteAccount">
      <router-link :to="{ name: 'DeleteAccount' }" :class="{ active: isActive }"
        >Delete Account</router-link
      >
    </li>
  </ul>
  <component :is="component"></component>
</template>

<script>
import ChangePassword from "../components/ChangePassword";
import DeleteAccount from "../components/DeleteAccount";

import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "UserManagementCard",
  components: {
    "change-password": ChangePassword,
    "delete-account": DeleteAccount,
  },
  data() {
    return {
      component: "change-password",
      isActive: true,
    };
  },

  methods: {
    changePassword() {
      this.isActive = !this.isActive;
      this.component = "change-password";
    },
    deleteAccount() {
      this.isActive = !this.isActive;
      return (this.component = "delete-account");
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

li {
  cursor: pointer;
}

.active {
  color: white;
}

.account-setting {
  position: absolute;
  display: block;
  transform: translate(-300px, 50px);
  text-align: left;
}

.account-setting li {
  display: block;
}
.account-setting li:not(:last-child) {
  margin-bottom: 10px;
}
</style>
