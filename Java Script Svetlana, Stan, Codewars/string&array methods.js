console.log('\n indexOf=============================\n');
let arr = [80, 117, 115, 104, 45, 85, 112, 115];
function check(a, x) {
  return a.indexOf(x) >= 0;
}
console.log(check(arr, 104));
console.log(check(arr, 100));

console.log('\n includes============================\n');
function check1(a, x) {
  return a.includes(x)
}
console.log(check(arr, 20))
console.log(check(arr, 112))

console.log("\n=============Wolves & ships==============\n");
function warnTheSheep(queue) {
  if (queue[queue.length-1] == 'wolf') {
    return "Pls go away and stop eating my sheep"
  }
     else {
       let a = queue.length - (queue.indexOf('wolf')+1)
       return `Oi! Sheep number ${a}! You are about to be eaten by a wolf!`
  }
     }

console.log("\n===========Reverse of words&letters============\n");
let newArray = ['tail', 'body', 'head']
function fixTheMeerkat(arr) {
  let arrTemp = []
  for(let i=0; i<arr.length; i++) {
    //arr[i] = arr[i].split("").reverse().join('')
    arrTemp.push(arr[i].split("").reverse().join(''))
}
return arrTemp //arr
 }
console.log(fixTheMeerkat(newArray));

console.log("\n===========Reverse of words===============\n");

let arr4 = ["tail", "body", "head"]
function fixTheMeerkat(arr) {
 return arr.reverse()
}
console.log(fixTheMeerkat(arr4));

console.log("\n==============Map==============\n");

let numString = 3524897;
function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}
console.log(digitize(numString));

console.log("\n==============Array methods===========================\n");
let array = [10, "PM", 8, "GT", 45, 288]
console.log(array.length);
console.log(array[0]);
array.length = 4; // обрезает элементы, которые не входят в это число
console.log(array);
//обращение к последнему элементу
console.log(array.at(-1));
console.log(array[array.length-1])

array.push(678, "Hello", 23) // добавляет элементы в конец
console.log(array);

array.unshift("good", 100) //добавляет элементы в начало
console.log(array);

array.pop()  //удаляет элемент в конце
console.log(array);

array.shift() // удаляет элемент в начале
console.log(array);
console.log(array.shift())
console.log(array);

let ar01 = [45, 12, 88, 95]
let ar02 = ["Go", "Book"]
let ar03 = ar01.concat(ar02, "Hello", "JavaScript") //можно сразу добавлять новые элементы
console.log(ar03);

console.log(ar03.reverse());

let text01 = "Hello JavaScript"
console.log(text01.split(" ").join(""));//split from string to array//join-from array to string

console.log("\n===============Stairs=======================\n");

function createStairs1(n) {
  let str=""
  for (let i=0; i<=n; i++)
  str += " ".repeat(i)+"I"+"\n"
  return str
}
console.log(createStairs1(5));

function createStairs2(n) {
  let arr=[]
  for (let i=0; i<=n; i++) {
  arr.push(" ".repeat(i) + "I")
}
return arr
}
console.log(createStairs2(5).join("\n"));

console.log("\n===============Slice/Spice=======================\n");

const arr04 = ['t', 'e', 's', 't']
const arr04New = arr04.slice();//slice усли в скобках не указывать значения, создается копия массива
console.log(arr04);
arr04[0] = "T";
console.log(arr04New);
console.log(arr04.slice());

const arr05 = ['J', "A", "V", "A", "S", "C"]
arr05.splice(0, 2, "Q", "W")
console.log(arr05);

console.log("\n===============IndexOf/LastIndexOF=======================\n");
const arr06 = "Hello world!".split("")
console.log(arr06.indexOf("l"));//идет слева на право
console.log(arr06.lastIndexOf('l')); //идет от конца

let idx = arr06.indexOf("l")
while (idx != -1) { //-1 когда элемента нет в массиве
  console.log(idx);
  idx = arr06.indexOf('l', idx+1) // второй параметр/шаг-ищет остальные элементы
}
if (arr06.indexOf('H' == arr06.lastIndexOf('H'))) {
  console.log("Unique");
}

console.log("\n===============Filter=======================\n");
const arr07 = [7, 23, 48, 2, 100, 101, 99]
const isOdd = (element) => element%2 === 1;
console.log(arr07.filter((element)=>element%2===1));
