"use strict";
// objeto person
//name (obligatorio), lastname1(obligatorio), lastname2, born(obligatorio),picture


function Person (name, lastname1, born, lastname2, picture){
	//La función se invoca con el operador new
	if (!(this instanceof Person)) 
		throw new InvalidAccessConstructorException();

	//Validación de parámetros obligatorios
	name = typeof name !== 'undefined' ? name : "";
	if (name === "")
		throw new EmptyValueException("name");
	lastname1 = typeof lastname1 !== 'undefined' ? lastname1 : "";
	if (lastname1 === "")
		throw new EmptyValueException("lastname1");
	if (!(born instanceof Date))
		throw new EmptyValueException("born");
		
	
	name = name.trim();
	name = name.toLowerCase();
	lastname1 = lastname1.trim();
	lastname1 = lastname1.toLowerCase();
	if (lastname2 ==! ""){
		lastname2 = lastname2.trim();
		lastname2 = lastname2.toLowerCase();
	}
	if(picture ==! ""){
		picture = picture.trim();
		picture = picture.toLowerCase();
	}
	
	//Definición de atributos privados del objeto
	var _name = name;
	var _lastname1 = lastname1;
	var _lastname2 = lastname2;
	var _born = born;
	var _picture = picture;
	

	//Propiedades de acceso a los atributos privados
	Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? value : "";
			if (value === "") 
				throw new EmptyValueException("name");
				_name = value;
		}		
	});

	Object.defineProperty(this, 'lastname1', {
		get:function(){
			return _lastname1;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? value : "";
			if (value === "") 
				throw new EmptyValueException("lastname1");
				_lastname1 = value;
		}		
	});

	Object.defineProperty(this, 'lastname2', {
		
		get:function(){
			return _lastname2;
		},
		set:function(value){
			_lastname2 = typeof value !== 'undefined' ? value : "";
			 
		}		
	});

	Object.defineProperty(this, 'born', {
		get:function(){
			return _born;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? value : "";
			if (value === "") 
				throw new EmptyValueException("born");
				_born = value;
		}		
	});

	Object.defineProperty(this, 'picture', {
		get:function(){
			return _picture;
		},
		set:function(value){
			_picture = typeof value !== 'undefined' ? value : "";
			
		}		
	});	
	
	
}
Person.prototype = {}; 
Person.prototype.constructor = Person;


Person.prototype.toString = function(){
	return "Name: " + this.name +  " Lastname1: " + this.lastname1 + " Lastname2: " + this.lastname2 + " Born: " + this.born + " Picture: " + this.picture;
}











