// JavaScript source code
// Week 2 Lab 2


// Exercise 1
var myArray = ['Randy Savage', 'Ric Flair', 'Hulk Hogan'];

const greeter = (name) => "Hello " + name;

for (let name of myArray) {
	let names = greeter(name);
	console.log(names);
}

// Exercise 2

function capitalize(string) {
	let letters = string.split('');
	let [capital, ...rest] = letters;
	return capital.toUpperCase() + combine(rest);
}

function combine(rest) {
	let newWord = "";
	for (let name of rest) {
		newWord += name;
	}
	return newWord;
}
console.log(capitalize("hello"));

//Exercise 3

function combine(rest) {
	let newWord = "";
	for (let name of rest) {
		newWord += name;
	}
	return newWord;
}
const array1 = ['red', 'blue', 'green'];

let capitalizedColors = array1.map(function capitalize(string) {
	let characters = string.split('');
	let [firstChar, ...restChars] = characters;
	return firstChar.toUpperCase() + combine(restChars);
});

console.log(capitalizedColors);

//Exercise 4

let values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter((value => value < 20));

console.log(filterLessThan20);

//Exercise 5

let array = [1, 2, 3, 4];

console.log(array.reduce((toAdd, total) => toAdd + total));
console.log(array.reduce((toAdd, total) => toAdd * total));

//Exercise 6

class Car {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
}

class Sedan extends Car {
	constructor(name, year, balance) {
		super(name);
		super(year);
		this.balance = balance;
	}
}