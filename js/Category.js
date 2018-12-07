"use strict";

function Category(name, description) {
	
	//La función se invoca con el operador new
	if (!(this instanceof Category))
		throw new InvalidAccessConstructorException();

	//Validación de parámetros obligatorios
	

	name = typeof name !== 'undefined' ? name : "";
	if (name === "") 
		throw new EmptyValueException("name");

	//Definición de atributos privados del objeto
	var _name = name;
	var _description = description;

	name = name.trim();
	name = name.toUpperCase();

	//Propiedades de acceso a los atributos privados
	Object.defineProperty(this, 'name', {
		get: function () {
			return _name;
		},
		set: function (value) {
			value = typeof value !== 'undefined' ? value : "";
			if (name === "") 
				throw new EmptyValueException("name");
				_name = value;
		}
	});

	Object.defineProperty(this, 'description', {
		get: function () {
			return _description;
		},
		set: function (value) {
			_description = typeof value !== 'undefined' ? value : "";
			
		}
	});
}

	Category.prototype = {};
	Category.prototype.constructor = Category;
	
Category.prototype.toString = function () {
	return "Name: " + this.name + " Description: " + this.description;
}


