var principalAmount = 500000
var intrestRate = 10  //annual intrest in percentage
var tenure = 5 // in years

p = principalAmount //principal amount 
n = tenure * 12 //n: tenure in months
r = intrestRate / (12 * 100) // r:monthly intrest rate

emi = (p * r * (1 + r) ** n) / (((1 + r) ** n) - 1)

console.log("EMI per month:", emi);
console.log("Total amout paid:", n * emi);
console.log("Total intrest :", (n * emi) - p);