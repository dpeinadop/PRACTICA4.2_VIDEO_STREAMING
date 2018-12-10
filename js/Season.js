function Season (title, episodes){
		
	//La función se invoca con el operador new
	if (!(this instanceof Season)) 
		throw new InvalidAccessConstructorException();
	
	//Validación de parámetros obligatorios
	title = typeof title !== 'undefined' ? title : "";
	if (title === "")
		throw new EmptyValueException("title");

	//Validación de parámetros obligatorios
	title = title.trim();
	title = title.toUpperCase();
	
	var _title = title;
	var _episodes = [];

	//Propiedades de acceso a los atributos privados
	Object.defineProperty(this, 'title', {
		get:function(){
			return _title;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? value : "";
			if (value === "")
				throw new EmptyValueException("title");
			_title = value;
		}		
	});

	Object.defineProperty(this, 'episodes', {
		get:function(){
			return _episodes;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? value : "";
			if (value === "") 
				throw new EmptyValueException("title");
			_episodes = value;
		}
	});
	
	// Añade una temporada pasandole un título, un array de episodios y un array de escenarios 
	this.addSeason = function(title, episode, scenaries){
		if (title === "")
			throw new EmptyValueException("title");
		if (!Array.isArray(episode))
			throw new EmptyValueException("");
		if (!Array.isArray(scenaries))
			throw new EmptyValueException("");
		
		_episodes.push({"title": title,"episode": episode,"scenarios": scenaries});
	}
	
}

Season.prototype = {}; 
Season.prototype.constructor = Season;


Season.prototype.toString = function(){
	return "Title: " + this.title +  " Episodes: " + this.episodes +  " Escenarios: " + this.scenaries;
}
