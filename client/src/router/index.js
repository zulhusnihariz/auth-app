import { createRouter, createWebHistory } from "vue-router";
//
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import UserManagement from "../views/UserManagement.vue";
import NotFound from "../views/NotFound";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/account",
    name: "UserManagement",
    component: UserManagement,
  },

  // redirect
  {
    path: "/signup",
    redirect: "/",
  },
  // catch all 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
