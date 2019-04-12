// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM formInfo";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a chirp
  app.post("/api/new", function(req, res) {
    console.log("Chirp Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO formInfo (name, email, password) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.name, req.body.email, req.body.password], function(err, result) {
      if (err) throw err;
      console.log("Chirp Successfully Saved!");
      res.end();
    });
  });
};
