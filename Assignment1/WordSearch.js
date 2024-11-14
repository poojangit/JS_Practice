var str = "Pooja"
var search = "o"
function searchWord(str, search) {
    for(let i=0; i<str.length; i++){
        if(str[i] === search){
            return true
        }
    }
    return false

}
console.log(searchWord(str, search));
