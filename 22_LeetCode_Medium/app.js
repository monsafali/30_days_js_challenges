// Q1
setTimeout(()=>{
    insertcontnet('I love Coding')
},2000)
function insertcontnet(value){
    let biggame = document.getElementById("big")
    biggame.innerHTML = value
}

// Q2


const getPromise = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Something happing wrong")
        },2000)
    });
};
let promise = getPromise();
promise.then((res) =>{
    console.log("promises fulfilled",res)
})
promise.catch((err) =>{
    console.log("rejected", err)
})



