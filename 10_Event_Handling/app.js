
// Q1

let para = document.getElementById("para")
function changed(){
    para.innerHTML= 'This i random'
}


// Q2
const myImg = document.getElementById("myImg");
const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8dKRU8P3rjiU1eMhjmEal-kmB6zlcvYENRHLCvxlO5junAwIVrL178XTXWI5sYIbJvM&usqp=CAU";
const img2 = "http://whs-blogs.co.uk/teaching/wp-content/uploads/2021/04/pexels-pixabay-37534-2000x1200.jpg";

myImg.addEventListener("dblclick", function() {
    if (myImg.src === img1) {
        myImg.src = img2;
    } else {
        myImg.src = img1;
    }
});

// Q3, Q4

let background = document.getElementById("background")
background.addEventListener("mouseover", ()=>{
    background.style.backgroundColor = 'lightgreen'
});
background.addEventListener("mouseout", ()=>{
    background.style.backgroundColor = 'lightblue'
})


// Q5, Q6

const input = document.querySelector("input");
const log = document.getElementById("log");

// input.addEventListener("keydown", logKey);
input.addEventListener("keyup", logKey);

function logKey(e) {    
//   log.textContent += `${e.code}`;
console.log(e.code)
 
}


// Q7


let form = document.querySelector("form")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
   alert("Form Submit Successfully")
})




// Q8

function selectone(){
    let selectdropdown = document.getElementById("selectdropdown").value
    let selectdiv = document.getElementById("selectedValue");
    selectdiv.innerText = selectdropdown
}



// Q9

let listitem = document.getElementById("listitem")
listitem.addEventListener("click", (event)=>{
    if(event.target && event.target.nodeName === "LI"){
        console.log(event.target.innerText)
    }
})


// 10

let parentelement = document.getElementById('parentElement')
parentelement.addEventListener('click', (event) => {
    // Check if the clicked element is a button
    if (event.target && event.target.nodeName === 'BUTTON') {
        console.log('Button clicked: ' + event.target.textContent);
    }
});

let btn = document.getElementById('addButton')
btn.addEventListener('click', () =>{
    // Create a new button element
    let newButton = document.createElement('button');
    newButton.textContent = 'New Button';
    
    // Add the new button to the parent element
    document.getElementById('parentElement').appendChild(newButton);
});