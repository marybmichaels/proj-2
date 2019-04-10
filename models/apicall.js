function viewRecipe(id) {
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(res) {
    console.log("hgcvmhvbgc"+res);
  });
}

module.exports = viewRecipe;
