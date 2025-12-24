var numbers=[10,11,12,13,14,15,16];

let maxNum=numbers.reduce((n1,n2)=>n1>n2?n1:n2);

console.log(maxNum);

let minNum=numbers.reduce((n1,n2)=>n1<n2?n1:n2);

console.log(minNum);


let sum=numbers.reduce((n1,n2)=>n1+n2);

console.log(sum);
