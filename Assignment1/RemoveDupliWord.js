let str = "Bottle"

function rmDublicate(str){
    let newStr = " ";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (newStr.indexOf(char) === -1) {
            newStr += char;
        }
    }

    return newStr;

}
console.log(rmDublicate(str));