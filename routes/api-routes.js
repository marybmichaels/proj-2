// // / Dependencies
// // =============================================================
// var connection = require("../models");

// // Routes
// // =============================================================
// module.exports = function(app) {
//   // Get all chirps
//   app.get("/results", function(req, res) {
//     var dbQuery = "SELECT * FROM formInfo";

//     connection.query(dbQuery, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       res.json(result);
//       console.log(connection);
//     });
//   });

//   // Add a chirp
//   app.post("/results", function(req, res) {
//     console.log("Chirp Data:");
//     console.log(req.body);

//     var dbQuery = "INSERT INTO formInfo (name, email, password) VALUES (?,?,?)";

//     connection.query(
//       dbQuery,
//       [req.body.name, req.body.email, req.body.password],
//       // eslint-disable-next-line no-unused-vars
//       function(err, result) {
//         if (err) {
//           throw err;
//         }
//         console.log("Chirp Successfully Saved!");
//         res.end();
//       }
//     );
//   });
// };
