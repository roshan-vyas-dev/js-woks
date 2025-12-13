// w.a.p function isPrime(number) return true if number is prime else return false

function isPrime(num) {

    let primeNumber = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primeNumber=false;
            break
        }

    }
    return primeNumber;
}
console.log(isPrime(7));
console.log(isPrime(5));
console.log(isPrime(9));

