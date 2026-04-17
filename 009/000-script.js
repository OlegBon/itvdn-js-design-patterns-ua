// Напишіть невеликий програмний модуль (наприклад, калькулятор для базових арифметичних
// операцій) у стилі Spaghetti Code. Потім розділіть код на логічно ізольовані функції та модулі, щоб
// зробити його читабельнішим і легшим у підтримці.

// Spaghetti Code

// Поганий Spaghetti Code
// Величезна функція, яка робить усе.
// Дублювання логіки.
// Магічні символи "+", "-", "*", "/".
// Порушення SRP (Single Responsibility Principle).
// Неможливо розширювати (наприклад, додати % або ^).
function calculator(a, b, op) {
  if (op === "+") {
    console.log("Result is: " + (a + b));
  } else if (op === "-") {
    console.log("Result is: " + (a - b));
  } else if (op === "*") {
    console.log("Result is: " + a * b);
  } else if (op === "/") {
    if (b === 0) {
      console.log("Error: division by zero");
    } else {
      console.log("Result is: " + a / b);
    }
  } else {
    console.log("Unknown operation");
  }

  // Додатковий хаос
  if (op === "+") {
    console.log("Operation was addition");
  }
  if (op === "-") {
    console.log("Operation was subtraction");
  }
  if (op === "*") {
    console.log("Operation was multiplication");
  }
  if (op === "/") {
    console.log("Operation was division");
  }
}

calculator(10, 5, "+");
calculator(10, 5, "/");
calculator(10, 0, "/");

// Рефакторинг
// Виділення окремих функцій для кожної операції.
const Operations = {
  ADD: "add",
  SUB: "sub",
  MUL: "mul",
  DIV: "div",
};

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

// Мапа операцій для легкого розширення
const operationMap = {
  [Operations.ADD]: add,
  [Operations.SUB]: sub,
  [Operations.MUL]: mul,
  [Operations.DIV]: div,
};

// Чистий клас-калькулятор, який використовує мапу операцій
class Calculator {
  calculate(a, b, operation) {
    const func = operationMap[operation];

    if (!func) {
      throw new Error("Unknown operation");
    }

    return func(a, b);
  }
}

// Приклад використання
const calc = new Calculator();

console.log("Add:", calc.calculate(10, 5, Operations.ADD));
console.log("Sub:", calc.calculate(10, 5, Operations.SUB));
console.log("Mul:", calc.calculate(10, 5, Operations.MUL));
console.log("Div:", calc.calculate(10, 5, Operations.DIV));
