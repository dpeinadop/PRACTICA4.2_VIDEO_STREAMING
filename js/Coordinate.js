"use strict";
// Objeto Coordinate para definir coordenadas.

function Coordinate(latitude = 0, longitude = 0){
	//La función se invoca con el operador new
	if (!(this instanceof Coordinate)) 
		throw new InvalidAccessConstructorException();

	latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : 0;
	if (Number.isNaN(latitude)  || latitude < -90 || latitude > 90) 
		throw new InvalidValueException("latitude", latitude);
	longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : 0;
	if (Number.isNaN(longitude)  || longitude < -180 || longitude > 180) 
		throw new InvalidValueException("longitude", longitude);

	var _latitude = latitude;
	var _longitude = longitude;

	Object.defineProperty(this, 'latitude', {
		get:function(){
			return _latitude;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
			if (Number.isNaN(value)  || value < -90 || value > 90) 
				throw new InvalidValueException("latitude", value);
			_latitude = value;
		}		
	});		

	Object.defineProperty(this, 'longitude', {
		get:function(){
			return _longitude;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
			if (Number.isNaN(value)  || value < -180 || value > 180) 
				throw new InvalidValueException("latitude", value);
			_longitude = value;
		}		
	});		

}
Coordinate.prototype = {};
Coordinate.prototype.constructor = Coordinate;

Coordinate.prototype.getSexagesimalLatitude = function (){	
	var direction = this.latitude >= 0 ? "N" : "S";
	var latitude = Math.abs(this.latitude);
	var grades =  Math.floor (latitude);
	var tmpMinutes = (latitude - grades) * 60;
	var minutes = Math.floor (tmpMinutes);
	var tmpSeconds = (tmpMinutes - minutes) * 60;
	var seconds = Math.round (tmpSeconds);

	return grades + "°" + minutes + "'" + seconds + "''" + direction; 
}

Coordinate.prototype.getSexagesimalLongitude = function (){	
	var direction = this.longitude >= 0 ? "E" : "W";
	var longitude = Math.abs(this.longitude);
	var grades =  Math.floor (longitude);
	var tmpMinutes = (longitude - grades) * 60;
	var minutes = Math.floor (tmpMinutes);
	var tmpSeconds = (tmpMinutes - minutes) * 60;
	var seconds = Math.round (tmpSeconds);

	return grades + "°" + minutes + "'" + seconds + "''" + direction; 
}


Coordinate.prototype.toString = function(){
	return "Latitude: " + this.latitude +  " Longitude: " + this.longitude;
}