// const string =
//   'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
// console.log(string.replace(/br/g, ''));

//encoder
let text = "You are the best QA ever"
let newText = "";
let count = 0;
for (let i = 0; i < text.length; i++) {
    if (count%2 == 0) {
        newText = newText + text[i] + "br"
    }
    count+=2
}
console.log(newText);

//decoder

let decodedResult = ""
for (let i = 0; i < newText.length; i+= 3) {
    decodedResult = decodedResult + newText[i];
}
console.log(decodedResult);

let message = "Work smarter, not harder! Be on time"
let keyword = "Today will be a good day!"

let encryptedMessage = ""

for (let i = 0; i < message.length; i++)
{
    for (let j = 0; j <keyword.length; j++) {
        if (i == j) {
            encryptedMessage = encryptedMessage + message[i] + keyword[j]
            keyword+=keyword[j]
        }
    }
}
console.log("Keyword = "+ keyword);
console.log("====================");
console.log("Encrypted message = " + encryptedMessage);
console.log("====================");


let decriptedMessage = ""
for (let i=0; i< encryptedMessage.length; i+=2) {
decriptedMessage = decriptedMessage + encryptedMessage[i]
}
console.log("The message = " +decriptedMessage);