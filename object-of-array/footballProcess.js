

var football = {
    brazil: 5,
    portugal: 0,
    england: 1,
    germany: 4,
    argentina: 3,
    urugay: 2,
    espain: 1,
    italy: 4,
    france: 2
}
// display contries who win above 1 cup

for (let [k, v] of Object.entries(football)) {

    if (v > 1) {
        console.log(k,v);
    }
}