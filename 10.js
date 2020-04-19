let EratosthenesAlgorithm = (maxInteger) => {
    let arr = new Array(maxInteger).fill(true)
    for (let p = 2; p * p <= maxInteger; p++) {

        if (arr[p] === true) {

            for (let i = p * p; i < maxInteger; i += p) {
                arr[i] = false

            }
        }
    }
    return arr;
}


let primeCountAlgorithm = (maxInteger) => {
    let i = 3,
        sum = 2,
        arr = EratosthenesAlgorithm(maxInteger);

    for (i; i <= arr.length; i++) {
        if (arr[i]) {
            sum += i;
        }
    }
    return BigInt(sum);
};

console.log(primeCountAlgorithm(2000000));
