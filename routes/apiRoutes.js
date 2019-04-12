/* eslint-disable no-unused-vars */
var db = require("../models");
var request = require("request");

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
  app.get("/api/:id", function(_req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
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
