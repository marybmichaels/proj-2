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

  app.get("/saved/:user", function(req, res) {
    db.Drink.findAll({}).then(function(dbDrinks) {
      res.render("saved", {
        drinks: dbDrinks
      });
    });
  });

  app.get("/cocktail/:id", function(req, res) {
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
    res.render("login");
  });

  app.get("/registered", function(req, res) {
    res.render("results");
  });

  app.get("/register", function(req, res) {
    res.render("register");
  });

  app.get("/forgot", function(req, res) {
    res.render("forgot");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
