// Business (or back-end) logic:

var add = function(num1, num2) {
	return num1 + num2;
}

var subtract = function(num1, num2) {
  return num1 - num2;
}


var multiply = function(num1, num2) {
  return num1 * num2;
}

var divide = function(num1, num2) {
  return num1 / num2;
}

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());
    
    var result = add(num1, num2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#subtract1").val());
    var num2 = parseInt($("#subtract2").val());
    
    var result = subtract(num1, num2);
    $("#output").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#multiply1").val());
    var num2 = parseInt($("#multiply2").val());
    
    var result = multiply(num1, num2);
    $("#output").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#divide1").val());
    var num2 = parseInt($("#divide2").val());
    
    var result = divide(num1, num2);
    $("#output").text(result);
  });
});




