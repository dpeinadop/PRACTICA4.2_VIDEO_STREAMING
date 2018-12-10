///Declaración objeto VideoSystem mediante patrón Singleton


var VideoSystem = (function () { //La función anónima devuelve un método getInstance que permite obtener el objeto único
	var instantiated; //Objeto con la instancia única VideoSystem

	function init() { //Inicialización del Singleton

		//Declaración de la función constructora de la instancia VideoSystem
		function VideoSystem(){
			//La función se invoca con el operador new
			if (!(this instanceof VideoSystem)) 
				throw new InvalidAccessConstructorException();

			/* Definición del atributo title */
			var __name = "";
			Object.defineProperty(this, 'name', {
				get:function(){
					return _name;
				},
				set:function(value){
					_name = typeof value !== 'undefined' ? value : "";
				}		
			});	
			
			/* Definición del atributo user como array para contener todos los usuarios del sistema. */
			var _users = []; 

			// Devuelve un iterador con los usuarios del sistema
			Object.defineProperty(this, 'user', {
				get: function () {
					var nextIndex = 0;
					return {
						next: function () {
							return nextIndex < _users.length ?
								{ value: _users[nextIndex++], done: false } :
								{ done: true };
						}
					}
				}
			});	

			// Añade un nuevo usuario al gestor de video
			this.addUser = function (user) {
				if (!(user instanceof User)) {
					throw new UserVideoSystemException();
				}
				var position = getUserPosition(user);
				if (position === -1) {
					_users.push(user);
				} else {
					throw new UserExistsVideoSystemException();
				}

				return _users.length;
			}

			// Elimina un nuevo usuario del gestor de video
			this.removeUser = function (user) {
				if (!(user instanceof User)) {
					throw new UserVideoSystemException();
				}
				var position = getUserPosition(user); 
				if (position !== -1) 
					_users.splice(position, 1);
				else {
					throw new UserNotExistsVideoSystemException();
				} 
				return _users.length;
			}
				

			//Dado un usuario, devuelve la posición de ese usuario en el array de usuarios o -1 si no lo encontramos.
			function getUserPosition(user){
				if (!(user instanceof User)) { 
					throw new UserVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.username === user.username)
				}
				
				return _users.findIndex(compareElements);		
			}

			/* Definición del atributo categories como array para contener todos las categorias del sistema. */
			var _categories = [];

			//Devuelve un iterator de las categorias del VideoSystem	
			Object.defineProperty(this, 'categories', {
				get: function () {
					var nextIndex = 0;
					return {
						next: function () {
							return nextIndex < _categories.length ?
								{ value: _categories[nextIndex++], done: false } :
								{ done: true };
						}
					}
				}
			});

			// Añade las categorias al array Category
			this.addCategory = function (categorie) {
				if (!(categorie instanceof Category)) {
					throw new CategoryVideoSystemException();
				}
				var position = getCategoryPosition(categorie);
				if (position === -1) {
					_categories.push(
						{
							categorie: categorie,
							productions: []
						}
					);
				} else {
					throw new CategoryExistsVideoSystemException();
				}

				return _categories.length;
			}

			// Borra las categorias del array Category
			this.removeCategory = function (categories) {
				if (!(categories instanceof Category)) {
					throw new CategoryVideoSystemException();
				}
				var position = getCategoryPosition(categories);
				if (position !== -1) 
					_categories.splice(position, 1);
				else {
					throw new CategoryNotExistsVideoSystemException();
				} 
				return _categories.length;
			}

			//Dada una categoria, devuelve la posición de esa categoria en el array de categorias o -1 si no lo encontramos.
			function getCategoryPosition(categories){
				if (!(categories instanceof Category)) { 
					throw new CategoryVideoSystemException ();
				}		

				function compareElements(element) {
					return (element.categories === categories.name)
				}
				
				return _categories.findIndex(compareElements);		
			}
			
			//Asigna uno más producciones a una categoría.
			//Si el objeto Category o Production no existen se añaden al sistema.
			this.assignCategory = function(categorie, production){
				var tamanio = 1;
				if (!(categorie instanceof Category)) { 
					throw new CategoryVideoSystemException ();
				}		

				if (!(production instanceof Production)) { 
					throw new ProductionVideoSystemException ();
				}		
				//Obtenemos el idProduccion para asociarlo a la categoria
				var idProduction = this.findAddProduction(production);
				
				//buscamos en categories si existe la categoria
				var categorieIter;
				var find = false;
				var listadoCategorias = this.categories;
				do{
					categorieIter = listadoCategorias.next();
					if (!categorieIter.done && categorie.name == categorieIter.value.categorie.name){
						//encontrado
						find = true;
					}
				}while(!categorieIter.done && !find);
				
				//si no lo encuentro lo añado
				if (!find){
					_categories.push(
							{
								categorie: categorie,
								productions: [idProduction]
							}
						);
				}else{
					//si no está asignada se asigna y si lo está no hace nada
					position = categorieIter.value.productions.indexOf(idProduction);
					if (position === -1) {
						categorieIter.value.productions.push(idProduction);
					}
					tamanio = categorieIter.value.productions.length;
				}
				return tamanio;
				
			}


			//Desasigna uno más producciones a una categoría.
			
			this.deassignCategory = function(categorie, production){
				if (!(categorie instanceof Category)) { 
					throw new CategoryVideoSystemException ();
				}		

				if (!(production instanceof Production)) { 
					throw new ProductionVideoSystemException ();
				}		
				var tamanio = null;
				var categorieIter;
				var find = false;
				var listadoCategorias = this.categories;
				do{
					categorieIter = listadoCategorias.next();
					if (!categorieIter.done && categorie.name == categorieIter.value.categorie.name){
						//encontrado
						find = true;
						var position = categorieIter.value.productions.indexOf(production.id);
						if (position !== -1) 
							categorieIter.value.productions.splice(position, 1);
						tamanio = categorieIter.value.productions.length;

					}
				}while(!categorieIter.done && !find);
				return tamanio;
			}

			// Obtiene un iterador con las producciones de una categoria determinada
			this.getProductionsCategory = function (categoies) {
				var nextIndex = 0;
				var categorieIter;
				var find = false;
				var listadoCategorias = this.categories; // guardamos en una variable el resultado de la iteración
				do{
					categorieIter = listadoCategorias.next();
					if (!categorieIter.done && categorie.name == categorieIter.value.categorie.name){
						//encontrado
						find = true;
					}
				}while(!categorieIter.done && !find);
				
				
				return {
						next: function () {
							return nextIndex < categorieIter.value.productions.length ?
								{ value: categorieIter.value.productions[nextIndex++], done: false } :
								{ done: true };
						}
				}
			}
			
			/* Definición del atributo productions como array para contener todos las producciones del sistema. */
			var _productions = []; 
			var _countProductions = 0; 
			
			//Devuelve un iterator de las producciones del VideoSystem
			Object.defineProperty(this, 'productions', {
				get: function () {
					var nextIndex = 0;
					return {
						next: function () {
							return nextIndex < _productions.length ?
								{ value: _productions[nextIndex++], done: false } :
								{ done: true };
						}
					}
				}
			});

			// Añade las producciones al array Productions
			this.addProductions = function (productions) {
				if (!(productions instanceof Production)) {
					throw new ProductionVideoSystemException();
				}
				var position = getProductionsPosition(productions);
				if (position === -1) {
					productions.id = _countProductions++;
					_productions.push(productions);
				} else {
					throw new ProductionExistsVideoSystemException();
				}

				return _productions.length;
			}

			// Borra las produciones del array Productions
			this.removeProductions = function (productions) {
				if (!(productions instanceof Production)) {
					throw new ProductionVideoSystemException();
				}
				var position = getProductionsPosition(productions);
				if (position !== -1) 
					_productions.splice(position, 1);
				else {
					throw new ProducitionNotExistsVideoSystemException();
				} 
				return _productions.length;
			}

			//Dada una produción, devuelve la posición de esa producion en el array de producciones o -1 si no lo encontramos.
			function getProductionsPosition(production){
				if (!(production instanceof Production)) { 
					throw new ProductionVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.id === production.id)
				}
				
				return _productions.findIndex(compareElements);		
			}

			

			/* Definición del atributo actors como array para contener todos los actores del sistema. */
			var _actors = [];
			var _countActor = 0; 
			
			//Devuelve un iterator de los actores y actrices del VideoSystem
			Object.defineProperty(this, 'actor', {
				get: function () {
					var nextIndex = 0;
					return {
						next: function () {
							return nextIndex < _actors.length ?
								{ value: _actors[nextIndex++], done: false } :
								{ done: true };
						}
					}
				}
			});

						
			// Añade los actores al array Actors
			this.addActors = function (actor) {
				if (!(actor instanceof Person)) {
					throw new ActorVideoSystemException();
				}
				var position = getActorPosition(actor);
				if (position === -1) {
					actor.id = _countActor++;
					_actors.push(
						{
							actor: actor,
							productions:[]
						}
					);
				} else {
					throw new ActorExistsImageManagerException();
				}

				return _actors.length;
			}

			// Borra los actores del array Actors
			this.removeActors = function (actor) {
				if (!(actor instanceof Person)) {
					throw new ActorVideoSystemException();
				}
				var position = getActorsPosition(actor);
				if (position !== -1) 
					_actors.splice(position, 1);
				else {
					throw new ActorNotExistsImageManagerException();
				} 
				return _actors.length;
			}

			//Dado un actor, devuelve la posición de ese actor en el array de actores o -1 si no lo encontramos.
			function getActorsPosition(actor){
				if (!(actor instanceof Person)) { 
					throw new ActorVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.name === actor.name)
				}
				
				return _actors.findIndex(compareElements);		
			}


			this.assignActor = function(actor, production, character, main){
				if (!(actor instanceof Person)) { 
					throw new ActorVideoSystemException ();
				}		

				if (!(production instanceof Production)) { 
					throw new ProductionVideoSystemException ();
				}
				if(character === null || character === 'undefined' || character === ''){
					throw new ProductionVideoSystemException ();
				}
				if(main === null || main === 'undefined' || main === ''){
					throw new ProductionVideoSystemException ();
				}
				//Obtenemos el idProduccion para asociarlo a la categoria
				var idProduction = this.findAddProduction(production);
				
				//buscamos en actors si existe ese actor
				var tamanio = 1;
				var actorIter;
				var find = false;
				var listadoActores = this.actor; // guardamos en una variable el resultado de la iteración
				do{
					actorIter = listadoActores.next();
					if (!actorIter.done && actor.id == actorIter.value.actor.id){
						//encontrado
						find = true;
					}
				}while(!actorIter.done && !find);
				
				//si no lo encuentro lo añado
				if (!find){
					actor.id = _countActor++;
					_actors.push(
							{
								actor: actor,
								productions: [
									{	
										production: idProduction,
										character: character,
										main: main
									}
								]
							}
						);
				}else{
					
					//si no está asignada se asigna y si lo está no hace nada
					position = actorIter.value.productions.findIndex(
							function (element) {return (element.production === idProduction)});
					if (position === -1) {
						actorIter.value.productions.push({	
							production: idProduction,
							character: character,
							main: main
						});
					}
					tamanio = actorIter.value.productions.length;
				}
				return tamanio;
			}

			//Desasigna uno más producciones a un actor.
			this.deassignActor = function(actor, production){
				if (!(actor instanceof Person)) { 
					throw new ActorVideoSystemException ();
				}		

				if (!(production instanceof Production)) { 
					throw new ProductionVideoSystemException ();
				}		
				var tamanio = null;
				var actorIter;
				var find = false;
				var listadoActores = this.actor;
				do{
					actorIter = listadoActores.next();
					if (!actorIter.done && actor.id == actorIter.value.actor.id){
						//encontrado
						find = true;
						var position = actorIter.value.productions.findIndex(
								function (element) {return (element.production === production.id)});
						if (position !== -1) 
							actorIter.value.productions.splice(position, 1);
						tamanio = actorIter.value.productions.length;

					}
				}while(!actorIter.done && !find);
				return tamanio;
			}
			
			//Obtiene un iterador con las produciones de un actor 
			this.getProductionsActor = function (actor) {
				var nextIndex = 0;
				var actorIter;
				var find = false;
				var listadoActores = this.actor; // guardamos en una variable el resultado de la iteración
				do{
					actorIter = listadoActores.next();
					if (!actorIter.done && actor.id == actorIter.value.actor.id){
						//encontrado
						find = true;
					}
				}while(!actorIter.done && !find);
				
				
				return {
						next: function () {
							return nextIndex < actorIter.value.productions.length ?
								{ value: actorIter.value.productions[nextIndex++], done: false } :
								{ done: true };
						}
				}
			}

			/* Definición del atributo directors como array para contener todos los direscore del sistema. */
			var _directors = []; 
			var _countDirecto= 0;

			//Devuelve un iterator de los directores del VideoSystem
			Object.defineProperty(this, 'director', {
				get: function () {
					var nextIndex = 0;
					
					return {
						next: function () {
							return nextIndex < _directors.length ?
								{ value: _directors[nextIndex++], done: false } :
								{ done: true };
						}
					}
				}
			});

			// Añade los directores al array Director
			this.addDirector = function (director) {
				if (!(director instanceof Person)) {
					throw new DirectorVideoSystemException();
				}
				var position = getActorPosition(director);
				if (position === -1) {
					_directors.push(
						{
							director: director,
							productions:[]
						}
					);
				} else {
					throw new DirectorExistsVideoSystemException();
				}

				return _directors.length;
			}

			// Borra los directores del array Director
			this.removeDirector = function (director) {
				if (!(director instanceof Person)) {
					throw new DirectorVideoSystemException();
				}
				var position = getActorsPosition(director);
				if (position !== -1) 
					_directors.splice(position, 1);
				else {
					throw new DirectorNotExistsVideoSystemException();
				} 
				return _directors.length;
			}

			//Dado un director, devuelve la posición de ese director en el array de directores o -1 si no lo encontramos.
			function getActorsPosition(director){
				if (!(director instanceof Person)) { 
					throw new DirectorVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.name === director.name)
				}
				
				return _directors.findIndex(compareElements);		
			}
			

			this.assignDirecto = function(director, production){
				if (!(director instanceof Person)) { 
					throw new DirectoVideoSystemException ();
				}		

				if (!(production instanceof Production)) { 
					throw new ProductionVideoSystemException ();
				}		
				//Obtenemos el idProduccion para asociarlo a la categoria
				var idProduction = this.findAddProduction(production);
				
				//buscamos en directors si existe ese director
				var tamanio = 1;
				var directorIter;
				var find = false;
				var listadoDirectores = this.director; // guardamos en una variable el resultado de la iteración
				do{
					directorIter = listadoDirectores.next();
					if (!directorIter.done && director.id == directorIter.value.director.id){
						//encontrado
						find = true;
					}
				}while(!directorIter.done && !find);
				
				//si no lo encuentro lo añado
				if (!find){
					directorIter.id = _countDirector++;
					_directors.push(
							{
								director: director,
								productions: [
									{	
										production: idProduction,
										character: character,
										main: main
									}
								]
							}
						);
				}else{
					
					//si no está asignada se asigna y si lo está no hace nada
					position = directorIter.value.productions.findIndex(
							function (element) {return (element.production === idProduction)});
					if (position === -1) {
						directorIter.value.productions.push({	
							production: idProduction
						});
					}
					tamanio = directorIter.value.productions.length;
				}
				return tamanio;
			}

			//Desasigna uno más producciones a un director.
			this.deassignDirecto = function(director, production){
				if (!(director instanceof Person)) { 
					throw new DirectoVideoSystemException ();
				}		

				if (!(production instanceof Production)) { 
					throw new ProductionVideoSystemException ();
				}		
				var tamanio = null;
				var directorIter;
				var find = false;
				var listadoDirectores = this.director;
				do{
					directorIter = listadoDirectores.next();
					if (!directorIter.done && director.id == directorIter.value.director.id){
						//encontrado
						find = true;
						var position = directorIter.value.productions.findIndex(
								function (element) {return (element.production === production.id)});
						if (position !== -1) 
						directorIter.value.productions.splice(position, 1);
						tamanio = directorIter.value.productions.length;

					}
				}while(!directorIter.done && !find);
				return tamanio;
			}

			this.getProductionsDirector = function (director) {
				var nextIndex = 0;
				var directorIter;
				var find = false;
				var listadoDirectores = this.actor; // guardamos en una variable el resultado de la iteración
				do{
					directorIter = listadoDirectores.next();
					if (!directorIter.done && actor.id == directorIter.value.director.id){
						//encontrado
						find = true;
					}
				}while(!directorIter.done && !find);
				
				
				return {
						next: function () {
							return nextIndex < directorIter.value.productions.length ?
								{ value: directorIter.value.productions[nextIndex++], done: false } :
								{ done: true };
						}
				}
			}
			
			//función generica para encontrar una producción y si no está añadirla
			this.findAddProduction = function (production){
				//si la categoria no existe se crea en su lista productions
				var idProduction;
				var position = getProductionsPosition(production);
				if (position === -1) {
					//no existe. La guarda estableceiendo su id interna
					this.addProductions(production);
					//volvemos a recuperarlo para trabajar con al objeto con la id interna informada ya que el que nos pasaron por argumento no la tiene informada.
					position = getProductionsPosition(production);
				}
				idProduction = _productions[position].id;
				return idProduction;
			}



		} //Fin constructor VideoSystem
		VideoSystem.prototype = {}; 
		VideoSystem.prototype.constructor = VideoSystem;

		var instance = new VideoSystem();//Devolvemos el objeto VideoSystem para que sea una instancia única.
		Object.freeze(instance);
		return instance;
	} //Fin inicialización del Singleton
	return {
		// Devuelve un objeto con el método getInstance
		getInstance: function () { 
			if (!instantiated) { //Si la variable instantiated es undefined, priemera ejecución, ejecuta init.
				instantiated = init(); //instantiated contiene el objeto único
			}
			return instantiated; //Si ya está asignado devuelve la asignación.
		}
	};
})();