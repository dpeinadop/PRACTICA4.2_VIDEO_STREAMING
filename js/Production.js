"use strict";

// objeto Production es una clase abstracta
(function(){ 
	var abstractCreateLock = false; //Seguro para no instanciar Produccion ya que es abstracta

	//Constructor de Produccion. Permite definir propiedades comunes para todos los objetos que lo heredan.
	//Obligatorio serían title, publication.
	function Production (title, publication){
		//Validación clase abstracta
		if(abstractCreateLock) 
			throw new UninstantiatedObjectException("Production");		
		//La función se invoca con el operador new
		if (!(this instanceof Production)) 
			throw new InvalidAccessConstructorException();

		//Validación de parámetros obligatorios
			
		title = typeof title !== 'undefined' ? title : "";
		if (title === "")
			 throw new EmptyValueException("title");
		if (!(publication instanceof Date))
			 throw new EmptyValueException("publication");
		
		title = title.trim();
		title = title.toUpperCase();

		//Definición de atributos privados del objeto
		var _title = title;
		var _nationality = "";
		var _publicacion = publication;
		var _synopsis = "";
		var _image = "";

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

		Object.defineProperty(this, 'nationality', {
			get:function(){
				return _nationality;
			},
			set:function(value){
				_nationality = typeof value !== 'undefined' ? value : 0;
				
			}		
		});

		Object.defineProperty(this, 'publicacion', {
			get:function(){
				return _publicacion;
			},
			set:function(value){
				value = typeof value !== 'undefined' ? value : "";
				if (value === "") 
					throw new EmptyValueException("publicacion");
					_publicacion = value;
			}		
		});

		Object.defineProperty(this, 'synopsis', {
			get:function(){
				return _synopsis;
			},
			set:function(value){
				_synopsis = typeof value !== 'undefined' ? value : "";
			}		
		});
		Object.defineProperty(this, 'image', {
			get:function(){
				return _image;
			},
			set:function(value){
				_image = typeof value !== 'undefined' ? value : "";
			}		
		});

	}
	Production.prototype = {}; 
	Production.prototype.constructor = Production;
	Production.prototype.toString = function(){
		return "Title: " + this.title + " Nationality: " + this.nationality + " Publicacion: " + this.publicacion + "Synopsis: " + this.synopsis + "Image: " + this.image;
	}

	// Definimos la subclase Movie, no tiene ningún parámetro obligatorio
	function Movie(title, publication){

		//Llamada al superconstructor. Debemos desactivar el seguro para realizarla.
		abstractCreateLock = false;
		Production.call(this,title,publication);	
		abstractCreateLock = true;

		//Atributos privados de Movie
		var _resource = "";
		var _locations = [];

		//Propiedades de acceso a los atributos privados
		Object.defineProperty(this, 'resource', {
			get:function(){
				return _resource;
			},
			set:function(value){
				_resource = typeof value !== 'undefined' ? value : "";
			}		
		});		

		Object.defineProperty(this, 'locations', {
			get:function(){
				var nextIndex = 0;		    
					return {
					   next: function(){
						   return nextIndex < locations.length ?
							   {value: locations[nextIndex++], done: false} :
							   {done: true};
				   }
				}
			}	
		});		
			
	}
	Movie.prototype = Object.create(Production.prototype); //Definimos la herencia, por tanto debemos poder declarar un objeto BaseForm
	Movie.prototype.constructor = Movie;
	Movie.prototype.toString = function(){
		return Production.prototype.toString.call(this) + " Resource: " + this.resource + " Locations: " + this.localtions;
	}

	// Definimos la subclase Serie, no contiene parámetros obligatorios.
	function Serie(title, publication){

		//Llamada al superconstructor. Debemos desactivar el seguro para realizarla.
		abstractCreateLock = false;
		Production.call(this, title, publication);	
		abstractCreateLock = true;

		//Atributos privados de Serie
		var _seasons = [];

		//Propiedades de acceso a los atributos privados
		Object.defineProperty(this, 'seasons', {
			get:function(){
				var nextIndex = 0;		    
				return {
				   next: function(){
					   return nextIndex < seasons.length ?
						   {value: seasons[nextIndex++], done: false} :
						   {done: true};
				   }
				}
			}	
		});	
		
		//addSeasons: function(){}
		//removeSeasons : function(){}
	
					
			
		
	}
		
	Serie.prototype = Object.create(Production.prototype); //Definimos la herencia, por tanto debemos poder declarar un objeto BaseForm
	Serie.prototype.constructor = Serie;
	Serie.prototype.toString = function(){
		return Production.prototype.toString.call(this) + " Resource: " + this.resource + " Locations: " + this.localtions;
	}


	abstractCreateLock = true; //Activamos el seguro

	//Devolvemos constructores
	window.Production = Production; 
	window.Movie = Movie; 
	window.Serie = Serie; 
	
})(); //Fin declaración clase abstracta Production y sus respectivas subclases
