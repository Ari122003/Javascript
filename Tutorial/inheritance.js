class Animal {
	constructor(getname, gethabitat) {
		this.Name = getname;
		this.Habitat = gethabitat;
	}

	run(obj) {
		console.log(obj + " is runing");
	}

	eat = (obj) => {
		console.log(obj + " is eating");
	};
}

class Tiger extends Animal {
	roar(obj) {
		console.log(obj + " is roaring");
	}

	hunt = (obj) => {
		console.log(obj + " is hunting");
	};
}

let sheru = new Tiger("Sheru", "Forest");

console.log(sheru);
sheru.hunt(sheru.Name);
sheru.roar(sheru.Name);
sheru.run(sheru.Name);
