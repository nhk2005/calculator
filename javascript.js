let operand = Array(2), operator;
let operandIndex;

function showEquation() {
  document.querySelector(".equation").textContent = `${operand[0]} ${operator} ${operand[1]}`;
}

function clear() {
  operand[0] = "";
  operand[1] = "";
  operandIndex = 0;
  operator = "";

  showEquation();
}

// "index" indicates whether the current digit button is pressed for 1st or 2nd operand
function pressDigit(digit) {
  operand[operandIndex] += digit;
  showEquation();
}

function pressOperator(newOperator) {
  if (operand[0] === "") {
    return;
  }

  operator = newOperator;
  showEquation();
  operandIndex = 1;
}

clear();

document.querySelector(".clear").addEventListener("click", () => clear());

document.querySelectorAll(".digit").forEach((digitButton) => {
  digitButton.addEventListener("click", () => pressDigit(digitButton.textContent));
});

document.querySelectorAll(".operator").forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => pressOperator(operatorButton.textContent));
});