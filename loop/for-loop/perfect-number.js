
var num =6;

var sum =0;


for(let i=1;i<num;i++){   // i=  1     2         3

    if(num%i==0){         // 6%1=o T,6%2=0 T,6%3=0 T,6%4=0;
        sum=sum+i;       // 0+1=1, 1+2=3,     3+3=6, 

    }
}
console.log(sum==num?"perfect number":"not a perfect number");



