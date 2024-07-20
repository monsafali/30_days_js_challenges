// Q1

// function persons_details(name, age){
//     console.log(`${name} is ${age} year old`)
// }
// persons_details("monsaf", 28)


// Q2
// const multiLineString = `
// This is a multi-line string.
// You can write text on multiple lines
// without using concatenation or escape characters.
// Template literals are very useful!
// `;

// console.log(multiLineString);



// Q3
// let array = [11,23,45,68,79,85];
// function extract(arr){
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i])
//         if(i === 1){
//             break
//         }     
//     }
// }
// extract(array)


// let array = [12, 23, 45, 68, 79, 85];
// function extract(arr) {
//     // Array destructuring to extract the first and second elements
//     const [first, second] = arr;
//     console.log(first);  // Logs the first element
//     console.log(second); // Logs the second element
// }
// extract(array);




// Q4

// let object = {
//     name: "Monsaf ali",
//     title: "Big game",
//     author: "kamal",
//     age: 25,
//     class : "Webdev",
//     marks: 50,
//     hobbies: ["football","hockey","Coding","Typing"],
//     review : [
//         {name: "mustafa", review: "not so good"},
//         {name: "kaleem", review: "you can't do anything"},
//         {name: "Xyz", review: "stick one filed"}
//     ]
// }
// function destructuring_Obj (obj){
//     const { title, author, review} = obj;
//    console.log(`The tile of the book is ${title}`)
//    console.log(`The author of the books is ${author}`)
//    console.log(`my teacher is ${review[0].name}`)
// }
// destructuring_Obj(object)




// Q5
// let originalArray = [1, 2, 3]; // Existing array
// let newArray = [...originalArray, 4, 5]; // Creating a new array with additional elements

// console.log(newArray); // Logs [1, 2, 3, 4, 5]



// Q6

// function sumAl(...nums){
//     let sum =0;
//     for(let num of nums){
//         sum += num
//     }
//     return sum
// }
// let result = sumAl(1,2,3,4,5,6)
// console.log(result)


// Q7

// function product (num1, num2=1){
//     return num1 *num2
// }
// console.log(product(4,2))
// console.log(product(4))

// Q8

// let name = "Monsaf Ali";
// let age = 25;
// let hobbies = ["football", "hockey", "coding", "typing"];

// const person = {
//     // Using shorthand property names
//     name,
//     age,
//     hobbies,

//     // Defining methods directly within the object
//     greet() {
//         return `Hello, my name is ${this.name}.`;
//     },
    
//     getAge() {
//         return `I am ${this.age} years old.`;
//     },

//     listHobbies() {
//         return `My hobbies are: ${this.hobbies.join(", ")}.`;
//     }
// };

// // Logging the object to the console
// // console.log(person);

// // Logging the results of the methods to the console
// console.log(person.greet()); // Logs "Hello, my name is Monsaf Ali."
// console.log(person.getAge()); // Logs "I am 25 years old."
// console.log(person.listHobbies()); // Logs "My hobbies are: football, hockey, coding, typing."


// Q9


let propName1 = "name";
let propName2 = "age";
let propName3 = "hobbies";

let person = {
    [propName1]: "Monsaf Ali",
    [propName2]: 25,
    [propName3]: ["football", "hockey", "coding", "typing"]
};

// Logging the object to the console
console.log(person);




