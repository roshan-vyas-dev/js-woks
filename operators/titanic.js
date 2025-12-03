var malePassengers =869;

var femalePassengers =412;

var survived = 492;

// total number of passengers 
// number of unsurvived passengers

var totalPassengers = malePassengers + femalePassengers;

console.log(` "Total Passengers =totalPassengers`);


var unsurvived = totalPassengers - survived;
console.log(` "Total unsurvived" unsurvived`);


// percentage  survived

var percentageSurvived =(survived/totalPassengers) *100;

console.log(`percentage survived: ${percentageSurvived}`);;


// percentage  unsurvived

var percentageUnsurvived =(unsurvived/totalPassengers) *100;

console.log(`percentage unsurvived: ${percentageUnsurvived}`);
