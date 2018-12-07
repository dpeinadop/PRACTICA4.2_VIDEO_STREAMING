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
			Object.defineProperty(this, 'users', {
				get: function () {
					var nextIndex = 0;
					return {
						next: function () {
							return nextIndex < users.length ?
								{ value: users[nextIndex++], done: false } :
								{ done: true };
						}
					}
				}
			});	

			// Añade un nuevo usuario al gestor de video
			this.addUser = function (users) {
				if (!(users instanceof User)) {
					throw new UserVideoSystemException();
				}
				var position = getUserPosition(users);
				if (position === -1) {
					_users.push(users);
				} else {
					throw new UserExistsVideoSystemException();
				}

				return _users.length;
			}

			// Elimina un nuevo usuario del gestor de video
			this.removeUser = function (users) {
				if (!(users instanceof User)) {
					throw new UserVideoSystemException();
				}
				var position = getUserPosition(users); 
				if (position !== -1) 
					_users.splice(position, 1);
				else {
					throw new UserNotExistsVideoSystemException();
				} 
				return _users.length;
			}
				

			//Dado un usuario, devuelve la posición de ese usuario en el array de usuarios o -1 si no lo encontramos.
			function getUserPosition(users){
				if (!(users instanceof User)) { 
					throw new UserVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.username === users.username)
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
							return nextIndex < categories.length ?
								{ value: categories[nextIndex++], done: false } :
								{ done: true };
						}
					}
				}
			});

			// Añade las categorias al array Category
			this.addCategory = function (categories) {
				if (!(categories instanceof Category)) {
					throw new CategoryVideoSystemException();
				}
				var position = getCategoryPosition(Category);
				if (position === -1) {
					_categories.push(
						{
							categories: Category,
							productions: Production
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

			/* Definición del atributo productions como array para contener todos las producciones del sistema. */
			var _productions = []; 
			
			//Devuelve un iterator de las producciones del VideoSystem
			Object.defineProperty(this, 'productions', {
				get: function () {
					var nextIndex = 0;
					return {
						next: function () {
							return nextIndex < productions.length ?
								{ value: productions[nextIndex++], done: false } :
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
			function getProductionsPosition(productions){
				if (!(productions instanceof Production)) { 
					throw new ProductionVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.productions === productions.title)
				}
				
				return _productions.findIndex(compareElements);		
			}

			/* Definición del atributo actors como array para contener todos los actores del sistema. */
			var _actors = [];
			
			//Devuelve un iterator de los actores y actrices del VideoSystem
			Object.defineProperty(this, 'actors', {
				get: function () {
					var nextIndex = 0;
					return {
						next: function () {
							return nextIndex < actors.length ?
								{ value: actors[nextIndex++], done: false } :
								{ done: true };
						}
					}
				}
			});

			
			// Añade los actores al array Actors
			this.addActors = function (actors) {
				if (!(actors instanceof Person)) {
					throw new ActorVideoSystemException();
				}
				var position = getActorPosition(actors);
				if (position === -1) {
					_actors.push(
						{
							actors: Person,
							productions:[
								{
									production:  Production,
									character: String,
									main: Boolean
								}
							]
						}
					);
				} else {
					throw new ActorExistsImageManagerException();
				}

				return _actors.length;
			}

			// Borra los actores del array Actors
			this.removeActors = function (actors) {
				if (!(actors instanceof Person)) {
					throw new ActorVideoSystemException();
				}
				var position = getActorsPosition(actors);
				if (position !== -1) 
					_actors.splice(position, 1);
				else {
					throw new ActorNotExistsImageManagerException();
				} 
				return _actors.length;
			}

			//Dado un actor, devuelve la posición de ese actor en el array de actores o -1 si no lo encontramos.
			function getActorsPosition(actors){
				if (!(actors instanceof Person)) { 
					throw new ActorVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.actors === actors.name)
				}
				
				return _actors.findIndex(compareElements);		
			}

			/* Definición del atributo directors como array para contener todos los direscore del sistema. */
			var _directors = []; 

			//Devuelve un iterator de los directores del VideoSystem
			Object.defineProperty(this, 'directors', {
				get: function () {
					var nextIndex = 0;
					return {
						next: function () {
							return nextIndex < directors.length ?
								{ value: directors[nextIndex++], done: false } :
								{ done: true };
						}
					}
				}
			});

			// Añade los directores al array Director
			this.addDirector = function (directors) {
				if (!(directors instanceof Person)) {
					throw new DirectorVideoSystemException();
				}
				var position = getActorPosition(directors);
				if (position === -1) {
					_directors.push(
						{
							directors: Person,
							productions: Production
						}
					);
				} else {
					throw new DirectorExistsImageManagerException();
				}

				return _directors.length;
			}

			// Borra los directores del array Director
			this.removeDirector = function (directors) {
				if (!(directors instanceof Person)) {
					throw new DirectorVideoSystemException();
				}
				var position = getActorsPosition(directors);
				if (position !== -1) 
					_directors.splice(position, 1);
				else {
					throw new DirectorNotExistsImageManagerException();
				} 
				return _directors.length;
			}

			//Dado un director, devuelve la posición de ese director en el array de directores o -1 si no lo encontramos.
			function getActorsPosition(directors){
				if (!(Director instanceof Person)) { 
					throw new DirectorVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.directors === directors.name)
				}
				
				return _directors.findIndex(compareElements);		
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