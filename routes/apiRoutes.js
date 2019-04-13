/* eslint-disable no-unused-vars */
var db = require("../models");
// var request = require("request");

// var request = require("../models/apicall");

module.exports = function(app) {
  // eslint-disable-next-line no-unused-vars
  // app.get("/api/:input", function(req, res) {
  //   var drinkname = req.params.input;

  //   var queryURL =
  //     "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkname;
  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).then(function(response) {
  //     console.log(response);
  //   });
  //   // console.log(res);
  // });

  // Get all examples
  app.get("/savedrecipes/:user", function(_req, res) {
    db.Drink.findAll({
      where: {
        userID: req.params.user
      }
    }).then(function(dbDrinks) {
      res.json(dbDrinks);
    });
  });

  // Create a new example
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

  // Delete an example by id
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

  app.post("/results", function(req, res) {
    db.formInfo
      .create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      .then(function(dbformInfo) {
        res.json(dbformInfo);
      });
  });

  //   app.post("/send", (req, res) => {
  //     // send SMS
  //     const from = "13612354508";
  //     const to = "13216980087";
  //     const text = "Hello from Nexmo";

  //     nexmo.message.sendSms(from, to, text);
  //   });
};
