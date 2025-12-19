// syntax

// variable = (p1,p2,p3 ...)=>expression


// variable = (p1,p2,p3 ...)=>{
    // return expression
    // }

    
// add
// sub
// lastDigitMax
// lastDigitSum
// square
// maxTwo



// add

let add=(n1,n2)=>n1+n2;
console.log(add(10,20));


// sub
let sub=(n1,n2)=>n1-n2;
console.log(sub(20,10));

// lastDigitMax

let lastDigitMax=(n1,n2)=>n1%10>n2%10?n1:n2;
console.log(lastDigitMax(127,852));

// lastDigitSum

let lastDigitSum=(n1,n2)=>n1%10+n2%10;
console.log(lastDigitSum(255,355));

// square
let square=(n)=>n**2;
console.log(square(10));

// maxTwo

let maxTwo=(n1,n2)=>n1>n2?n1:n2;
console.log(maxTwo(467,530));
