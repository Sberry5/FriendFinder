// Event listener for user submitting data
$("#submit").on("click", function(event) {
      event.preventDefault();

// Validate form
  function validateForm(){
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "")
        isValid = false;  
    });
    $(".chosen-select").each(function(){
      if ($(this).val() === "") {
        isValid = false;
      }
    })
    return isValid;
  }

   if (validateForm() == true){

// Create newUser data from user input
          var newUser = {
        newName: $("#newName").val().trim(),
        newPhoto: $("#newPhoto").val().trim(),
        surveyScores: [
        $("#question1").val(),
        $("#question2").val(),
        $("#question3").val(),
        $("#question4").val(),
        $("#question5").val(),
        $("#question6").val(),
        $("#question7").val(),
        $("#question8").val(),
        $("#question9").val(),
        $("#question10").val()
        ]
      };
      console.log("User Input: ", newUser);

// Post newUser into the friends API
      var currentURL = window.location.origin;
      $.post(currentURL + "/api/friends", newUser, function(data) {
        console.log(newUser);
      });
    }
      else {
        alert("Please fill out all fields before submitting.")
      }

// Clear form
        $("#newName").val("");
        $("#newPhoto").val("");
        $("#question1").val("");
        $("#question2").val("");
        $("#question3").val("");
        $("#question4").val("");
        $("#question5").val("");
        $("#question6").val("");
        $("#question7").val("");
        $("#question8").val("");
        $("#question9").val("");
        $("#question10").val("");
});