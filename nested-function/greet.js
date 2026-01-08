
function greet(username){
    function message(text){
        return `hello ${username} ${text} `
    }
    return message
}

console.log(greet('vpin')("good mrng"))
