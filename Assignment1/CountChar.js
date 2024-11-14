let str = "Hello hi"
function countChar(st){
    let count = 0
    for(let i=0; i< st.length; i++){
        let charCode = st.charCodeAt(i)
        if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))
            {
                count ++
            }
    }
    return count
}
console.log(countChar(str))