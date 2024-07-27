
// Q1
let game = document.getElementById("game")
game.innerHTML = 'Only your worke hard make you unique'



// Q2
function changeBackgroundColor() {
    let elements = document.getElementsByClassName("chngback");
    for(let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "darkgreen";
    }
}
changeBackgroundColor()

// Q3

let newdiv = document.createElement('div')
newdiv.textContent = 'This is random text i added'
let body = document.querySelector("body")
body.appendChild(newdiv)


// Q4    
// function addli(){
// let ul = document.getElementsByClassName("ul")[0];
// let li = document.createElement('li');
// let inputli = document.getElementById("inputli").value;
// li.textContent = inputli;
// ul.appendChild(li)
// document.getElementById('inputli').value = '';  
// }



// Q5
newdiv.remove();

// Q6
let removebtn = document.getElementById("removeButton");
        removebtn.addEventListener("click", function() {
            let parentElement = document.getElementsByClassName("ul")[0]; // Access the first element of the HTMLCollection
            if (parentElement.lastElementChild) {
                parentElement.removeChild(parentElement.lastElementChild);
            }
        });

        function addli() {
            let input = document.getElementById("inputli").value;
            let li = document.createElement("li");
            li.textContent = input;
            document.getElementsByClassName("ul")[0].appendChild(li);
        }


// Q7

document.getElementById("changeSrcButton").addEventListener("click", function() {
    // Select the img element by its ID
    var imgElement = document.getElementById("myImage");
    
    // Change the src attribute to a new image URL
    imgElement.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxlDun0EWp8OiGTXoelcBkuM7BiifKAflkw&s");
});

document.getElementById("addClassButton").addEventListener("click", function() {
    var pElement = document.getElementById("myParagraph");
    pElement.classList.add("highlight");
});


document.getElementById("removeClassButton").addEventListener("click", function() {
    var pElement = document.getElementById("myParagraph");
    pElement.classList.remove("highlight");
});


// Question NO 9
const paragraph2 = document.getElementById('myParagraph2');
const button = document.getElementById('changeTextButton');

// Add click event listener to the button
button.addEventListener('click', function() {
    // Change the text content of the paragraph
    paragraph2.textContent = 'Text changed!';
});



// Question No 10

const box = document.getElementById('myBox');

    // Add mouseover event listener
    box.addEventListener('mouseover', function() {
        // Change border color to red when mouseover
        box.style.borderColor = 'red';
    });

    // Add mouseout event listener (optional)
    box.addEventListener('mouseout', function() {
        // Reset border color to black when mouseout
        box.style.borderColor = 'black';
    });