
var fruits = {
    apple: 250,
    orange: 100,
    mango: 120,
    cherry: 220,
    guva: 90,
    banana: 70
}

// display product whose price>100

let priceGtHundred=Object.entries(fruits).filter(item=>item[1]>=100);
console.log(priceGtHundred);


// display products available in range of 50 to 150
let priceFilter=Object.entries(fruits).filter(item=>item[1]>=50 && item[1]<150);
console.log(priceFilter);

// display costly product

let costlyProduct=Object.entries(fruits).reduce((item1,item2)=>item1[1]>item2[1]?item1:item2);

console.log(costlyProduct);

// display low cost product

let lowCostProduct=Object.entries(fruits).reduce((item1,item2)=>item1[1]<item2[1]?item1:item2);

console.log(lowCostProduct);

