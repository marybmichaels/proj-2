var db = require("../models");
// eslint-disable-next-line no-unused-vars
var express = require("express");
// eslint-disable-next-line no-unused-vars
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("results");
  });

  app.get("/saved", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("saved", {
        drinks: dbExamples
      });
    });
  });

  app.get("/:id", function(req, res) {
    var id = req.params.id;
    res.render("view-recipe");
    console.log("you made it here :" + id);
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

  app.get("/login", function(req, res) {
    res.render("../views/login/app/public/index.html");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
