
function sum_of_digit(number) {
    if (number == 0) {
        return 0
    }
    return number % 10 + sum_of_digit(Math.floor(number / 10))


}
console.log(sum_of_digit(234));
