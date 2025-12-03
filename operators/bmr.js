//  10* weight (kg) +6.25*height(cm) - 5*age(y) +5 for (man)


var weightInKg = 55;

var heightInCm = 167;

var age= 21;

var bmr = weightInKg*10 + heightInCm*6.25 - age*5 +5;

console.log(bmr);

var calories = bmr *1.375;

console.log( `calories : ${calories}`);
