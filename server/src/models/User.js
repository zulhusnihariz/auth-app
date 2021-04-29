module.exports = (sequelize, DataTypes) =>
  sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  });
