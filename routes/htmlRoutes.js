var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  //get php files
  // app.get("/login", function(req, res) {
  //   res.render("index.php");
  // });

  app.get("/login.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login/index.html"));
  });

  app.get("/register.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login/register.html"));
  });

  app.get("/forgot.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login/forgot.html"));
  });

  app.get("/reset.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login/reset.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
