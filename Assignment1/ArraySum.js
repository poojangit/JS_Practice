let ar = [1,3,4,5]

function arraySum(ar){
    let sum = 0
    for(let i=0; i<ar.length;i++){
        sum = sum + ar[i]
    }
    return sum
}
 var result = arraySum(ar)
console.log("Sum of an array: " + result);