const LIMIT = 1e12; // 1e12 === 1.000.000.000.000 === 10^12

let blue = 15;
let red = 6;
let num = blue + red;
while (num <= LIMIT) {
	let nextBlue = 3 * blue + (2 * num - 2);
	let nextNum = 4 * blue + (3 * num - 3);

	blue = nextBlue;
	num = nextNum;
}

console.log(blue);
