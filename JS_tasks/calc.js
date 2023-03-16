/**
 * CALCULATOR
 *
 * In:
 * - число
 * - число
 * - операція
 *
 * Out:
 * - результат
 */

//в цій функції треба позбутись алєртів і видавати конкретне значення
// function calc(num1, operation, num2) {
//   num1 = validateNumber(num1)
//   num2 = validateNumber(num2)
//   operation = prompt("You can calc here only: +, -, *, /")

//   switch (operation) {
//     case "+":
//       return num1 + num2
//     case "-":
//       return num1 - num2
//     case "*":
//       return num1 * num2
//     case "/":
//       return num1 / num2
//     default:
//       console.error("Operation invalid. You can calc here only: +, -, *, /")
//   }
// }

// while (confirm(`Do you want to calc some?`)) {
//   aletr(`You got: ${calc()}`)
// }

function validateNumber(value) {
  value = parseInt(value)
  while (!Number.isInteger(value)) {
    value = parseInt(prompt("You are wrong! Give me a number."))
  }
  return value
}
function sum(num1, num2) {
  return num1 + num2
}
function subtract(num1, num2) {
  return num1 - num2
}
function multiply(num1, num2) {
  return num1 * num2
}
function divide(num1, num2) {
  return num1 / num2
}

function calculate(num1, operation, num2) {
  debugger
  switch (operation) {
    case "+":
      return sum(num1, num2)
    case "-":
      return subtract(num1, num2)
    case "*":
      return multiply(num1, num2)
    case "/":
      return divide(num1, num2)
    default:
      console.error("Operation invalid. You can calc here only: +, -, *, /")
  }
}

function getNumber() {
  return validateNumber(prompt("Give me a number"))
}

while (confirm(`Do you want to calc some?`)) {
  let number1 = getNumber()
  let number2 = getNumber()
  let operator = prompt("You can calc here only: +, -, *, /")
  alert(`You got: ${calculate(number1, operator, number2)}`)
}
