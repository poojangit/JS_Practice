// let array = [12,13,14,15]
// console.log(array);
// console.log(array.length);
// console.log(array[0]);
// array[0] = 17
// console.log(array);

// let stringArr = ["hi", "hello"]
// console.log(stringArr);

// stringArr[0] = "mobile"
// console.log(stringArr);

// num = 10
// console.log(num);
// num = 20
// console.log(num);

// str = "name"
// console.log(str);
// str = "J"
// console.log(str);

// str[1] = "u"
// console.log(str);

// console.log(str[1]);

//! Looping over array

// let products = ["Mobile", "Laptop", "Earphones", "Charger"]

// for(let i = 0 ; i<products.length ; i++) {
//     console.log(products[i]);
// }

// for(let pro of products){
//     console.log(pro.toUpperCase()); 
// }

// let marks = [85, 98, 44, 37, 76, 60]
// let sum = 0
// for(let m of marks){
//    sum = sum + m
// }
// console.log(sum);

// let avg = sum/marks.length
// console.log(avg);

// let prices = [250, 645, 300,900, 50]
// let new_prices = []
// let i = 0

// for(let val of prices){
//     offer = val*10 / 100
//     prices[i] = prices[i] - offer
//     console.log(`Offer price ${prices[i]}`);
// }

//! Array Methods

let Laptop = ["Hp", "Mac", "Lenovo"]
Laptop.push("Acer")

console.log(Laptop);
console.log(Laptop.pop());
console.log(Laptop.toString()); //This will convert it to string

let Mobile = ["Apple", "Oppo", "Vivo"]
console.log(Laptop.concat(Mobile, Laptop));

console.log(Laptop.slice(1))
// ^ Original Array does not change

console.log(Laptop.splice(0,3));

let aa = Laptop.splice(1,"Helooooo")
console.log(aa);

console.log(Laptop.splice(1,"Helooooo"));

