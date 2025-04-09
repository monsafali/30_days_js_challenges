// Q1
// let two_second = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("The promise was resolved successfully");
//   }, 2000);
// });

// two_second.then((data) => {
//   console.log(data);
// });

// Q2

// let two_second = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("Your promise was rejected");
//   }, 2000);
// });

// two_second
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("you got a erro", err);
//   });

// Q3

// function fetchData(step, delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Step ${step}: Data fetched from server`);
//       resolve();
//     }, delay);
//   });
// }

// // Chaining the promises
// fetchData(1, 1000)
//   .then(() => fetchData(2, 1500))
//   .then(() => fetchData(3, 1000))
//   .then(() => {
//     console.log("All steps completed.");
//   });

// Q4
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function getDataWithDelay() {
//   await delay(2000); // wait 2 seconds
//   let response = await fetch("https://icanhazdadjoke.com/slack");
//   let data = await response.json();
//   console.log(data.attachments[0].fallback);
// }

// getDataWithDelay();

// Q5

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // You can simulate failure randomly (for testing)
//       // Math.random() < 0.2 ? reject("Random Failure!") : resolve();
//       resolve(); // Always resolves in this version
//     }, ms);
//   });
// }

// async function getDataWithDelay() {
//   try {
//     await delay(2000); // waits for 2 seconds
//     let response = await fetch("https://icanhazdadjoke.com/slack");

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     let data = await response.json();
//     console.log(data.attachments[0].fallback);
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//   }
// }

// getDataWithDelay();

// Q6
// fetch("https://icanhazdadjoke.com/slack")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Q6 - Promise Result:", data.attachments[0].fallback);
//   })
//   .catch((error) => {
//     console.error("Q6 - Promise Error:", error.message);
//   });

// Q7
// async function getJoke() {
//   try {
//     const response = await fetch("https://icanhazdadjoke.com/slack");

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("Q7 - Async/Await Result:", data.attachments[0].fallback);
//   } catch (error) {
//     console.error("Q7 - Async/Await Error:", error.message);
//   }
// }

// getJoke();

// Q8
// const promise1 = fetch("https://icanhazdadjoke.com/slack").then((res) =>
//   res.json()
// );
// const promise2 = fetch("https://api.chucknorris.io/jokes/random").then((res) =>
//   res.json()
// );
// const promise3 = new Promise((resolve) =>
//   setTimeout(() => resolve("Custom resolved after 1s"), 1000)
// );

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log("Q8 - All Promises Resolved:");
//     console.log("Dad Joke:", results[0].attachments[0].fallback);
//     console.log("Chuck Norris Joke:", results[1].value);
//     console.log("Custom Promise:", results[2]);
//   })
//   .catch((error) => {
//     console.error("Q8 - Error in one of the promises:", error.message);
//   });

// Q9
// const slowPromise = new Promise((resolve) =>
//   setTimeout(() => resolve("Resolved after 3 seconds"), 3000)
// );

// const fastPromise = new Promise((resolve) =>
//   setTimeout(() => resolve("Resolved after 1 second"), 1000)
// );

// const jokePromise = fetch("https://icanhazdadjoke.com/slack")
//   .then((res) => res.json())
//   .then((data) => data.attachments[0].fallback);

// Promise.race([slowPromise, fastPromise, jokePromise])
//   .then((result) => {
//     console.log("Q9 - First Promise Resolved:", result);
//   })
//   .catch((error) => {
//     console.error("Q9 - Promise Rejected:", error.message);
//   });
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchJokeEverySecond() {
  while (true) {
    try {
      const response = await fetch("https://icanhazdadjoke.com/slack");
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log("Joke:", data.attachments[0].fallback);
    } catch (error) {
      console.error("Error fetching joke:", error.message);
    }

    await delay(1000); // wait 1 second before next call
  }
}

fetchJokeEverySecond();
