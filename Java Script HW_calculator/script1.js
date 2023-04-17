//Calculator
let number1, number2;
number1 = 500;
number2 = 0;
let result;
let operator = '&';

switch (operator) {
  case '*':
    result = number1 * number2;
    console.log(`Result is ${result}`);
    break;
  case '+':
    result = +number1 + +number2;
    console.log(`Result is ${result}`);
    break;
  case '-':
    result = number1 - number2;
    console.log(`Result is ${result}`);
    break;
  case '/':
    if (number2 != 0) result = number1 / number2;
    else result = "we can't divide on Zero";
    console.log(`Result is ${result}`);
    break;

  default:
    console.log(`Please enter a valid operator`);
}

// if (operator === '+')  {
//   result = parseFloat(number1) + parseFloat(number2);
//   console.log(`Result is ${result}`);
//   }
// else if (operator === '*') {
//   result = parseFloat(number1) * parseFloat(number2);
//   console.log(`Result is ${result}`);
//   }
// else if (operator === '-') {
//   result = parseFloat(number1) - parseFloat(number2);
//   console.log(`Result is ${result}`);
//   }
// else if (operator === '/' && number1 !== 0 && number2 !== 0) {
//   result = parseFloat(number1) / parseFloat(number2);
//   console.log(`Result is ${result}`);
//   }
// else {
//   console.log("Result is an error");
//   }
