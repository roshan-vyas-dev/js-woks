
var pattern ="";

for(let r=1; r<=4;r++){
    pattern="";

    for(let c=1;c<=4;c++){
      pattern+=r==c?"1   ": "0   ";

    }
    console.log(pattern);
    
}