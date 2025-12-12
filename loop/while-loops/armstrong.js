// armstrong number
var number = 8208;
var numberCopy = number;
var orginal = number;

var sum = 0;

var count = 0;

while (number != 0) {
    count++;
    number = Math.floor(number / 10);
}

while (numberCopy != 0) {
    let digit = numberCopy % 10;
    let exponent = digit ** count;
    sum = sum + exponent;
    numberCopy = Math.floor(numberCopy / 10);
}

console.log(sum==orginal?"Armstrong Number":"not a armstrong number");
