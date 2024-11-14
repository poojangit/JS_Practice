let arr1 = [1,3,4,6]
let arr2 = [6,7,8,9]

function mergeArray(arr1, arr2){
  let mergedArray = []
  for(let i=0; i< arr1.length; i++){
    if(!mergedArray.includes(arr1[i])){
        mergedArray.push(arr1[i])
    }
  }
  for(let i=0 ; i<arr2.length; i++){
    if(!mergedArray.includes(arr2[i])){
        mergedArray.push(arr2[i])
    }
  }
  return mergedArray

}
console.log(mergeArray(arr1,arr2))