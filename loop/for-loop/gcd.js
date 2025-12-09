var num1 =5;

var num2 =10;

var gcd=1;

var min=num1<num2?num1:num2;


for(let i=1;i<=min;i++){ // 1, 2, 3, 4, 5
 if(num1%i==0 && num2%i==0){ // 5%1=0 && 10%1=0 T;  5%2=0 && 10%2==0 F,  5%3=0 && 10%3==0 F, 5%4=0 && 10%4==0 F, 5%5=0 && 10%5==0 T 
    gcd=i; //1,5 

 }

}
console.log(gcd);
