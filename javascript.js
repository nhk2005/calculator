let operand = Array(2), operator, result;
let operandIndex;

function showEquation() {
  document.querySelector(".equation").textContent = `${operand[0]} ${operator} ${operand[1]}`;
}

function showResult() {
  document.querySelector(".result").textContent = result;
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

function computeResult() {
  if (operand[0] === "" || operand[1] === "" || operator === "") {
    return;
  }

  const number1 = Number(operand[0]);
  const number2 = Number(operand[1]);
  if (operator === "+") {
    result = number1 + number2;
  } else if (operator === "-") {
    result = number1 - number2;
  } else if (operator === "x") {
    result = number1 * number2;
  } else {
    result = number1 / number2;
  }

  showResult();
}

clear();

document.querySelector(".clear").addEventListener("click", () => clear());

document.querySelectorAll(".digit").forEach((digitButton) => {
  digitButton.addEventListener("click", () => pressDigit(digitButton.textContent));
});

document.querySelectorAll(".operator").forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => pressOperator(operatorButton.textContent));
});

document.querySelector(".equal").addEventListener("click", () => computeResult());