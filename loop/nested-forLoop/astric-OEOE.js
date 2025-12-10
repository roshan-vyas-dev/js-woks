
var pattern ="";

for(let r=1; r<=3;r++){
    pattern="";

    for(let c=1;c<=4;c++){
      pattern+=c%2==0?"E " :"O ";
    }
    console.log(pattern);
    
}