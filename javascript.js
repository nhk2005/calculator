let operand = Array(2), operator;
let operandIndex;

function clear() {
  operand[0] = "";
  operand[1] = "";
  operandIndex = 0;
  operator = "";
}

function showEquation() {
  document.querySelector(".equation").textContent = `${operand[0]} ${operator} ${operand[1]}`;
}

// "index" indicates whether the current digit button is pressed for 1st or 2nd operand
function pressDigit(digit) {
  operand[operandIndex] += digit;
  showEquation();
}

clear();

document.querySelectorAll(".digit").forEach((digitButton) => {
  digitButton.addEventListener("click", () => pressDigit(digitButton.textContent, operandIndex));
});