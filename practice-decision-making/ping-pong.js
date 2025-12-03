/*
ping if num /3 

pong if num/5

ping pong if num /15
*/


var num=30;

if(num%15==0){ //30%15==0   t
    console.log("ping pong");
}
else if (num%3==0){ 
    console.log("ping");
    
}
else if(num%5==0){ 
    console.log("pong");
    
}

else{
    console.log("invalid character");
    
}

