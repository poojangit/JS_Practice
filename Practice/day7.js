// let array = [1,2,3,4,5,-1,-2,-3,-4]

// let pos = array.filter(num => num>0)
// console.log(pos);
// let neg = array.filter(num => num<0)
// console.log(neg)

// let newArray = []

// let i = 0

// while(i<pos.length || i< neg.length) {
//     if(i<pos.length)
//         newArray.push(pos[i])
//     if(i<neg.length)
//         newArray.push(neg[i])
//     i++
// }

let array = [1,2,3,4, -2,-3,-4,-5]

let pos = array.filter(num=> num>0)
console.log(pos);

let neg = array.filter(num => num<0)
console.log(neg);

let newArray = []
let i = 0
while(i< pos.length || i<neg.length){
    if(i<pos.length){
        newArray.push(pos[i])
    }
    if(i<neg.length){
        newArray.push(neg[i])
    }
    i++
}

console.log(newArray);
