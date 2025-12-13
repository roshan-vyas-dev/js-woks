
// create a function is Odd with one parameter num and return true if num is odd


function odd(num){
    if(num%2==1){
        return true

    }
    else{
        return false;
    }
}

console.log(odd(5));



// create a numbercheck with one parameter and return
// +ve if num is +ve
//-Ve if number is -ve;
//  0 if number is 0

function numberCheck(num){
    if(num>0){
        return "+ve"

    }
    else if(num<0){
        return "-ve"
    }
    else if(num==0){
        return "zero"
    }  
}
console.log(numberCheck(-5));



