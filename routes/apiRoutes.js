/* eslint-disable no-unused-vars */
var db = require("../models");
// var request = require("request");

// var request = require("../models/apicall");

module.exports = function(app) {
  // Get all saved drinks
  app.get("/savedrecipes/:user", function(_req, res) {
    db.Drink.findAll({
      where: {
        userID: req.params.user
      }
    }).then(function(dbDrinks) {
      res.json(dbDrinks);
    });
  });

  // Save a new Drink
  app.post("/save", function(req, res) {
    db.Drink.create({
      userID: "1",
      drinkID: req.body.id,
      name: req.body.name,
      imageURL: req.body.image,
      URL: req.body.url
    }).then(function(dbDrink) {
      res.json(dbDrink);
    });
  });

  // Remove a saved drink
  app.delete("/remove/:user/:id", function(req, res) {
    db.Drink.destroy({
      where: {
        userID: req.params.user,
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/login/:id", function(req, res) {
    // code
  });

  // Get all chirps
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM formInfo";

    connection.query(dbQuery, function(err, result) {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  });

  // Add a chirp
  app.post("/api/new", function(req, res) {
    console.log("Chirp Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO formInfo (name, email, password) VALUES (?,?,?)";

    connection.query(
      dbQuery,
      [req.body.name, req.body.email, req.body.password],
      function(err, result) {
        if (err) {
          throw err;
        }
        console.log("Chirp Successfully Saved!");
        res.end();
      }
    );
  });
};
