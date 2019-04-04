var request = require("request");

async function run(){

request(
"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + ,
function(error, response, body) {
  // if (!error && response.statusCode == 200) {
  //   console.log(body); // Print the google web page.
  // }
  console.log(error)
  console.log(response.statusCode)
  console.log(body)
}
);
}

run();

module.exports = run;