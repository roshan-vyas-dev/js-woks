
var numbers = [11, 12, 13, 14, 15, 16];

// greater than 13
var numGtthirteen = numbers.filter(num => num > 13);

console.log(numGtthirteen);

// even
var evenNumbers = numbers.filter(num => num % 2 == 0);

console.log(evenNumbers);

// odd

var oddNumbers = numbers.filter(num => num % 2 != 0);

console.log(oddNumbers);


