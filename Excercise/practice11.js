class complex {
	constructor(r, i) {
		this.real = r;
		this.imaginary = i;
	}

	sum(num) {
		let new_r = this.real + num.real;
		let new_i = this.imaginary + num.imaginary;

		return new complex(new_r, new_i);
		
	}

    display(){
        console.log(`${this.real }+ ${this.imaginary}i`)
    }
}

let a = new complex(5, 8);
a.display()
let b = new complex(2, 6);
b.display()

let c = a.sum(b)
c.display()
