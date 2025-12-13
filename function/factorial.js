// create a function factorial number
//  return factorial number

function factorial(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    return fact
}
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(4));
