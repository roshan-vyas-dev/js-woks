var num=6;

if(num>0){ //6>0 && 6%2==0 T
    if(num%2==0){
        console.log("positive and even");
        
    }
    else{
        console.log("positive and odd");
        
    }
}
else if(num<0){
    if(num%2==0){
        console.log("negative and even");
        
    }
    else{
        console.log("negative and odd");
        
    }


}
else if(num==0){
    console.log("zero is even");
    

}
else{
    console.log("invalid");
    
}