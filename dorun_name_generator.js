let letter1 = ['a', 'b', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
let letter2 = ['a', 'e', 'i', 'o', 'u', 'y']
let letter3 = ['f', 'k', 'n', 'r', 's', 'l', 'm']

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function getSingleName() {
	let name = '';
	name = name + letter1[getRandomInt(letter1.length)];
	name = name + letter2[getRandomInt(letter2.length)];
	name = name + letter3[getRandomInt(letter3.length)];
	
	return name;
}

function getSurname() {
	return getSingleName() + '' + getSingleName();
}

function genNames(x) {
	for (let i = 0; i < x; i++) {
		let surname = getSurname();
		console.log(surname);
	}
}
