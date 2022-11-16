// basic object understanding

var point = {
	x: 10,
	y: 20,
	z: 30,
};

// updating object properties value

point.x = "My name is Rupom";
point.job = "I am remote software engineer";

// removing object properties

point.x = undefined;

delete point.x;

var point2 = new Object();
point2.x = 30;
point2.y = 40;

// printing object
console.log(point.x, point.y);
console.log(point["x"], point["y"], point.x + point.y);

console.log(point);
console.log(point.home);
console.log(point2);

// comparing two object

var obj1 = {
	a: 10,
	b: 20,
};

var obj2 = {
	a: 10,
	b: 20,
};

var obj3 = {
	a: 30,
	b: 20,
};

// two objects memory location is different. So this kind of comparison is returning false.
console.log(obj1 == obj2);
console.log(obj1 === obj2);

// proper way to compare two objects

if (obj1.a == obj2.a && obj1.b == obj2.b) {
	console.log(true);
} else {
	console.log(false);
}

// comparing two object with json method

console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));

console.log(JSON.stringify(obj1) == JSON.stringify(obj2));

console.log(JSON.stringify(obj1) === JSON.stringify(obj3));
// object default methods

var obj1 = {
	x: 40,
	y: 50,
	z: 75,
	r: 34,
};
// creating a object from another object without effect
var obj2 = Object.assign({}, obj1);
obj1.r = 100;
console.log(obj2);
console.log(obj1);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
