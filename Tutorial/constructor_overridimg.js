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
	constructor(getname, gethabitat, gettype) {
		super(getname, gethabitat);

		this.Type = gettype;
	}

	roar(obj) {
		console.log(obj + " is roaring");
	}

	hunt = (obj) => {
		console.log(obj + " is hunting");
	};
}

let sheru = new Tiger("Sheru", "Forest", "Royal Bengal");

console.log(sheru.Name);
