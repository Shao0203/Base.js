/*
// Object method to create library
var Base = {
	getId: function(id) {
		return document.getElementById(id);
	},
	getTagName: function(tagName) {
		return document.getElementsByTagName(tagName);
	},
	getClassName: function(className) {
		return document.getElementsByClassName(className);
	}
}
*/

// create a new instance each time
var $ = function() {
	return new Base();
}

// Base library
function Base() {
	this.elements = [];

	// get element by id
	this.getId = function(id) {
		this.elements.push(document.getElementById(id));
		return this;
	};

	//get elements by tagName
	this.getTagName = function(tagName) {
		var tags = document.getElementsByTagName(tagName);
		for (var i = 0; i < tags.length; i++) {
			this.elements.push(tags[i]);
		}
		return this;
	}

	//get elements by className
		this.getClassName = function(className) {
		var classNames = document.getElementsByClassName(className);
		for (var i = 0; i < classNames.length; i++) {
			this.elements.push(classNames[i]);
		}
		return this;
	}
}
	//set css style
Base.prototype.css = function(attr, value) {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style[attr] = value;
	}
	return this;
}
	//set html content
Base.prototype.html = function(str) {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].innerHTML = str;
	}
	return this;
}
	//click event
Base.prototype.click = function(fn) {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].onclick = fn;
	}
	return this;
}


