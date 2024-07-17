// function Prnt_number(max_n){
//     for(let i=0; i<=max_n; i++){
//         console.log(i)
//     }
// }
// Prnt_number(10)


// Q2

// function table(n) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} x ${i} = ${n * i}`);
//     }
// }

// table(5);



// Q3

// let sum =0;
// let i=1;
// while(i<= 10){
//     sum += i;
//     i++
// }

// console.log("The Sum of numbers form 1 to 10 is", sum);



// Q4
// let i = 10;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }




// Q5while(i<= 10){
// let x = 1;
// while (x <= 5){
//     console.log(x)
//     x++;
// }


// Q6



// function factorial(number) {
//     if (number < 0) return "Invalid input";  // Factorial is not defined for negative numbers
//     if (number === 0) return 1;  // Factorial of 0 is 1
    
//     let result = 1;
//     let i = 1;  // Start at 1

//     while (i <= number) {  // Loop while i is less than or equal to number
//         result *= i;  // Multiply result by the current value of i
//         i++;  // Increment i by 1
//     }

//     return result;  // Return the computed factorial
// }

// console.log(factorial(100));  // Output: 6




// Q7

// function printPattern(rows) {
//     for (let i = 1; i <= rows; i++) {  // Outer loop for each row
//         let pattern = '';
//         for (let j = 1; j <= i; j++) {  // Inner loop for each column in the row
//             pattern += '*';  // Append '*' to the pattern
//         }
//         console.log(pattern);  // Print the pattern for the current row
//     }
// }

// printPattern(5);  // Call the function to print the pattern with 5 rows




// Q8
// Q7

function skipnumber(n){
    for(let i=1; i<= n; i++){
        if(i == 5){
            continue
        }
        if(i == 7){
            break
        }
        console.log(i)
        
    }
}

skipnumber(10)

