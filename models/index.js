"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
const bodyParser = require("body-parser");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};
const Nexmo = require('nexmo');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const nexmo = new Nexmo({
  apiKey: 'f8bc50bb',
  apiSecret: 'GwbxaTmNsvI9yDai'
})


if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    process.env.MYSQL_PASSWORD,
    config,
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });


Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
