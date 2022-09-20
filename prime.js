function isPrime(number) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            count++;
        }
    }
    return count;
}

let result = isPrime(13);
if (result == 2) {
    console.log('Prime');
} else {
    console.log('Not Prime');
}
