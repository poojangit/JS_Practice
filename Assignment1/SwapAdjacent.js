let arr = [2,4,6,5,2,3]

function swapAdjacent(arr){
    let swappedArray = arr.slice()
    for(let i=0; i<swappedArray.length; i+=2){
        let temp = swappedArray[i]
        swappedArray[i] = swappedArray[i+1]
        swappedArray[i+1] = temp
    }
    return swappedArray
}
console.log(swapAdjacent(arr));