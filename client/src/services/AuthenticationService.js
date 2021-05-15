import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  },
  login(credentials) {
    return Api().post("login", credentials);
  },
  change(credentials) {
    return Api().post("account/change", credentials);
  },
  delete(credentials) {
    return Api().post("account/delete", credentials);
  },
};
