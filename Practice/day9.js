//todo  ----------- functions----------------

// ! --------Named functions ---------------

function wish(name){
    console.log(`Happy anniversary ${name}`);
}
wish('Riya');

//! Function Expressions 

const mul = function(a,b) {
    return a + b 
}
console.log(mul(10,20));

//! IIFE

(function() {
    console.log("Hello Good morning");
})()

//! HOI

function Calculation (n,m, MathOperation){
    return MathOperation(n,m)
}
const addition = (a,b) => a+b
console.log(Calculation(100,200, addition ));

//! CallBack function

function dataFetch(CallBack) {
    setTimeout(()=> {
        CallBack("Data fetched!")
    })
}
dataFetch((message)=> console.log(message))

//! Arrow functions 

const sub = (a,b) => a-b
console.log(sub(10,20));

//! Anonymous functions 

setTimeout(function(){
    console.log("Im anonymous");
}, 1000)

//! Async functions

async function fetchData(){
   const response = await fetch("https://www.api.org")
   console.log(response);
   const data =  await response.json()
   console.log(data);
}
fetchData()