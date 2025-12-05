// w.a.p to display sum of the digits is (3+4+5=12)

var number = 543;
var sum = 0;

while (number != 0) {
    let digit = number % 10;
    sum = sum + digit;
    number=Math.floor(number/10);
}
console.log(sum);
