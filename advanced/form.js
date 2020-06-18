$("#formCar").hide();
$("#formTruck").hide();

$(document).ready(function() {




  $("#buttonCar").click(function() {
    $("#formCar").toggle();
  });




  $("#buttonTruck").click(function() {
    $("#formTruck").toggle();
  });

});