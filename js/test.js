"use strict";

/* 
Testeo del gestor de imágenes.
*/
function testVideoStreamig() {

	// Testeo Objeto Person
	try {

		var videoS = VideoSystem.getInstance();
		videoS.name = "VideoSystem de prueba";
		console.log("Instancia VideoSystem: " + videoS.name);

		var p1 = new Person("David", "Peinado", new Date("1975/12/10"));
		var p2 = new Person("David", "Peinado", new Date("1975/12/10"), "Prieto");
		var p3 = new Person("David", "Peinado", new Date("1975/12/10"), "Prieto", "PICTURE");

		console.log("---------- Objeto user ------------");
		var us1 = new User("Alfredo", "dpeinadoprieto@hotmail.com", "dhui2");
		var us2 = new User("lusi", "drieto@hotmail.com", "hola");
		var us3 = new User("Alfredo", "dpeinadoprieto@hotmail.com", "dhui2");
		var us3 = new User("Alfredo", "dpeinadoprieto@hotmail.com");
		console.log(us3.toString());

		console.log(videoS.addUser(us1));
		console.log(videoS.addUser(us2));
		try {
			console.log("videoS.addUser(us3): " + videoS.addUser(us3));
		} catch (err) {
			console.log("videoS.addUser(us3): Exception -> " + err);
		}
		try {
			console.log("videoS.addUser(us4): " + videoS.addUser(us4));
		} catch (err) {
			console.log("videoS.addUser(us4): Exception -> " + err);
		}

		// <-- asignar produccuiones a una categoria -->
		console.log(" ----------- assignCategory ---------")
		var cat = new Category("a", "Primera categoria ");
		var cat2 = new Category("b", "Segunda categoria ");

		var m1 = new Movie("HISIS", new Date("1975/12/10"));
		var s1 = new Serie("Los locos", new Date("1990/1/5"));
		try {
			console.log("videoS.assignCategory(null, null): " + videoS.assignCategory(null, null));
		} catch (err) {
			console.log("videoS.assignCategory(null, null): Exception -> " + err);
		}
		try {
			console.log("videoS.assignCategory(cat, null): " + videoS.assignCategory(cat, null));
		} catch (err) {
			console.log("videoS.assignCategory(cat, null): Exception -> " + err);
		}
		try {
			console.log("videoS.assignCategory(null, m1): " + videoS.assignCategory(null, m1));
		} catch (err) {
			console.log("videoS.assignCategory(null, m1): Exception -> " + err);
		}
		try {
			console.log("videoS.assignCategory(m1, null): " + videoS.assignCategory(m1, null));
		} catch (err) {
			console.log("videoS.assignCategory(m1, null): Exception -> " + err);
		}
		try {
			console.log("videoS.assignCategory(cat, cat): " + videoS.assignCategory(cat, cat));
		} catch (err) {
			console.log("videoS.assignCategory(cat, cat): Exception -> " + err);
		}
		videoS.assignCategory(cat, m1);
		try {
			console.log(".assignCategory(cat, m1): " + videoS.assignCategory(cat, m1));
		} catch (err) {
			console.log("assignCategory(cat, m1): Exception -> " + err);
		}
		videoS.assignCategory(cat, s1);
		console.log(videoS.removeUser(us2));
		console.log(videoS.assignCategory(cat, m1));
		console.log(videoS.assignCategory(cat2, m1));

		console.log(videoS.deassignCategory(cat2, m1));
		console.log(videoS.deassignCategory(cat, m1));
		console.log(videoS.deassignCategory(cat, s1));

		// <-- asignar y desasignar actores a una producion -->	
		console.log(" ----------- assignActor   y deassignActor---------")


		try {
			console.log("videoS.assignActor(null, null, 'principal', true): " + videoS.assignActor(null, null, 'principal', true));
		} catch (err) {
			console.log("videoS.assignActor(null, null, 'principal', true): Exception -> " + err);
		}
		try {
			console.log("videoS.assignActor(p1, null, 'principal', true): " + videoS.assignActor(p1, null, 'principal', true));
		} catch (err) {
			console.log("videoS.assignActor(p1, null, 'principal', true): Exception -> " + err);
		}
		try {
			console.log("videoS.assignActornull, m1, 'principal', true): " + videoS.assignActor(null, m1, 'principal', true));
		} catch (err) {
			console.log("videoS.assignActor(null, m1, 'principal', true): Exception -> " + err);
		}
		try {
			console.log("videoS.assignActor(m1, m1, 'principal', true): " + videoS.assignActor(m1, m1, 'principal', true));
		} catch (err) {
			console.log("videoS.assignActor(m1, m1, 'principal', true): Exception -> " + err);
		}

		try {
			console.log("videoS.assignActor(p1, m1, 'principal', true): " + videoS.assignActor(p1, m1, 'principal', true));
		} catch (err) {
			console.log("videoS.assignActor(p1, m1, 'principal', true): Exception -> " + err);
		}

		console.log(videoS.assignActor(p1, s1, "principal", true));

		console.log(videoS.assignActor(p1, m1, "principal", false));
		console.log(videoS.assignActor(p2, s1, "reparto", false));
		console.log(videoS.deassignActor(p3, m1));
		console.log(videoS.deassignActor(p1, m1));
		console.log(videoS.deassignActor(p1, s1));

		// <-- asignar y desasignar directores a una producion -->	
		console.log(" ----------- assignDirecto , deassigDirecto---------")


		try {
			console.log("videoS.assignDirecto(null, null): " + videoS.assignDirecto(null, null));
		} catch (err) {
			console.log("videoS.assignDirecto(null, null): Exception -> " + err);
		}
		try {
			console.log("videoS.assignDirecto(p1, null): " + videoS.assignDirecto(p1, null));
		} catch (err) {
			console.log("videoS.assignDirecto(p1, null): Exception -> " + err);
		}
		try {
			console.log("videoS.assignDirecto(null, m1): " + videoS.assignDirecto(null, m1));
		} catch (err) {
			console.log("videoS.assignDirecto(null, m1): Exception -> " + err);
		}
		try {
			console.log("videoS.assignDirecto(m1, m1): " + videoS.assignDirecto(m1, m1));
		} catch (err) {
			console.log("videoS.assignDirecto(m1, m1): Exception -> " + err);
		}

		try {
			console.log("videoS.assignDirecto(p1, m1): " + videoS.assignDirecto(p1, m1));
		} catch (err) {
			console.log("videoS.assignDirecto(p1, m1): Exception -> " + err);
		}

		console.log(videoS.assignActor(p1, s1));

		console.log(videoS.assignActor(p1, m1));
		console.log(videoS.assignActor(p2, s1));
		console.log(videoS.deassignActor(p3, m1));
		console.log(videoS.deassignActor(p1, m1));
		console.log(videoS.deassignActor(p1, s1));

		// <-- iterador getProductionsDirector -->
		console.log("iterador getProductionsDirector");
		var a = videoS.getProductionsActor(p1);
		console.log(a.next());
		console.log(a.next());














	} catch (err) {
		console.log(err);
	}
}





window.onload = testVideoStreamig;

