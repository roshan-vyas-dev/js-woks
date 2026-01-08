
function outer(num1){
    function wrapper(num2){
        return num1+num2

    }
    return wrapper
}

console.log(outer(100)(200));
