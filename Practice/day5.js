// todo : Loops and Strings 

// ~~~~~~Loops~~~~~~~~~~~~~~

// ^^^^^for loop ^^^^^^^^^^^^^^^^^^^

// for(let i=1 ; i<=1000 ; i++) {
//     console.log("Happy Practicing Day5");
// }
// console.log("Loop ended");

// let sum = 0

// for(let a = 1 ; a <= 5 ; a++)
// {
//     sum = sum + 1
// }
// console.log("Sum " + sum);

// ^^^^^ while loop ^^^^^^^^^^^^^^

// let i = 1
// while(i<=5){
//     console.log(i);
//     i++
// }

// do{
//     console.log("Hello Bhavin");
//     i++
// }
// while(i<=10)

// ^^^^^ for-of loop ^^^^^^^^^^^^^^^

// let str = "Pooja"
// let size = 0
// for(let val of str){
//     console.log(val);
//     size++
// }
// console.log(size);

// ^^^^^ for-in loop ^^^^^^^^^^^^^^

// let student  = {
//     name : "Pooja",
//     age  : 14,
//     gender : "female",
//     married : false
// }

// for(let key in student){
//     console.log(key+ " : " + student[key]);
// }

//&---------------------------------------

// for (let i = 0 ; i<=100 ; i++) {
//     if(i%2 == 0) {
//         console.log(i);
//     }
// }

// let gameNum = 2
// let userNum = prompt("Enter a number to guess")
// while(gameNum != userNum){
//     userNum = prompt("You entered the wrong number guess the right one")
// }
// console.log("Congratulations you guessed the right number");

// ~~~~~~Strings~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let str1 = "Pooja"
// let str2 = "   Preeth i"
// console.log(str1.length == str2.length);
// console.log(str1[0]);
// let sentence = `This is a template literal ${str1}`
// console.log(sentence);
// console.log(typeof sentence);

// let product = {
//     pName : "Pen",
//     cost : 10
// }
// console.log("The cost of " + product.pName + " is " + product.cost + " Rupees");
// let output = `The cost of ${product.pName} is\n${product.cost}\nRupees`
// console.log(output );
// console.log(output.length);
// console.log(str1.toUpperCase());
// console.log(str2.toLowerCase());
// console.log(str2.trim());
// console.log(str1.slice(1,4));
// console.log(str1.concat(str2));
// console.log(str1.replace("P", "O"));
// console.log(str1.charAt(3))

let userName = prompt("Enter your full name ")

let generatedUsername = `@${userName}${userName.length}`
console.log(generatedUsername);












