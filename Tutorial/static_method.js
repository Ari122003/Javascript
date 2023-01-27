class Animal {
	constructor(getname) {
		this.name = Animal.change(getname);
	}

	static change(text) {
		 return text.toUpperCase();
	}
}

let tig = new Animal("tiger");

tig.name="royal bengal"

console.log(tig.name);

