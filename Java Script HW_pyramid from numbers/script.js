let raws = 9;
let str = '';

for (let i = 1; i <= raws; i++) {
  for (let j = raws - i; j > 0; j--) {
    str += ' ';
  }
  for (let k = 1; k <= i; k++) {
    str += k;
  }
  for (let j = 1; j <= raws - i; j++) {
    str += '';
  }
  for (let k = i; k >= 1; k--) {
    str += k;
  }

  str += '\n';
}
console.log(str);

for (let i = 0; i <= raws; i++) {
  for (let j = 0; j < i; j++) {
    str += ' ';
  }
  for (let k = 1; k <= raws - i; k++) {
    str += k;
  }
  for (let i = raws; i >= 1; i--) {
    str += '';
  }
  for (let j = raws - i; j >= 1; j--) {
    str += j;
  }
  str += '\n';
}
console.log(str);

// Левый верхний треугольник правильный
// for (let i = 1; i <= raws; i++) {

//   for (let j = raws - i; j > 0; j--) {
//     str += " "
//   }
//     for (let k = 1; k<=i; k++) {
//       str += k
//     }
//   str += "\n"

// }
// console.log(str)

// Правый верхний треугольник правильный
// for (let i = 1; i <= raws; i++) {
//   for (let j = 1; j <= raws-i; j++) {
//     str += '';
//   }
//   for (let k = i; k >= 1; k--) {
//     str += k;
//   }
//   str += '\n';
// }
// console.log(str)

// Левый нижний треугольник правильный
// for (let i = 0; i <= raws; i++) {
//   for (let j = 0; j < i; j++) {
//     str += ' ';
//   }
//   for (let k = 1; k <= raws-i; k++) {
//     str += k;

//   }
//   str += '\n';
// }
// console.log(str)

// Правый нижний треугольник правильный
// for (let i=raws; i>=1; i--) {
//   for (j = i; j>=1; j--) {
//     str += j+""
//   }
//   str +="\n"
// }
// console.log(str);
