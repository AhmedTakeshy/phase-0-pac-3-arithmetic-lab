const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const increment = (n) => {
  return n + 1;
};

const decrement = (n) => {
  return n - 1;
};

const makeInt = (n) => {
  return parseInt(n, 10);
};

const preserveDecimal = (n) => {
  return parseFloat(n);
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  increment,
  decrement,
  makeInt,
  preserveDecimal,
};
