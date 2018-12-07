"use strict";


function Resource (duracion, link){
			
	//La función se invoca con el operador new
	if (!(this instanceof Resource)) 
		throw new InvalidAccessConstructorException();

	//Validación de parámetros obligatorios
	duracion = typeof duracion !== 'undefined' ? duracion : 0;
	if(!isNaN(duracion)) throw new NaNValueException("duracion");
	if (duracion === "") throw new EmptyValueException("duracion");
	if (link === 'undefined' || link === '') throw new EmptyValueException("link");	
	if (/^https?:\/\/(www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}(\:(\d){2,4})?(\/[a-zA-Z0-9_.$%._\+~#]+)*(\?(\w+=.*)(\&(\w+=.+))*)?$/.test (url) === true ||
		/^(\/?[a-zA-Z0-9_.$%._\+~#]+)*(\?(\w+=.*)(\&(\w+=.+))*)?$/.test (link) === true)
		var _link = link;
	else
		throw new InvalidValueException("link", link);
	
	

	//Definición de atributos privados del objeto
	var _duracion = duracion;
	var _link = link;
	var __audios = [];
	var _subtitles = []

	//Propiedades de acceso a los atributos privados
	Object.defineProperty(this, 'duracion', {
		get:function(){
			return _duracion;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? value : 0;
			if (duracion === "") 
				throw new EmptyValueException("duracion");
				_duracion = value;
		}		
	});

	Object.defineProperty(this, 'link', {
		get:function(){
			return _link;
		},
		set:function(value){
			if (value === 'undefined' || value === '') 
				throw new EmptyValueException("link");	
			if (/^https?:\/\/(www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}(\:(\d){2,4})?(\/[a-zA-Z0-9_.$%._\+~#]+)*(\?(\w+=.*)(\&(\w+=.+))*)?$/.test (value) === true ||
				/^(\/?[a-zA-Z0-9_.$%._\+~#]+)*(\?(\w+=.*)(\&(\w+=.+))*)?$/.test (value) === true)
				_link = value;
			else
				throw new InvalidValueException("link", value);		
		}		
	});	

	//Devuelve un iterator de los audios del Video en Streaming
	Object.defineProperty(this, 'audios', {
		get:function(){
			var nextIndex = 0;		    
			return {
			   next: function(){
				   return nextIndex < audios.length ?
					   {value: audios[nextIndex++], done: false} :
					   {done: true};
			   }
			}
		}	
	});	

	//Añade un nuevo autor al gestor
	this.addAudios= function(audios){
		if (!(audios instanceof audios)) { 
			throw new AudiosException ();
		}		
		var position = getAudiosPosition(audios); 	
		if (position === -1){
			_audios.push(audios);
		} else{
			throw new AudiosException();
		}	

		return audios.length;
	}

	//Elimina un nuevo autor del gestor
	this.removeAudios = function(audios){
		if (!(audios instanceof audios)) { 
			throw new AudiosException ();
		}		
		var position = getAudiosPosition(audios); 	
		if (position !== -1){
			if (audios.title !== _defaultAuthor.title){
				_audios.splice(position, 1);
			} else{
				throw new DefaulAudiosException();
			}															
		} else{
			throw new AudiosNotExistsException();
		}	
		return _audios.length;
	}

	//Dado un autor, devuelve la posición de ese autor en el array de autores o -1 si no lo encontramos.
	function getAudiosPosition(audios){
		if (!(audios instanceof Audios)) { 
			throw new AudiosException ();
		}		

		function compareElements(element) {
		  return (element.title === audios.title)
		}
		
		return _audios.findIndex(compareElements);		
	}
	function getAudiosPosition(audios){
		if (!(audios instanceof Audios)) { 
			throw new AudiosException ();
		}		

		function compareElements(element) {
		  return (element.title === audios.title)
		}
		
		return _audios.findIndex(compareElements);		
	};	

		

	//Devuelve un iterator de los subtitles del Video en Streaming
	Object.defineProperty(this, 'subtitles', {
		get:function(){
			var nextIndex = 0;		    
			return {
			   next: function(){
				   return nextIndex < subtitles.length ?
					   {value: subtitles[nextIndex++], done: false} :
					   {done: true};
			   }
			}
		}	
	});	

	//Añade un nuevo autor al gestor
	this.addSubtitles= function(subtitles){
		if (!(audios instanceof subtitles)) { 
			throw new SubtitlesException ();
		}		
		var position = getSubtitlesPosition(subtitles); 	
		if (position === -1){
			_subtitles.push(subtitles);
		} else{
			throw new SubtitlesException();
		}	

		return subtitles.length;
	}

	//Elimina un nuevo autor del gestor
	this.removeSubtitles= function(subtitles){
		if (!(audios instanceof audios)) { 
			throw new AudiosException ();
		}		
		var position = getSubtitlesPosition(subtitles); 	
		if (position !== -1){
			if (subtitles.title !== _defaultSubtitles.title){
				_subtitles.splice(position, 1);
			} else{
				throw new DefaulSubtitlesException();
			}															
		} else{
			throw new SubtitlesNotExistsException();
		}	
		return _subtitles.length;
	}

	//Dado un autor, devuelve la posición de ese autor en el array de autores o -1 si no lo encontramos.
	function getSubtitlesPosition(subtitles){
		if (!(subtitles instanceof Subtitles)) { 
			throw new SubtitlesException ();
		}		

		function compareElements(element) {
		  return (element.title === subtitles.title)
		}
		
		return _subtitles.findIndex(compareElements);		
	}
	function getSubtitlesPosition(subtitles){
		if (!(subtitles instanceof Subtitles)) { 
			throw new SubtitlesException ();
		}		

		function compareElements(element) {
		  return (element.title === subtitles.title)
		}
		
		return _subtitles.findIndex(compareElements);		
	};

	
}
Resource.prototype = {}; 
Resource.prototype.constructor = Resource;

Resource.prototype.toString = function(){
	return "Duración: " + this.duracion +  " Link: " + this.link + " Audios: " + this.audios + "Subtitles: " + this.subtitles;
}