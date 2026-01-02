
var mobiles = [
    { brand: "realme", color: "green", storage: "6gb ram 128 rom", price: 35000, processor: "dimensity" },
    { brand: "xiaomi", color: "blue", storage: "8gb ram 256 rom", price: 75000, processor: "snapdragon" },
    { brand: "samsung", color: "green", storage: "12gb ram 512 rom", price: 100000, processor: "exynos" },
    { brand: "pixel", color: "white", storage: "8gb ram 256 rom", price: 35000, processor: "tensor" },
    { brand: "apple", color: "blue", storage: "8gb ram 128 rom", price: 100000, processor: "a-series" }
]


// all brand names

var brandNames = mobiles.map(br => br.brand)

console.log(brandNames);


// display mobiles price gt 30000

var mobilesGt30000 = mobiles.filter(gt => gt.price > 30000).map(br => br.brand);

console.log(mobilesGt30000);


// display mobile blue color

var greenColorPhones = mobiles.filter(gr => gr.color == "green").map(br => br.brand);

console.log(greenColorPhones);

// sort mobiles order of highest to lowest

mobiles.sort((m1, m2) => m1.price - m2.price);

console.log(mobiles);


// highest price

var highestPrice = mobiles.reduce((m1, m2) => m1.price > m2.price ? m1 : m2).price;
console.log(highestPrice);

// there is more highest price phones to print/
var highestPriceMobies = mobiles.filter(h => h.price == highestPrice).map(mb=>mb.brand);

console.log(highestPriceMobies);

