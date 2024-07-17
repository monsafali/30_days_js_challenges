// Task1
function sum(a,b) {
    return  a+b
}
console.log(sum(5,5));

// Task2
function Sub(a,b) {
    return  a/b
}
console.log(Sub(15,2));

// Task3
function Multi(a,b) {
    return  a*b
}
console.log(Multi(5,5));

// Task4
function Divid(a,b) {
    return  a-b
}
console.log(Divid(15,2));


// Task 5
function Remin(a,b) {
    return  a % b
}
console.log(Remin(15,2));



// Task6

// function autoIncrement(number1, number2){
//     number1 += number2
//     return number1
// }
// console.log(autoIncrement(10,10))



function autoIncrement(number1, number2){
    number1 -= number2
    return number1
}
console.log(autoIncrement(10,10))


// Task8
function comparenum(num1, num2){
   return num1 > num2
//    return num1 < num2

}

console.log(comparenum(12,10))


function comparenumber(num1, num2){
    return num1 => num2
    // return num1 <= num2
}

function equalcompare (num1,num2){
    return num1 == num2;
    return num1 === num2;
}


function Operator(a,b, x,y){
    return a && b == x || y
}

console.log(Operator(6,10,10,10))



function notEqual (a,b){
    return a != b
}

console.log(notEqual(5,4))



function checkNumber(num) {
    return num >= 0 ? "Positive" : "Negative";
}

console.log(checkNumber(5));  // Output: Positive
console.log(checkNumber(-3)); // Output: Negative
console.log(checkNumber(0));  // Output: Positive (assuming 0 is considered non-negative)

