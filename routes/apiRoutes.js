var db = require("../models");
var request = require("../models/apicall");

module.exports = function(app) {
  // eslint-disable-next-line no-unused-vars
  app.get("/api/", function(_req, _res) {
    console.log(request);
  });

  // Get all examples
  app.get("/api/search", function(_req, res) {
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
};
