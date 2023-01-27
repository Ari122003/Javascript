class Student {
	constructor(getname, getroll) {
		this.Name = getname;
		this.Roll = getroll;
	}

	present() {
		console.log(this.Name + " is present");
	}

	absent() {
		console.log(this.Name + " is absent");
	}
}

class Programmer extends Student {
	present() {
		super.present();
		console.log("He is a programmer");
	}
}

let ari = new Programmer("Aritra", 81);
let sou = new Student("Souvik", 23);

console.log(ari);

ari.present();
sou.present();
