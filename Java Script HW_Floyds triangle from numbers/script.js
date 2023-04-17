let num = 5;
let str = '';
let space = ' ';
let count = 0;
// for (let i = 1; i <= num; i++) {

// for (let j = 1; j<= i; j++)
// {
//     //str += "";
//     str += ++count
//     str += j === i? "\n":" "
// }
// }
// console.log(str);

for (let i = 0; i <= num; i++) {
  let x = i;
  for (let j = 1; j <= i; j++) {
    str += x + space;
    x = x + (num - j);
  }
  str += '\n';
}
console.log(str);
