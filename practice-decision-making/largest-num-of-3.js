// check which is largest number of these 3 varaible and also check these are equal

var num1=23;

var num2=66;

var num3=45;


if(num1>num2&&num1>num3){ // 23>66 && 23>45  f
    console.log(`${num1} is largest`);   
}
else if(num2>num1 && num2>num3){ // 66>23 && 66>45 T . then ignore all steps of bottom
    console.log(`${num2} is largest`);  
}
else if(num3>num1 && num3>num2){
    console.log(`${num3} is largest`);  
}
else if(num1==num2 && num2==num3){
    console.log("all have equal value");
    
}