
var pattern ="";

for(let r=1; r<=4;r++){
    pattern="";

    for(let c=1;c<=4;c++){
      if(r==c || r+c ==5 ){
        pattern+="1 ";
      }
      else{
        pattern+="0 ";
      }
    }
    console.log(pattern);
    
}