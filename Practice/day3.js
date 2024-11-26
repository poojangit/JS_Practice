
// Todo : -----------------DATA TYPES (Non-primitive)

let person = {
    pname : "Riya",
    age : 26,
    greet : function () {
        console.log("Hello");
    }
}
console.log(person.pname);
console.log(person.greet());
person.greet()


let arr1 = ["1", 2, "Js"]
console.log(arr1);
console.log(arr1[1]);
arr1[1] = "hi"
console.log(arr1[1]);
console.log(arr1);

function add(a,b) {
    return a+ b
}
console.log(add(1,2));


let date = new Date()
console.log(date);
let Int = new Set([1,2,3,4])
console.log(Int);
console.log(Int.entries());
console.log(Int.size);
console.log(Int.keys())

let userMapping = new Map()
userMapping.set("name", "Pachuu")
userMapping.set(1,"One")
console.log(userMapping.get("name"));


console.log("----------------------------------------------------");


let first_name = "pooja"
//& using let while declaring the variable is good practice.
//& do not use var. because "var can be re-declared"

console.log(first_name);

// ----------------------------------------------

const age = 24
//& use const when you dont want the variable to change
//& cannot be re-declared or re-update
console.log(age);

// -----------------------------------------------

{
    let a = 5
    console.log(a);
}
{
    let a = 10
    console.log(a);
    
}
//& Let can only be re declared in another scope

let b = BigInt(3)
console.log(b);

let c = Symbol("Hello")
console.log(c);

//* We have 7 primitive data types

const student = {
    firstName : "Pooja",
    age : 15,
    cgpa : 8.9,
    isPass : true
}

student["gender"] = "Female"
student["age"] = 10

console.log(student);

// ------------------------------------------------------------

const product = {
    product_img : "",
    product_name : "Parker Jotter Standard CT Ball pen",
    color : "Black",
    ratings : 5,
    isDeal : true,
    offer_price : 270,
    mrp_price : 285,
    discount : "5% off"
}

console.log(product);

// ---------------------------------------

const profile = {
    username : "pooja",
    isFollow : true,
    followers : 900,
    following : 10,
    post : 190,
    fullName : "Pooja N G",
}
console.log(profile);

