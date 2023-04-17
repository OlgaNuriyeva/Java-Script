let countOpen = 0;
let countClose = 0;
let result1 = 0;
let result2 = 0;
let result3 = 0;

let arr = ['{', ')', '(', ')', ')', '}', '[', ']', ')'];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == '(') countOpen += 1
//   else if (arr[i] == ')') countClose += 1
//   result = countOpen-countClose
//   console.log(result);
//   if (result < 0) {
//     console.log('Wrong sequence');
//     break;
//   }
// }
// if (countOpen == countClose) {
//   console.log('Equal');
// }

for (let i in arr) {
if (arr[i] == '(') result1++
else if (arr[i] == ')') result1--
// if (result1 < 0) {
//   console.log('Wrong sequence of "()"');
//   break;
// }
if (arr[i] == '{') result2++
else if (arr[i] == '}') result2--
// if (result2 < 0) {
//   console.log('Wrong sequence of "{}"');
//   break;
// }
if (arr[i] == '[') result3++
else if (arr[i] == ']') result3--
// if (result3 < 0) {
//   console.log('Wrong sequence of "[]"');
//   break;
// }
if (result1 < 0 || result2 < 0 || result3 < 0) { 
  console.log('Wrong sequence')
break;
}
console.log(result1, result2, result3);
}

if (result1 == 0 && result2 == 0 && result3 == 0) console.log('All are equal');
else if (result1 > 0 || result2 > 0 || result3 > 0) console.log('All are not equal');
