
var expenses = {
    jazeel: 780,
    nazim: 680,
    arun: 1000,
    mahin: 500,
    amal: 750,
    thushar: 1500
}

var total = 0;

for (let key in expenses) {
    total += expenses[key]
}

// console.log(total);



// who paid most

let maxPrice = 0;

for (let key in expenses) {
    let currentPrice = expenses[key];
    if (currentPrice > maxPrice) {
        maxPrice = currentPrice;

    }
}

console.log("max price is :", maxPrice);

for (let key in expenses) {
    if (maxPrice == expenses[key]) {
        console.log(key, expenses[key]);

    }

}




// split

let split = total / Object.entries(expenses).length;  // object.entries() covert object to array

console.log("one person split is:", split);


// 

let splitWise = {}

for (let user in expenses) {
    let amount = expenses[user];
    splitWise[user] = split - amount;

}

console.log(splitWise);




