// function Check_num(n){
//     if(n > 0){
//         return "positive"
//     } else{
//         return "negitive"
//     }
// }
// console.log(Check_num(-1))

// function checAge(age){
//     if(age >= 18){
//         return "yes you're eligible to vote"
//     } else {
//         return "no you can't not eligible yet"
//     }
// }
// console.log(checAge(9))

// Q3
// function findlarge(a,b,c){
//     if(a >b && a > c){
//         return "a is larger"
//     }
//     if (b > a && b > c){
//         return "b is larger"
//     }
//     else{
//         return "C is larger"
//     }
// }
// console.log(findlarge(8,6,51))

// Q4

// function findday(n) {
//     let day;
//     switch(n) {
//         case 0:
//             day = "Sunday";
//             break;
//         case 1:
//             day = "Monday";
//             break;
//         case 2:
//             day = "Tuesday";
//             break;
//         case 3:
//             day = "Wednesday";
//             break;
//         case 4:
//             day = "Thursday";
//             break;
//         case 5:
//             day = "Friday";
//             break;
//         case 6:
//             day = "Saturday";
//             break;
//         default:
//             day = "Invalid input";
//     }
//     return day;
// }
// console.log(findday(5));

// Q5

// const readline = require("readline");

// function findgrad(marks) {
//   let grade;
//   if (marks >= 90 && marks <= 100) {
//     grade = "A++";
//   } else if (marks >= 80 && marks < 90) {
//     grade = "A";
//   } else if (marks >= 70 && marks < 80) {
//     grade = "B++";
//   } else if (marks >= 60 && marks < 70) {
//     grade = "B";
//   } else if (marks >= 50 && marks < 60) {
//     grade = "C++";
//   } else if (marks >= 40 && marks < 50) {
//     grade = "pass";
//   } else if (marks < 40) {
//     grade = "Fail";
//   } else {
//     grade = "Invalid input";
//   }
//   return grade;
// }

// let students = [
//     {
//       name: "monsaf",
//       marks: 58,
//     },
//     {
//       name: "Kaleem",
//       marks: 48,
//     },
//     {
//       name: "mustafa",
//       marks: 100,
//     },
//   ];

//   function getGrade(score, name) {
//     let grade;
//     switch (true) {
//       case score >= 90:
//         grade = "A";
//         break;
//       case score >= 80:
//         grade = "B";
//         break;
//       case score >= 70:
//         grade = "C";
//         break;
//       case score >= 60:
//         grade = "D";
//         break;
//       default:
//         grade = "F";
//     }
//     console.log(`${name} got Score is ${score} and Grade: ${grade}`);
//     return grade;
//   }
//   // Example usage
//   students.forEach((student) => getGrade(student.marks, student.name));

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter marks: ', (input) => {
//     let marks = parseInt(input);
//     console.log(findgrad(marks));
//     rl.close();
// });

// Q6

// function check_Odd_even(n){
//     if(n %2==0){
//         return "Even number"
//     }
//     else {
//         return "ODD number"
//     }
// }
// console.log(check_Odd_even(24))

// function check_number(n) {
//     const number = n % 2 == 0 ? "positive" : "negitive";
//     return number;
//   }
//   console.log(check_number(51));

// Q7

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Test the function
// console.log(isLeapYear(2020)); // Output: true
// console.log(isLeapYear(2021)); // Output: false
// console.log(isLeapYear(1900)); // Output: false
// console.log(isLeapYear(2000)); // Output: true
