$("#formCar").hide();
$("#formTruck").hide();

$(document).ready(function() {




  $("#buttonCar").click(function() {
    $("#formTruck").hide();
    $("#formCar").toggle();
  });




  $("#buttonTruck").click(function() {
    $("#formCar").hide();
    $("#formTruck").toggle();
  });

});