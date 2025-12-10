var text="level"

var result="";

var strlength =text.length-1;

for(let i=strlength;i>=0;i--){
    result=result+text[i];
}
console.log(text==result?"palindrome":"not a palindrome");
