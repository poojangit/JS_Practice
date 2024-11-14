var str1 = "pooja"
var str2 = "ajpoo"

function isAnagram(str1, str2){
    let count1 = noOfOccurance(str1);
    let count2 = noOfOccurance(str2);
    for(let i=0 ; i<count1.length;i++){
        if(count1[i] !== count2[i]){
            return false;
        }
    }
    return true;
}
function noOfOccurance(str){
    const count = new Array(26).fill(0)

    for(let i = 0; i<str.length;i++){
        let charCode = str.charCodeAt(i)
        if(charCode>=65 && charCode<= 90) {
            count[charCode - 65]++
        }
        if(charCode>=97 && charCode<=122){
            count[charCode -97]++
        }
    }
    return count
}
const result = isAnagram(str1,str2) 
if(result){
    console.log("Anagram")
}
else{
    console.log("Not anagram")
}