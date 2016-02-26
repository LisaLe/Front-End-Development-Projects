var answer;
var equation = "";

$(document).ready(function() {
  $("#clear").click(function() {
    $(".equation").html("");
    answer = 0;
    equation = "0";
  });
  $("#1").click(function() {
    $(".equation").append("1");
    equation += "1";
  });
  $("#2").click(function() {
    $(".equation").append("2");
    equation += "2";
  });
  $("#3").click(function() {
    $(".equation").append("3");
    equation += "3";
  });
  $("#4").click(function() {
    $(".equation").append("4");
    equation += "4";
  });
  $("#5").click(function() {
    $(".equation").append("5");
    equation += "5";
  });
  $("#6").click(function() {
    $(".equation").append("6");
    equation += "6";
  });
  $("#7").click(function() {
    $(".equation").append("7");
    equation += "7";
  });
  $("#8").click(function() {
    $(".equation").append("8");
    equation += "8";
  });
  $("#9").click(function() {
    $(".equation").append("9");
    equation += "9";
  });

  $("#0").click(function() {
    $(".equation").append("0");
    equation += "0";
    console.log(equation);
  });

  //operators
  $("#divide").click(function() {
    $(".equation").append("/");
    equation += "/";
  });
  $("#multiply").click(function() {
    $(".equation").append("x");
    equation += "*";
  });
  $("#subtract").click(function() {
    $(".equation").append("-");
    equation += "-";
  });
  $("#plus").click(function() {
    $(".equation").append("+");
    equation += "+";
  });
  $("#decimal").click(function() {
    $(".equation").append(".");
    equation += ".";
  });

  $("#equal").click(function() {

    var leftside;
    var rightside;
    answer = math.eval(equation);
    console.log(equation);
    $(".equation").html(answer);


    //$(".equation").html(answer);

  });
});
