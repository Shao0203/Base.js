


var Base = {

	getID : function(id) {
		return document.getElementById(id);
	},
	getTagName : function(tag) {
		return document.getElementsByTagName(tag);
	},
	getClassName : function(className) {
		return document.getElementsByClassName(className);
	},
	getQuery : function(query) {
		return document.querySelector(query);
	},
	getQueryAll : function(query) {
		return document.querySelectorAll(query);
	}

};


var box = function() {
	alert(11);
}();

(function(age){
	alert(age)
})(100)


var age = 100;
function box() {
	age++;
	return age;
}
alert(box())
alert(box())
alert(age);


function box() {
	var age = 100;
	age++;
	return age;
}

// alert(box())
// alert(box())
// alert(box())
// alert(age)

// var color = 'red';

// function box() {
// 	var color = 'green';
// 	var age = 100;
// 	return function() {
// 		return box.call(this)
// 	}
// }

// alert(box()())


function box(count) {
(function () {
for (var i = 0; i<count; i++) {}
})(); alert(i);
} box(2);

function box() {
	(function(){
		for (i=0; i<3; i++) {
			alert(i);
		}
	})();
	alert(i);
}
box();




function Computer(name,year) {
	this.name = name;
	this.year = year;
	this.run = function() {
		return this.name + ' ' + this.year + ' is running...';
	}
}

var ibm = new Computer('IBM',2016);
console.log(ibm)
alert(ibm.name + ibm.year + ibm.run())

var mac = new Computer('Apple',2015);
console.log(mac)
alert(mac.name + mac.year + mac.run());

function PC(price,size,NAME,YEAR) {
	this.price = price;
	this.size = size;
	this.pay = function() {
		return this.price + ' ' + this.size + ' should be paid';
	}
	Computer.apply(this,[NAME,YEAR]);
}

var lenovo = new PC(4000,15.4,'LeNoVo',2013);
// Computer.call(lenovo,'lenovo',2015);
console.log(lenovo.name +','+lenovo.year+','+lenovo.price+','+lenovo.size
			+','+lenovo.run()+','+lenovo.pay());




function Box(){
	this.name = 'Jack'
};
Box.prototype.name = 'Shao';
Box.prototype.age = 12 ;
Box.prototype.run = function() {
	return this.name + this.age +' is running..';
}

var box1 = new Box();
var box2 = new Box();
// alert(box1.run == box2.run)
// alert(box1.constructor);
// alert(Box.prototype.isPrototypeOf(box1));
// delete box1.name;
// alert(box1.name);
// alert(box2.name)
// alert('name' in box1);

function Box(name,age) {
	this.name = name;
	this.age = age;
	this.color = ['yellow','red'];
}
Box.prototype = {
	constructor : Box,
	run : function() {
		return this.name + ' ' + this.age + ' ' + this.color;
	}
}

var box1 = new Box('aa',10);
var box2 = new Box('bb',20);
box1.color.push('blue');
// alert(box1.color);alert(box2.color);
alert(box1.run == box2.run);




function Table() {
	this.name = 'table';
	this.size = 15;
	Table.prototype.run = function() {
		return this.name + ' ' + this.size;
	}
}

function Desk() {
	this.age = 100;
	Table.call(this);
}

// Desk.prototype = new Table();
// var desk = new Desk();
// console.log(desk.age + ' ' + desk.name + ' ' + desk.run());

Desk.prototype = new Table();
var desk1 = new Desk();
alert(desk1.run())





function Desk(name,price) {
	this.name = name;
	this.price = price;
}
Desk.prototype.run = function() {
	return this.name + ' ' + this.price;
}

function Table(size,name,price) {
	this.size = size;
	Desk.call(this,name,price);
}
Table.prototype = new Desk();

// var desk = new Desk('aa',100);
// alert(desk.run())

var table = new Table(20,'tableName',2000);
alert(table.run() + ' ' + table.size)



















