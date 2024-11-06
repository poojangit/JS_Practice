function userNameValidation(username){
    const usernameRegex = /^[a-zA-Z0-9]{5,15}$/
    return usernameRegex.test(username)
}

function passwordValidation(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return passwordRegex.test(password)
}

document.getElementById('submitBtn').addEventListener('click', function() {
const username = document.getElementById('username').value
const password = document.getElementById('password').value

if(userNameValidation(username) && passwordValidation(password)) {
    console.log("username and password mathched");
}else {
    console.log("Invalid username or password");
}

})
