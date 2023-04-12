var someString = "cool";
var coolFunc = function (a, b) { return a + b; };
// coolFunc(someString, {}) // TS2345: Argument of type '{}' is not assignable to parameter of type 'number'.
var result = coolFunc(someString, 2);
console.log(result);


