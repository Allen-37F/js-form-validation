$(document).ready(function() {
  console.log("I'm ready, bitch!");

  $("form").on("submit", function(e) {
  	e.preventDefault();
    var submit;
    console.log("caught submit data")

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var message = " * Your first name is too short. Blame your parents!";
    var message2 = " * Your last name isn't quite right. Make sure it's capitalized and at least 5 characters long!"
    console.log("User is " + firstName, lastName);

    if (firstName.length < 4) {
      $('.error1').removeClass('hidden'); $('.error1').append(message + "<br>");
    };

    if (lastName.length < 5 || lastName[0].toUpperCase() !== lastName[0]) {
      $('.error1').removeClass('hidden'); $('.error1').append(message2 + "<br>");
    }

  });
});
