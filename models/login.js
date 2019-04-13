module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("Login", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // console.log("hi");
  return Login;
};
