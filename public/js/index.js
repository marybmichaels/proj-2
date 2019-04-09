// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $loginBtn = $("#login");
var $exampleList = $("#example-list");


var path = require("path");

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
        .addClass("text-center")
        .appendTo("#search-results");
    } else {
      for (i = 0; i < response.drinks.length; i++) {
        var results = response.drinks[i];

        var rec = $("<div>").attr({
          class: "result col-sm-3",
          id: results.id
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
          .appendTo(rec);

        $("#search-results").append(rec);
      }
    }
  });
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
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

var handleLogin = function() {
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login/index.html"));
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$loginBtn.on("click", handleLogin);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
