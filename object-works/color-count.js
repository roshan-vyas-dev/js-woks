
var colors=["red","blue","green","purple","yellow","red","blue","red"];

var color_count={}

for(let c of colors){
    if(c in color_count){
        color_count[c]+=1;
    }
    else{
        color_count[c]=1;
    }
}


console.log(color_count);
