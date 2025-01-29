function simpleCalculate(a, b, operationFunction) {
  return operationFunction(a, b);
}

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operations = {
  add,
  subtract,
  multiply,
  divide,
};

// Пример использования
const selectedOperation = "multiply";
console.log(simpleCalculate(6, 3, operations[selectedOperation])); // 18

const selectedOperation2 = "add";
console.log(simpleCalculate(6, 3, operations[selectedOperation2])); // 9

const selectedOperation3 = "subtract";
console.log(simpleCalculate(6, 3, operations[selectedOperation3])); // 3

const selectedOperation4 = "divide";
console.log(simpleCalculate(6, 3, operations[selectedOperation4])); // 2