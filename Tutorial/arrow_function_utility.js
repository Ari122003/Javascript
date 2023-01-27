let obj = {
	name: "Aritra",
	roll: 81,
	dept: "ECE",

	display: function () {
		setTimeout(function () {
			console.log(this.name, this.roll);
		}, 3000);
	},
};

obj.display();

let obj2 = {
	name: "Aritra",
	roll: 81,
	dept: "ECE",

	display: function () {
		setTimeout(() => {
			console.log(this.name, this.roll);
		}, 2000);
	},
};

obj2.display();
