/*
Math Hint:
tip amount = Bill amount x (tip percentage / 100)

Requirements:
-You should have a form where a user is able to input the cost of the meal.
-The form should also let the user choose the percentage tip they want to give.
-When they submit the form, show them the total with tip added.
-Display the total tip amount as well so they know how much they're tipping.
*/
let billAmount = document.getElementById("bill-amount");
let tipPercent = document.getElementById("tip-percentage");
let submitButton = document.getElementById("submit-button");

function calcAmount() {
  let tipAmount = billAmount * (tipPercent/100);
  document.getElementById("disp").innerHTML =
    "Your total amount is " + tipAmount;
}

function allFunctions() {
  calcAmount();
}