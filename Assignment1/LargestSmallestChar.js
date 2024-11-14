let str = "apple"

function largeSmallChar(str){
    let largestChar = str[0];
    let smallestChar = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i] > largestChar) {
            largestChar = str[i]
        }
        if (str[i] < smallestChar) {
            smallestChar = str[i]
        }
    }

    return {
        largest: largestChar,
        smallest: smallestChar
    }

}
console.log(largeSmallChar(str));