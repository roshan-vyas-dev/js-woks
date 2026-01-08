// nested function

function outerFunction(){
    function innerFunction(){
        console.log("inner function");
        
    }
    innerFunction()
}

outerFunction()