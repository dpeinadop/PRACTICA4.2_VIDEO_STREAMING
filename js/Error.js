// Errores generales de los objetos

function BaseException() {
}
BaseException.prototype = new Error(); //Herencia del objeto Error.
BaseException.prototype.constructor = BaseException; //Definimos el constructor
//Sobrescribimos el método toString para personalizarlos
BaseException.prototype.toString = function () {
	// note that name and message are properties of Error
	return this.name + ": " + this.message;
};

//Excepciones de validación de parámetros. Reutilizables en todas las clases
function ParameterValidationException() {
	this.name = "ParameterValidationException";
	this.message = "Error: Parameter Validation Exception.";
}
ParameterValidationException.prototype = new BaseException(); //Heredamos de BaseException
ParameterValidationException.prototype.constructor = ParameterValidationException;

//Excepción personalizada para indicar valores vacios.
function EmptyValueException(param) {
	this.name = "EmptyValueException";
	this.message = "Error: The parameter " + param + " can't be empty.";
}
EmptyValueException.prototype = new ParameterValidationException(); //Heredamos de ParameterValidationException
EmptyValueException.prototype.constructor = EmptyValueException;

/*
Manejo de errores personalizados
*/

//Excepción base para ir creando el resto de excepciones.
function VideoSystemtException() {
	this.name = "VideoSystemtException";
	this.message = "Error: Video System Exception.";
}
VideoSystemtException.prototype = new BaseException(); //Heredamos de BaseException
VideoSystemtException.prototype.constructor = VideoSystemtException;

//Excepción personalizada para indicar que el constructos no puede ser llamado como una función.
//Recibe como parámetro un valor
//Excepción acceso inválido a constructor
function UninstantiatedObjectException(param) {
	this.name = "UninstantiatedObjectException";
	this.message = "You can't instantiate a " + param + " object";
}
UninstantiatedObjectException.prototype = new ParameterValidationException();
UninstantiatedObjectException.prototype.constructor = UninstantiatedObjectException;


//Excepción intento de instacia clase abstracta
function AbstractClassException(classValue) {
	this.name = "AbstractClassException";
	this.message = classValue + " is a abstract class.";
}
AbstractClassException.prototype = new BaseException();
AbstractClassException.prototype.constructor = AbstractClassException;

//Excepción acceso inválido a constructor
function InvalidAccessConstructorException() {
	this.name = "InvalidAccessConstructorException";
	this.message = "Constructor can’t be called as a function.";
}
InvalidAccessConstructorException.prototype = new BaseException();
InvalidAccessConstructorException.prototype.constructor = InvalidAccessConstructorException;


// Excepciones individualizadas para los diferentes objetos
function VideoSystemException() {
	this.name = "VideoSystemException";
	this.message = "Error: Video System Generic Exception.";
}
VideoSystemException.prototype = new BaseException(); //Heredamos de BaseException
VideoSystemException.prototype.constructor = VideoSystemException;


// excepciones para el objeto user
function UserVideoSystemException() {
	this.name = "UserVideoSystemException";
	this.message = "Error: The method needs a User parameter.";
}
UserVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
UserVideoSystemException.prototype.constructor = UserVideoSystemException;

function UserExistsVideoSystemException() {
	this.name = "UserExistsVideoSystemExceptio";
	this.message = "Error: The user exists in the Video System.";
}
UserExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
UserExistsVideoSystemException.prototype.constructor = UserExistsVideoSystemException;

function UserNotExistsVideoSystemException() {
	this.name = "UserNotExistsVideoSystemException";
	this.message = "Error: The user doesn't exist in the Video System.";
}
UserNotExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
UserNotExistsVideoSystemException.prototype.constructor = UserNotExistsVideoSystemException;


// Excepciones para el objeto category
function CategoryVideoSystemException() {
	this.name = "CategoryVideoSystemException";
	this.message = "Error: The method needs a Category parameter.";
}
CategoryVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
CategoryVideoSystemException.prototype.constructor = CategoryVideoSystemException;

function CategoryExistsVideoSystemException() {
	this.name = "CategoryExistsVideoSystemException";
	this.message = "Error: The category exists in the Video System.";
}
CategoryExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
CategoryExistsVideoSystemException.prototype.constructor = CategoryExistsVideoSystemException;

function CategoryNotExistsVideoSystemException() {
	this.name = "CategoryNotExistsVideoSystemException";
	this.message = "Error: The category doesn't exist in the Video System.";
}
CategoryNotExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
CategoryNotExistsVideoSystemException.prototype.constructor = CategoryNotExistsVideoSystemException;


// Excepciones para el objeto productions
function ProductionVideoSystemException() {
	this.name = "ProductionVideoSystemException";
	this.message = "Error: The method needs a Production parameter.";
}
ProductionVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProductionVideoSystemException.prototype.constructor = ProductionVideoSystemException;

function ProductionExistsVideoSystemException() {
	this.name = "ProductionExistsVideoSystemException";
	this.message = "Error: The production exists in the Video System.";
}
ProductionExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProductionExistsVideoSystemException.prototype.constructor = ProductionExistsVideoSystemException;

function ProducitionNotExistsVideoSystemException() {
	this.name = "ProducitionNotExistsVideoSystemException";
	this.message = "Error: The production doesn't exist in the Video System.";
}
ProducitionNotExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProducitionNotExistsVideoSystemException.prototype.constructor = ProducitionNotExistsVideoSystemException;



// Excepciones para  actor
function ActorVideoSystemException() {
	this.name = "ActorVideoSystemException";
	this.message = "Error: The method needs a Person parameter.";
}
ProductionVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProductionVideoSystemException.prototype.constructor = ProductionVideoSystemException;

function ActorExistsVideoSystemException() {
	this.name = "ActorExistsVideoSystemException";
	this.message = "Error: The actor exists in the Video System.";
}
ActorExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ActorExistsVideoSystemException.prototype.constructor = ActorExistsVideoSystemException;

function ActorNotExistsVideoSystemException() {
	this.name = "ActorNotExistsVideoSystemException";
	this.message = "Error: The actor doesn't exist in the Video System.";
}
ActorNotExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ActorNotExistsVideoSystemException.prototype.constructor = ActorNotExistsVideoSystemException;


// Excepciones para  director
function DirectoVideoSystemException() {
	this.name = "DirectoVideoSystemException";
	this.message = "Error: The method needs a Person parameter.";
}
DirectoVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
DirectoVideoSystemException.prototype.constructor = DirectoVideoSystemException;

function DirectoExistsVideoSystemException() {
	this.name = "DirectoExistsVideoSystemException";
	this.message = "Error: The director exists in the Video System.";
}
DirectoExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
DirectoExistsVideoSystemException.prototype.constructor = DirectoExistsVideoSystemException;

function DirectoNotExistsVideoSystemException() {
	this.name = "DirectoNotExistsVideoSystemException";
	this.message = "Error: The director doesn't exist in the Video System.";
}
DirectoNotExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
DirectoNotExistsVideoSystemException.prototype.constructor = DirectoNotExistsVideoSystemException;