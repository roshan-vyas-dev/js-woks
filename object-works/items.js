
var vegitables = {
    onion: 35,
    pottato: 60,
    bringal: 50,
    carrot: 70,
    beans: 46,
    garlic: 78,
    chilly: 62,
    ginger: 78


}

let maxPrice = 0;

for (let key in vegitables) {
    let currentPrice = vegitables[key];
    if (currentPrice > maxPrice) {
        maxPrice = currentPrice;
    }

}

console.log(maxPrice);


for (let key in vegitables) {
    if (maxPrice == vegitables[key]) {
        console.log(key, vegitables[key]);
    }
}




