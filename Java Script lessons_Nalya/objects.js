const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(JSON.stringify(a) == JSON.stringify(b));
console.log(JSON.stringify(a));
console.log(a.toString() === b.toString());
console.log(typeof a);

let x = JSON.stringify(a);
console.log(x[0]); // bracket is the first element of the array
console.log(a[0]);

console.log("\n==================Objects/Key+Value=Property===================\n");
let user = {
  name: 'John',
  age: 30,
  'high school': true, //если ключ состоит из нескольких слов, они указываются в кавычках.
};
console.log("original", user);

user.age = 45;
user.name = "Bill"
console.log("modified", user); //можно присвоить ключам объекта новые значения

/*что бы достать из массива ключ, состоящий из нескольких слов, 
нужно использовать квадратные скобки и кавычки*/

console.log(user['high school']);

//adding a new key
user.hello = "Hi"
console.log(user);

//delete operator

delete user.hello;
console.log("deleted", user);

//присваивание значения

const obj = {}
obj.name = "Will",
console.log(obj);
obj.age = 25 //через точку
console.log(obj);
obj["country"] = "USA" //через квадратные скобки
console.log(obj);

let carModel = "Mini";
obj[carModel] = 1
obj['carModel'] = 3
console.log(obj);

let name  = "Anna";
let age  = 17;
const newUser = {
    //[name]: 20
  //  name: age
  [name]: name
}
console.log(newUser);

console.log("\n=======Обращение к свойствам объекта=========\n");
let arr = [1, 3, 5, 7]
const customers = [
    {
        id: '01',
        personalInfo: {
            name: {
                first: 'John',
                last: 'Dow',
            },
        },
    },
    {
        id: '02',
        personalInfo: {
            name: {
                first: 'Mary',
                last: 'Pet',
            },
            dob: "01/02/1990",
            "contactInfo": {
                email: "new@gmail.com"
            }
        },
    }
]
//Свойства первого уровня - array elements
console.log(customers.length);
console.log(customers[0]);
console.log(customers[1]);
console.log(customers[2]);

//Свойства второго уровня - from array to object
console.log(customers[0].id);

//Свойства третьего уровня
console.log(customers[1].personalInfo.name);
console.log(customers[1]['personalInfo']['dob'])

console.log("\n============Undefined==========\n");
const user2 = {
    newKey: 'My key',
    };
    console.log(user2);
    console.log(user2.age); // выводит undefined, если значение ключа не указано
    console.log(user2.age === undefined); /* сравнение позволяет понять, были ли до этого 
    момента  значению ключа присвоено какое-либо другое значение*/
    console.log(user2.newKey !== undefined)

    console.log("\n============Оператор IN==========\n");
    console.log("newKey" in user2); //только для ключей первого порядка

    console.log("\n============For loop==========\n");
    let obj2 = {
        name: "John",
        age: 26,
        isAdmin: true
    }
    for (let key in obj2) {
        console.log(obj2[key])
        console.log(key);
        //console.log(key + " % " + obj[key]);
    }
console.log("=========================");
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    let sum = 0
    for (let key in salaries) {
        sum+=salaries[key]
    }
    console.log(sum+"\n");

    let obj3 = {
        width: 200,
        height: 300,
        title: "My menu"
    }
function multiplyNumber(obj) {
    let res = 0;
    for (let key in obj3) {
        if (typeof obj3[key] == "number") {
            res += obj[key] *2
        }
    }
    return res
}
console.log(multiplyNumber(obj3));

for (let i of Object.entries(obj3)) {
    console.log(i);
}