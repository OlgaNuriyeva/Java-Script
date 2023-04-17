function palindrome(str) {
let newStr = str.toLowerCase().replace(/[\W_]/g, '')
let revStr = newStr.split('').reverse().join('')
if (newStr === revStr) {
    return true
}
else return false
}
console.log(palindrome("Ma^dam"));