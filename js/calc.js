'use strict';
$(function(){

  var calculator = new Calculator();

   // get input
});

// your code here!
var errorSet;
function Calculator(){
  $('#equals').click(this.doOperation.bind(this));
}

function displayError(error){
  if(!errorSet){
    $('#result').text(error);
    errorSet = true;
  }
}

function displayResult(result){
  $('#result').text(result);
}

function validateNumber(number){
  return $.isNumeric(number);
}

Calculator.prototype.getInput = function(form){
  var num1 = $('#number1').val();
  var num2 = $('#number2').val();
  if (validateNumber(num1) && validateNumber(num2)) {
    this.number1 = Number(num1);
    this.number2 = Number(num2);
    this.operation = $('#operation').val();
  } else {
    displayError("Sorry, one of those is not a valid number!");
  }
}

Calculator.prototype.add = function() {
  return this.number1 + this.number2;
};

Calculator.prototype.subtract = function() {
  return this.number1 - this.number2;
};

Calculator.prototype.multiply = function() {
  return this.number1 * this.number2;
};

Calculator.prototype.divide = function() {
  return this.number1 / this.number2;
};

// Calculator.prototype.checkNumbers = function () {
//   if(isNaN(this.number1) || isNaN(this.number2)) { displayError("Sorry, one of those is not a valid number!"); }
// };

Calculator.prototype.calculate = function() {
  if(this.operation=="+"){
    var solution = this.add();
  } else if(this.operation=="-"){
    var solution = this.subtract();
  } else if(this.operation=="*"){
    var solution = this.multiply();
  } else if(this.operation=="/"){
    var solution = this.divide();
  } else { displayError("Sorry, not a valid operation!"); }
  displayResult(solution);
};

Calculator.prototype.doOperation = function(){
  errorSet = null;
  this.getInput();
  this.calculate();
};
