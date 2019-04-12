module.exports = function(sequelize, DataTypes) {
  var Drink = sequelize.define("Drink", {
    userID: {
      type: DataTypes.INTEGER
    },
    drinkID: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    URL: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // console.log("hi");
  return Drink;
};
