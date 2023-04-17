// let str = ['(',')','(',')',')'];
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == '(') {
//         count++;
//     }
//     if (str[i] == ')') {
//         count = count - 1;
//     }
//     if (count < 0) {
//         console.log(false);
//         break;
//     }
// }
// console.log(count);

// if (count != 0) {
//     console.log('false');
// }
// else {
//     console.log('true')
// }

let arr = ['(', ')', '(', ')', ')'];
let count1 = 0;
let count2 = 0;
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] == '(') {
    count1 += 1;
  } else if (arr[i] == ')') {
    count2 += 1;
  }
}
console.log(`Opening = ${count1}, closing = ${count2}`);
if (count1 == count2) {
  console.log('equal');
} else {
  console.log('not equal');
}
