const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize("authapp", "root", "", {
  dialect: "sqlite",
  host: "localhost",
  storage: path.join(__dirname, "..", "database_test.sqlite"),
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};

fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
