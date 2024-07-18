// Q1

// function check_odd_even(n){
//     if(n%2== 0){
//         return "Provided number is even"
//     } else {
//         return "Provided number is odd"
//     }
// }
// console.log(check_odd_even(24))


// Q2

// function calculate(n){
//     return n*n
// }
// console.log(calculate(3))

// Q3
// function findMax(num1, num2){
//     if(num1 > num2){
//         return `num1 ${num1} is greater to ${num2}`
//     } else {
//         return `num2 ${num2} is greater to ${num1}`
//     }
// }
// console.log(findMax(45,4))



// Q4

// const contactstring =function (str1, str2){
//     let contact = str1 + ' ' + str2
//     return contact
// }

// let monsaf = 'Only your worked hard make you unique from others';
// let ali = 'Be a one man army be a technology Independed'

// console.log(contactstring(monsaf,ali))


// Q5
// let calculate = (a, b) => {
//     return a+b
// }
// console.log(calculate(2,3))



// Q6
// let check_string = (str, char) => {
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == char){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(check_string("TheQuickBorwn@", "@")); 
// console.log(check_string("TheQuickBorwn", "@"));  




// Q7

// function default_valu(a, b=5){
//     return a*b
// }

// console.log(default_valu(5,10))
// console.log(default_valu(5))



// Q8
// function greeting(name, age = 25) {
//     return `Hi ${name}, how are you? Happy ${age}th birthday!`;
// }

// console.log(greeting("Monsaf",29)); 


// Q9

// function welcome() {
//     console.log("hello Monsaf, how are you");
// }

// function higher_order(func, times) {
//     for (let i = 0; i < times; i++) {
//         func();
//     }
// }

// higher_order(welcome, 5);



// Q10

function applyFunctions(func1, func2, value) {
    let result1 = func1(value);
    let finalResult = func2(result1);
    return finalResult;
}

// Example functions
function double(x) {
    return x * 2;
}

function addOne(x) {
    return x + 1;
}

// Example usage
let initialValue = 3;
let finalResult = applyFunctions(double, addOne, initialValue);
console.log(finalResult); // Output: 7


