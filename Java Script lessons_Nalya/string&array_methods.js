console.log("String methods=split===============================\n");
let string = "Hello - World"
console.log(string.split(""))
console.log(string.split(" "))
let newString = string.split("")
console.log(newString);
console.log(string.split("o"))
let newString2 = string.split('o') 

console.log("\nArray methods=join===============================\n");
console.log(newString2.join())
console.log(newString2.join(""))
console.log(newString2.join("*"))

console.log("\nArray methods=push===============================\n");
let letters = ['a', 'b', 'c', 'd']
letters.push('j', 'q')
letters.push(1,5)
letters.push(88)
let newLetters = letters.push('g')
console.log(letters);
console.log(newLetters);

console.log("\nArray methods=pop===============================\n");
let a = letters.pop()
console.log(letters)
console.log(a)
letters[1] = "B"
console.log(letters)
let t = []
t.push(a)
console.log(t);

console.log("\nArray methods=unshift===============================\n");

const bigLetters = ['A', 'B', 'C', 'D']
bigLetters.unshift('Z')
console.log(bigLetters);
let d = bigLetters.unshift('Q', 'R', 'T')
console.log(bigLetters);
console.log(d);

console.log("\nArray methods=shift===============================\n");

bigLetters.shift()
console.log(bigLetters);
let z = bigLetters.shift()
console.log(z);
bigLetters.shift()
console.log(bigLetters);

console.log("\nArray methods=concat===============================\n");

let girls = ["Lora", "Britnie"]
let boys = ['Mike', 'Bob']
frineds = ['Tim', 'Amir']
const myChildren = girls.concat(boys, frineds)
console.log(myChildren);
console.log(girls);

console.log("\nArray methods=spread===============================\n");

let arr1 = [5, 6, 7]
let arr2 = ['A', 'B', 'C']
console.log(...arr1);
const arr3 = [...arr1, ...arr2]
console.log(arr3);
const arr4 = [arr1, ...arr2]
console.log(arr4);

console.log("\nMethods=math===============================\n");

const numbers = [4,8,6,5,1,2,10]
console.log(numbers);
console.log(...numbers);
console.log(Math.max(4,8,6,5,1,2,10));
console.log(Math.max(numbers));
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

console.log("\nMethods=toString===============================\n");

let fruits = ["Banana", 'Orange', 'Apple', 'Kiwi']
console.log(fruits);
console.log(fruits.toString());

console.log("\nMethods=join===============================\n");

console.log(fruits);
console.log(fruits.join());
console.log(fruits.join('*'));

console.log("\nString Methods=lemgth===============================\n");
let txt = 'ADRGRTHUKHNFGBEARTRJ'
console.log(txt.length);

console.log("\nString Methods=slice===============================\n");

let fruits2 = "Banana, Orange, Apple, Kiwi"
let part = fruits2.slice(8)
console.log(fruits2);
console.log(part);
let part2 = fruits2.slice(8, 15)
console.log(part2);

console.log("\nString Methods=replace&replaceAll===============================\n");

let message = 'Please 5 visit 5 Microsoft!'
let newText = message.replaceAll('5', '9')
console.log(newText);
let newText2 = message.replace('5', '9')
console.log(newText2);
let newText3 = message.replaceAll(/microsoft/gi, 'Apple')
console.log(newText3);
// g=global i=insensitive

console.log("\nString Methods=charAt===============================\n");

let text = 'HELLO WORLD';
let letter = text.charAt(0);
console.log(letter, text[0]);

console.log("\nString Methods=repeat===============================\n");

let q = "Hi!"
console.log(q.repeat(4));
console.log(q.slice(1,2).repeat(4));

console.log("\nString Methods=trim===============================\n");

let text4 = "   Hello World!  ."
let result = text.trim()
console.log(text);
console.log(result);