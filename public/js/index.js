// Press enter to search after input
$("form").on("submit", event => {
  event.preventDefault();
});

// on #search-btn click, save #search-input val
$("#search-btn").on("click", function() {
  var input = $("#search-input")
    .val()
    .trim();
  console.log(input);
  $("#search-input").val("");
  $("#search-results").empty();

  var queryURL =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + input;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    if (!response.drinks) {
      $("<p>")
        .text("We do not know of any drinks by the name of '" + input + "'.")
        .addClass("text-center result-par")
        .appendTo("#search-results");
    } else {
      for (i = 0; i < response.drinks.length; i++) {
        var results = response.drinks[i];

        var rec = $("<div>").attr({
          class: "result col-sm-3",
          id: results.idDrink
        });

        $("<h4>")
          .text(results.strDrink)
          .addClass("results-name")
          .appendTo(rec);

        $("<img>")
          .attr({
            src: results.strDrinkThumb,
            class: "rounded-circle img-responsive result-img"
          })
          .appendTo(rec)
          .click(function() {
            window.open(
              "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + id
            );
          });

        $("#search-results").append(rec);
      }
    }
  });
});

// If a result is clicked, then open "view recipe"
$(document).on("click", ".result", function() {
  var id = this.id;
  console.log(`
  ----------
  ID: ${id}
  ----------`);
  API.getDrink(id);
});

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    }).then(function() {
      location.reload();
    });
  },
  getDrink: function(id) {
    window.location = `/cocktail/${id}`;
  },
  delete: function(user, id) {
    return $.ajax({
      url: "../remove/" + user + "/" + id,
      type: "DELETE"
    }).then(function() {
      location.reload();
    });
  }
};

// If remove is clicked, then unsave recipe
$(document).on("click", ".remove", function() {
  var user = "1";
  var id = this.id;
  console.log(user, "/", id);
  API.delete(user, id);
});
