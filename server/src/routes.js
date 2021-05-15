const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );

  app.post("/login", AuthenticationController.login);

  app.post(
    "/account/change",
    AuthenticationControllerPolicy.change,
    AuthenticationController.change
  );

  app.post("/account/delete", AuthenticationController.delete);
};
