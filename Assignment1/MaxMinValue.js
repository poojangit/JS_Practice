let ar = "352967"

function getMinimum(ar) {
    let small = ar[0];
    for (let i = 1; i < ar.length; i++) {
      if (ar[i] < small) {
        small = ar[i];
      }
    }
    return small;
  }
  
  let smallest = getMinimum(ar);
  console.log("Smallest element is: " + smallest);

  function getMaximum(ar){
    let max = ar[0];
    for(let i =1 ; i < ar.length; i++){
        if(ar[i] > max) {
            max = ar[i]
        }
    }
    return max
  }
  console.log("Maximum number : " + getMaximum(ar))