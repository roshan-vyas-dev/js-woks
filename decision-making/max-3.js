 

 var num1=8;

 var num2=8;

 var num3 = 8;

 if (num1>num2&& num1>num3){  //8 >8>8   f
    console.log(`${num1} is largest`);
    
 }
 else if(num2>num1&&num2>num3){ //8 >8>8   f
    console.log(`${num2} is largest`);

 }
 else if(num3>num2&&num3>num1){//8 >8>8   f
     console.log(`${num3} is largest`);

 }
 else if(num1==num2&&num2==num3){ //8=8=8 t
    console.log("all are equal");
    
 }