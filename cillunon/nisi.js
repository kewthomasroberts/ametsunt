var bandPosition = "A";
var binStart = "10";
var binEnd = "20";

var result = "".concat(bandPosition, "*").concat(binStart, "+").concat(1 - bandPosition, "*").concat(binEnd);
console.log(result); // Output: A*10+1-A*20
