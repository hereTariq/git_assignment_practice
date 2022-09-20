function isPrime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 1) {
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
