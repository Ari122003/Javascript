// For array
let arr = [2, 4, "Aritra"];

let [a, b, c] = arr;

console.log(a, b, c);

// For object

let obj = {
	x: "Aritra",
	y: 81,
	z: "ECE",
};

let { x, y, z } = obj;

console.log(x, y, z);

let bus = [1, 2, 3, 4, 5, 6, 7];
let [u, v, ...rest] = bus;

console.log(...rest);

// spread method ...

let fuck = [1, 3, 5, 7];

let lick = { ...fuck };

console.log(lick);

function sum(x, y, z, w) {
	return x + y + z + w;
}

console.log(sum(...fuck));


console.log({...obj,x:"Ari12",lang:"JS"})
