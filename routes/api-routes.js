// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config");
// eslint-disable-next-line no-unused-vars
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM project2";

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

    var dbQuery = "INSERT INTO project2 (name, email, password) VALUES (?,?,?)";

    connection.query(
      dbQuery,
      [req.body.name, req.body.email, req.body.password],
      // eslint-disable-next-line no-unused-vars
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
