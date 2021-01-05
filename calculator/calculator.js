function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce((a, c) => a + c, 0);
}

function multiply (arr) {
	return arr.reduce((a, c) => a * c, 1);
}

function power(a, b) {
	return a ** b;
}

function factorial(a) {
	let acc = 1;
	for (let i = a; i > 0; i--) {
		acc *= i
	} return acc;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}