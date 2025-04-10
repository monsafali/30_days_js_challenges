// Q1
// function intentionaliy(a) {
//   try {
//     if (typeof a !== "number") {
//       throw new Error("Input must be a number");
//     }
//     throw new Error("Intentional error after validation");
//   } catch (err) {
//     console.error("Caught error:", err.message);
//   }
// }

// intentionaliy(6);

// Q2

// function divide(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     let result = a / b;
//     console.log("Result:", result);
//   } catch (err) {
//     console.error("Caught error:", err.message);
//   }
// }

// divide(10, 2); // ✅ Works fine
// divide(5, 0); // ❌ Throws "Cannot divide by zero"

// Q3
// function checkModulo(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Cannot divide by zero");
//     }

//     if (a % b === 0) {
//       console.log("Try block: Number is divisible");
//       return "Number is divisible";
//     }

//     throw new Error("Number is not divisible");
//   } catch (err) {
//     console.log("Catch block: Error is:", err.message);
//     return "Caught an error";
//   } finally {
//     console.log("Finally block: All work done successfully");
//   }
// }

// checkModulo(5, 3);

// Q NO 4
// ans pending

// Q NO5:

// ans pending

// Q NO6
// let Randomoly = new Promise(function (resolve, reject) {
//   let success = Math.random() > 0.5; // 50% chance
//   setTimeout(() => {
//     if (success) {
//       resolve("✅ Promise resolved successfully!");
//     } else {
//       reject("❌ Promise rejected!");
//     }
//   }, 1000); // Simulate async delay
// });

// // Use .then() and .catch() to handle result
// Randomoly.then((msg) => {
//   console.log(msg);
// }).catch((err) => {
//   console.error("Caught an error:", err);
// });

// Q7
// Function that returns a Promise which randomly resolves or rejects
// function getRandomPromise() {
//   return new Promise((resolve, reject) => {
//     let success = Math.random() > 0.5;
//     setTimeout(() => {
//       if (success) {
//         resolve("✅ Promise resolved successfully");
//       } else {
//         reject(new Error("❌ Promise rejected randomly"));
//       }
//     }, 1000);
//   });
// }

// // Async function using try-catch to handle the result
// async function randomley() {
//   try {
//     let result = await getRandomPromise();
//     console.log(result);
//   } catch (err) {
//     console.error("Caught error inside async function:", err.message);
//   }
// }

// randomley();

// Q8

// async function getdata(api) {
//   try {
//     let data = await fetch(api);
//     let res = await data.json();
//     console.log(res.attachments[0].fallback);
//   } catch (err) {
//     console.log("Error accured", err.message);
//   } finally {
//     console.log("All thing working fine");
//   }
// }

// getdata("https://icanhazdadjoke.com/slack");

// Q9
async function getData() {
  try {
    const response = await fetch("https://wrongurl.com"); // Invalid URL
    const data = await response.json(); // Try to parse JSON
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("❌ An error occurred while fetching data:", error.message);
  }
}

getData();
