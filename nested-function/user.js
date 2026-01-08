
function login(username){
    function checkPassword(password){
        return username=="admin" && password=="admin123";
    }
    return checkPassword
}
console.log(login("admin")("admin111"));
