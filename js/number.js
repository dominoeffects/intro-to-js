// Number data type
var a = 10;
console.log(a);
var b = 100;
console.log(b);
var a = 20;
console.log(a);
var c = 0x1E; // hex value of 30
console.log(c);
var d = 0.5;
console.log(d);

// addition
var sum = a + b;
console.log(sum);

// subtraction
var diff = d - c;
console.log(diff);

// multiplication
var multi = a * d;
console.log(multi);

// division
var div = a / d;
console.log(div);
var div = b / a;
console.log(div);

// modulus
var mod = b % a;
console.log (mod);
var mod = b % c;
console.log (mod);

var e = '20'; // not a numer; but is a string
console.log(e); // returns the type of variable e rather than a value
console.log(typeof e); // returns the value rather than the type

console.log (a === e); // strict comparison
console.log (a == e); // loose comparison //truthy
