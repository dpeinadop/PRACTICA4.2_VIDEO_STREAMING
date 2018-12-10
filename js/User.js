


function User(username, email, password) {

	//La función se invoca con el operador new
	if (!(this instanceof User))
		throw new InvalidAccessConstructorException();

	//Validación de parámetros obligatorios
	username = typeof username !== 'username' ? username : "";
	if (username === "")
		throw new EmptyValueException("username");
	email = typeof email !== 'email' ? email : "";
	if (email === 'undefined' || email === '')
		throw new EmptyValueException("email");
	if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]\@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email) !== true)
		throw new InvalidValueException("email", email);
	password = typeof password !== 'undefined' ? password : "";
	if (password === 0)
		throw new EmptyValueException("password");

	username = username.trim();
	email = email.trim();
	password = password.trim();


	//Definición de atributos privados del objeto
	var _username = username;
	var _email = email;
	var _password = password;


	//Propiedades de acceso a los atributos privados
	Object.defineProperty(this, 'username', {
		get: function () {
			return _username;
		},
		set: function (value) {
			value = typeof value !== 'undefined' ? value : "";
			if (username === "") throw new EmptyValueException("username");
			_username = value;
		}
	});

	Object.defineProperty(this, 'email', {
		get: function () {
			return _email;
		},
		set: function (value) {
			if (value === 'undefined' || value === '') throw new EmptyValueException("email");
			if (/^[a-z][a-z0-9_\-]*(\.[a-z0-9_\-]*)*[a-z0-9]\@[a-z0-9]+\.[a-z]{2,3}$/.test(value) !== true)
				throw new InvalidValueException("email", value);
			_email = value;
		}
	});

	Object.defineProperty(this, 'password', {
		get: function () {
			return _password;
		},
		set: function (value) {
			value = typeof value !== 'undefined' ? value : "";
			if (value === "") throw new EmptyValueException("password");
			_password = value;
		}
	});
}
User.prototype = {};
User.prototype.constructor = User;

User.prototype.toString = function () {
	return "Username: " + this.username + " Email: " + this.email + " Password: " + this.password;
}