//functions
function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(2, 5));
//optional parameter
function add(a: number, b: number, c?: number) {
  return a + b + (c || 3);
}
console.log(add(3, 5));
//default parameter
function pow(value: number, exponent: number = 5) {
  return value ** exponent;
}

console.log(pow(2));
//named parameter
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

console.log(divide({ dividend: 10, divisor: 2 }));
