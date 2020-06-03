let factorialDigitSum = (LIMIT) => {
	let factorial = BigInt(1);
	console.log(typeof factorial); // bigint

	for (let i = 1n; i <= LIMIT; i++) {
		factorial = factorial * i;
	}

	return factorial
		.toString()
		.split("")
		.reduce((a, b) => {
			console.log(a);
			return parseInt(a) + parseInt(b);
		});
};

console.log(factorialDigitSum(100));
