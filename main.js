let submitButton = document.getElementById("submit-button");
let reset = document.getElementById("resetButton")

function calcAmount() {
  let billAmount = document.getElementById("bill-amount").value
  let tipAmount =  billAmount *  (document.getElementById("tip-percentage").value/100); 
  let totalAmount = Number(billAmount) + Number(tipAmount);
  document.getElementById("dispTwo").innerHTML = "Your tip amount was " + tipAmount;
  document.getElementById("disp").innerHTML = "Your total amount is " + totalAmount;
}

function allFunctions() {
  calcAmount();
}

reset.addEventListener("click", resetGame)
billAmount = document.getElementById("bill-amount")
tipAmount = document.getElementById("tip-percentage")
 
function resetGame(){
  document.getElementById("disp").innerHTML = "";
  document.getElementById("dispTwo").innerHTML = "";
  billAmount.value = "";
  tipAmount.value = "";
  
} 