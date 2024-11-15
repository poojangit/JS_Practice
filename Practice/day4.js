//todo: Operators in Javascript

//! Arithmetic Operartor
let a = 20
let b = 10

console.log("a+b = " , a+b);
console.log("a-b = " , a-b);
console.log("a*b = " , a*b);
console.log("a/b = " , a/b);
console.log("a%b = " , a%b);
console.log("a**b = " , a**b);

//! Unary Operator

console.log("a++= " , a++);
console.log(a);
console.log("a-- " , a--);
console.log(a);

//! Assignment operator

a+=5 
console.log(a);

//! comparision operator

//^equal to
console.log(a==b); 
// ^ not equal to
console.log(a!=b);
// ^ equal to and type
console.log(a===b);
// ^ not equal to and type
console.log(a!==b);

//! Logical Operators

let condi1 = a > b
let condi2 = a===25

console.log(condi1);
console.log(condi2);

console.log(condi1 && condi2);

//todo : Conditional statements

let age = 100

if(age >= 18 && age <= 100) {
    console.log("Congradulations!! You are eligible to apply for driving licence"); 
}
else if(age < 18 ){
    console.error("you are not eligible");
}
else {
    console.error("Invalid age");
    
}

//! ternary Operartor 

let result = age > 18 ? "adult" : "child"
console.log(result);


// -------------------------------------

// let number = prompt("Enter a number: ")
// console.log(number);

// if (number % 5 == 0){
//     console.log("Yes it is a multiple");
// }
// else {
//     console.log("Not a multiple");
    
// }

// ------------------------------------

let score = prompt("Enter a score: ")

if(score >= 80 && score <= 100) {
    console.log("Grade is A");
}
else if(score >= 70 && score <= 89) {
    console.log("Grade is B");
}
else if(score >= 60 && score <= 69) {
    console.log("Grade is C");
}
else if(score >= 50 && score <= 59) {
    console.log("Grade is D");
}
else {
    console.log("Grade is F");
    
}