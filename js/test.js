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

		// <-- asignar directores a una producion --> console.log(videoS.assignActor(p1,s1));	
		console.log(" ----------- assignDirecto ---------")


		try {
			console.log("videoS.assignActor(null, null): " + videoS.assignActor(null, null));
		} catch (err) {
			console.log("videoS.assignActor(null, null): Exception -> " + err);
		}
		try {
			console.log("videoS.assignActor(p1, null): " + videoS.assignActor(p1, null));
		} catch (err) {
			console.log("videoS.assignActor(p1, null): Exception -> " + err);
		}
		try {
			console.log("videoS.assignActor(null, m1): " + videoS.assignActor(null, m1));
		} catch (err) {
			console.log("videoS.assignActor(null, m1): Exception -> " + err);
		}
		try {
			console.log("videoS.assignActor(m1, m1): " + videoS.assignActor(m1, m1));
		} catch (err) {
			console.log("videoS.assignActor(m1, m1): Exception -> " + err);
		}
		videoS.assignActor(p1, m1);
		try {
			console.log(".videoS.assignActor(p1, m1): " + videoS.assignActor(p1, m1));
		} catch (err) {
			console.log("videoS.assignActor(p1, m1): Exception -> " + err);
		}

		videoS.assignActor(p1, s1);

		console.log(videoS.assignActor(p1, m1));
		console.log(videoS.assignActor(p2, m1));












		console.log("hola");

		//console.log(videoS.addProductions(s1));
		//	videoS.deassignCategory(cat, s1);

		//
		//	videoS.assignCategory(new Category("b","b "), m1);
		//	console.log(videoS.assignActor(p1,s1));	

		//console.log(cat.toString());
		//console.log(m1.toString());
		//console.log(s1.toString());
		//console.log(videoS.addCategory(cat)); //--> da problemas
		//console.log(videoS.addProductions(s1));
		//console.log(videoS.removeProductions(m1)); --> da problemas





		//    var m1 = new Movie ("HISIS",new Date("1975/12/10") );
		//   var s1 = new Serie ("Los locos", new Date("1990/1/5"));

		// var sea = new Season ("fsdafsdaf");
		// set para lasname2 
		//p2.lastname2 = "bien";
		// 
		// var coor = new Coordinate("1","40");
		// 
		// p2.lastmane2= ("tomate");
		//  console.log(p2)
		// p2.addEpisode("titulo", "sadas", [23, "asdf", new Person("s", "s", new Date())]);
		//    var p3 = new Person("David","Peinado", "prieto", 12/10/1975);
		// var p4 = new Person();
		// var p5 = new Person();
		// console.log(p1.toString());
		//  console.log(p2.toString());
		//  console.log(s1.toString());
		//  console.log(coor.toString());
		// console.log(p3.toString());
		// console.log(p4.toString());
		//  console.log(p5.toString());





	} catch (err) {
		console.log(err);
	}
}





window.onload = testVideoStreamig;

