
var num=9;

var isPrime = true;

for(let i=2;i<num;i++){ 

    if(num%i==0){ // here 9%3==0  . if any number gives 0  so it's not a prime number
        isPrime = false;
        break
    }

}
console.log(isPrime?"prime numer":"not a prime number");
