// kalkulator.js

let displayValue = "0";
let operator = "";
let firstNumber = "";
let secondNumber = "";
let history = [];

function appendToDisplay(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  document.getElementById("display").innerText = displayValue;
}

function toggleSign() {
  if (displayValue !== "0") {
    displayValue = -parseFloat(displayValue);
    document.getElementById("display").innerText = displayValue;
  }
}

function setOperator(op) {
  operator = op;
  firstNumber = displayValue;
  displayValue = "0";
  document.getElementById("display").innerText = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  operator = "";
  firstNumber = "";
  secondNumber = "";
  document.getElementById("display").innerText = displayValue;
}

function calculateResult() {
  secondNumber = displayValue;
  let result = 0;
  switch (operator) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    default:
      console.error("Invalid operator");
  }
  displayValue = result.toString();
  document.getElementById("display").innerText = displayValue;
  addHistory(firstNumber, operator, secondNumber, result);
}

function addHistory(num1, op, num2, result) {
  const historyRow = `
    <tr>
      <td>${num1}</td>
      <td>${op}</td>
      <td>${num2}</td>
      <td>${result}</td>
    </tr>
  `;
  document.getElementById("historyBody").innerHTML += historyRow;
  history.push({ num1, op, num2, result });
}