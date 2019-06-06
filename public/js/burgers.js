// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-deveoured").on("click", function(event) {
      var id = $(this).data("id");
  
      var burgerState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/bugers/" + id, {
        type: "PUT",
        data: burgerState
      }).then(
        function() {
          console.log("changed devour to", true);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var name =  $("[name=burger-name]").val().trim();
      if(name !== "") {
        var newBurger = {
            name: name
        };
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
    else {
        $("[name=burger-name]").val("");
    }
});
$(".devourBurger").on("click", function(event) {
  var id = $(this).data("burgerid");

  var updateBurg = {
  
    devoured: 1
  };
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: updateBurg
  }).then(
    function() {
      console.log("updated id ", id);
      location.reload();
    }
  );
});   
        });
