let operand = Array(2), operator, result;
let operandIndex;

function showDisplay() {
  document.querySelector(".equation").textContent = `${operand[0]} ${operator} ${operand[1]}`;
  document.querySelector(".result").textContent = result;
}

function clear() {
  operand[0] = "";
  operand[1] = "";
  operandIndex = 0;
  operator = "";
  result = "";

  showDisplay();
}

function pressDigit(digit) {
  if (result !== "") {
    return;
  }
  if (document.querySelector(".result").textContent === "Don't divide by 0 lol") {
    return;
  }

  operand[operandIndex] += digit;
  showDisplay();
}

function pressOperator(newOperator) {
  if (operand[0] === "") {
    return;
  }
  if (document.querySelector(".result").textContent === "Don't divide by 0 lol") {
    return;
  }

  if (result === "") {
    operator = newOperator;
    operandIndex = 1;
    showDisplay();
  } else {
    operand[0] = result;
    operand[1] = "";
    operator = newOperator;
    result = "";
    showDisplay();
  }
}

function computeResult() {
  if (operand[0] === "" || operand[1] === "" || operator === "") {
    return;
  }
  if (document.querySelector(".result").textContent === "Don't divide by 0 lol") {
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
    if (number2 === 0) {
      document.querySelector(".result").textContent = "Don't divide by 0 lol";
      return;
    }

    result = number1 / number2;
  }

  showDisplay();
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