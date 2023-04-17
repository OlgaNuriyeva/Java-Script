console.log('================Factorial==================');

function factorial_1(n) {
  let p = 1;
  for (let i = 1; i <= n; i++) {
    p *= i;
  }
  console.log(p);
}
factorial_1(5);

console.log('================Recursion with global variable==================');

let result = 1;
function factorial_2(n) {
    if (n==1) return;
    result*=n
    factorial_2(n-1)
}
factorial_2(5)
console.log(result);

console.log('================Recursion with local variable==================');

function factorial_3(n) {
    return n==1? 1:n*factorial_3(n-1)

}
console.log(factorial_3(5));

console.log('================Fibonacci==================');

//1 1 2 3 5 8 13 21 Сумма 2-х предыдущих чисел
//1 2 3 4 5 6  7 8  Порядковый номер

function fib(n) {
    if (n==1) return 1
    if (n==2) return 1
    return fib(n-1) + fib(n-2) //условие всегда будет одинаковым
}
console.log(fib(8));


console.log('================Замкнутая функция/Closure==================');

function generate (seed) { //
    let private = seed; //
    return function (param) { //
        private += seed; // 4+2 //private остается равным прошлым расчетам = 4
        return private + param; //4(private) + 2(seed)+4(param)+7(a(3)result)=17
    }
}
let a = generate(2);
console.log(a(3)+a(4)+a(5));
//7(a3)+10(a4)+(6+2)(new private)+5(para)
            