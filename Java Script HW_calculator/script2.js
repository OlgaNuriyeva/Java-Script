// let number1;
// let number2;
// let operator;
// let result;

// function calculator(number1, number2, operator) {
//   if (operator == '+') {
//     result = number1 + number2;
//     console.log(`Result is ${result}`);
//     return result;
//   } else if (operator == '-') {
//     result = number1 - number2;
//     console.log(`Result is ${result}`);
//   } else if (operator == '*') {
//     result = number1 * number2;
//     console.log(`Result is ${result}`);
//   } else if (operator == '/') {
//     result = number1 / number2;
//     console.log(`Result is ${result}`);
//   } else if (number2 == 0) {
//     console.log("You can't divide on zero!");
//   } else if (
//     operator != '+' ||
//     operator != '-' ||
//     operator != '*' ||
//     operator != '/'
//   ) {
//     console.log('Please use a valid operator');
//   }
// }
// calculator(40, 4, '/');

function sum(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b == 0) {
    return 'Division by 0 is not allowed! Enter an another number!';
  } else return a / b;
}

function calc(a, b, sign) {
  let result = 0;
  if (isNaN(a) || isNaN(b)) result = 'Please enter a number';
  else {
    if (sign == '+') result = sum(a, b);
    else if (sign == '-') result = substract(a, b);
    else if (sign == '*') result = multiply(a, b);
    else if (sign == '/') result = divide(a, b);
    else result = 'Please enter the correct sign!';
  }
  return result;
}
console.log(calc(56, 0, '/'));
