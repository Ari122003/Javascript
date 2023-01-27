let p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve("P1 is resolved");
	}, 3000);
}).then(function (text) {
		console.log(text);

		let p2 = new Promise(function (resolve, reject) {
			setTimeout(function () {
				// resolve("P2 is resolevd")
				reject("P2 is rejected");
			}, 3000);
		});

		return p2;
	}).then(null, function (text) {
		console.log(text);

		let p3 = new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve("P3 is resolved");
			}, 3000);
		});

		return p3;
	}).then(function (text) {
		console.log(text);
	});
