let isPrime = (number) => {
    if (number <= 1) { return false; }
    if (number == 2) { return true; }
    if (!(number % 2)) { return false; }
    let maxCheck = Math.floor(Math.sqrt(number));
    for (let i = 3; i <= maxCheck; i += 2) {
        if (!(number % i)) { return false; }
    }
    return true;
}


let primePlusPrimeAlortihm = (maxInteger) => {
    let maxLength = 0;
    let maxFound = 2;
    for (let j = 2; j < maxInteger; j++) {

        if (isPrime(j)) {
            let primesLength = 0;
            let sum = 0;
            for (let i = j; sum < maxInteger; i++) {
                if (isPrime(i)) {
                    sum += i;
                    primesLength++;

                    if (primesLength > maxLength && isPrime(sum)) {
                        maxLength = primesLength;
                        maxFound = sum;
                    }
                }
            }
        }
    }
    return maxFound;
}

console.log(primePlusPrimeAlortihm(1000000));
