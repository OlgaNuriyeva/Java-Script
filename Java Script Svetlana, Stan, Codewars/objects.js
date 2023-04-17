// For loop in objects
let person = {
    name: "Anna",
    lastname: "Smith",
    age: 25
}
for (let key in person) {
    console.log(person[key]);
}

let str = "Hello world, how are you?"
let newObject = {}
for (let i=0; i<str.length; i++) {
    newObject[i+1] = str[i]
}
console.log(newObject);
console.log(Object.keys(newObject));
console.log(Object.values(newObject));

//Filter at the array
function divisibleBy(numbers, divisor){
    return numbers.filter(el => el % divisor == 0)
    }

    function getCount(str) {
        return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
       }