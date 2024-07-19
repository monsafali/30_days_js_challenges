// Q1

// let book = {name: "Holly Quran", author: "Muhammad PBUH", year: 1400}
// console.log(book)

// Q2
// console.log(book.name)



// Q3

// let book = {
//     name: "Holly Quran",
//      author: "Muhammad PBUH",
//       year: 1400,
//       getDetail: function(){
//         return `${this.name} by ${this.author}`
//       }
//     }
// console.log(book.getDetail())




// Q4
// let book = {
//     name: "Holly Quran",
//     author: "Muhammad PBUH",
//     year: 1400,
//     updateYear: function(value) {
//         this.year = value;
//         console.log(this);
//     }
// };
// book.updateYear(1500);




// Q5
// let library = {
//     name: "City Library",
//     books: [
//         { title: "Accounts", author: "Author A", year: 2010 },
//         { title: "Banking", author: "Author B", year: 2012 },
//         { title: "Computer", author: "Author C", year: 2015 },
//         { title: "Economic", author: "Author D", year: 2018 }
//     ]
// };
// console.log(library.books[0].title)


// Q7

// let book = {
//     name: "Holly Quran",
//     author: "Muhammad PBUH",
//     year: 1400,
//     getTitleAndYear: function() {
//         return `${this.name}, published in ${this.year}`;
//     }
// };

// // Call the method and log the result
// console.log(book.getTitleAndYear());



// Q8

// let book = {
//     name: "Holly Quran",
//     author: "Muhammad PBUH",
//     year: 1400
// };

// for (let i in book) {
//     // console.log(i);
//     console.log(book[i]); 
// }



// Q9
 let book = {
        name: "Holly Quran",
        author: "Muhammad PBUH",
        year: 1400
    };


let keys = Object.keys(book)
let value = Object.values(book)


keys.forEach(element => {
    console.log(element)
    
});

value.forEach(element => {
    console.log(element)
    
});
