// compare two numbers
// set two number num1,num2
//display num1 is largest if num is > num2 
//display num2 is largest if num is > num1 
// display both are equal num1=num2


var num1 = 23;
var num2 = 34;

if (num1>num2){ // 23>34     F
    console.log(`${num1} is largest`);
    
}
else if(num2>num1){   // 34>23 T
    console.log(`${num2} is largest`)
    
}
else if (num1==num2){
    console.log("both are equal number")
}

