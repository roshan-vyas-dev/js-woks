/*
ping if num /3 
*/
var num = 4;

if(num%15==0){  // 4%15 ==0   f
    console.log(`${num} is pingpong`);
    
}
else if (num%3==0){ // 4%3 ==0   f
    console.log(`${num} is ping`);
    

}
else if (num%5==0){  // 4%5 ==0   f
        console.log(`${num} is pong`);    
}
else{  //   last option  will automatically print if there is no true in above
    console.log("invalid");   
}