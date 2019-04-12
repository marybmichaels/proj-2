/* global moment */

// When the page loads, grab and display all of our chirps
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].name + " chirped.. </p>");
      row.append("<p>" + data[i].email + "</p>");
      row.append("<p>" + data[i].password + "</p>");

      $("#chirp-area").prepend(row);

    }

  }

});

// When user chirps (clicks addBtn)
$("#login-submit").on("click", function(event) {
  event.preventDefault();

  // Make a loginInput object
  var loginInput = {
    name: $("#name").val().trim(),
    email: $("#email").val().trim(),
    password: $("#password").val().trim()
  };

  console.log(loginInput);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", loginInput)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + loginInput.name + " chirped: </p>");
      row.append("<p>" + loginInput.email + "</p>");
      row.append("<p>" + loginInput.password + "</p>");

      $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#email").val("");
  $("#password").val("");
});
