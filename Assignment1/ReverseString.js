let str = "Good morning"

function ReverseString(str) {
    let rv = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rv += str.charAt(i);
    }
    return rv;
}
console.log(ReverseString(str))