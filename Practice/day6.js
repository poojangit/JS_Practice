let a 
console.log(typeof a);

let b = ""
console.log(typeof b);

let c = null
console.log(typeof c);

let A = 10
let B = 10

console.log(A==B);

console.log(A===B);

{


}




let student = {
    sName : "xyz",
    roll_no : 17
}

let array = [-1,-3, 8, 2, -2, 6, -1, -6]
let new_array = []

for(let c in array) {
    console.log(array[c]);
    // console.log(array.indexOf[0]);
    if(array[c]< 0){
        console.log(c);
    }   
}



