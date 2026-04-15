// Напишіть програму для сортування масивів чисел. Реалізуйте три стратегії: сортування за
// зростанням, за спаданням та сортування за парністю. Дозвольте користувачеві обирати потрібну
// стратегію під час виконання програми.

// Шаблон Strategy

// Базовий клас для стратегій сортування
class SortStrategy {
  sort(array) {
    throw new Error("Метод sort має бути реалізований у підкласі");
  }
}

// Стратегія сортування за зростанням
class AscendingSort extends SortStrategy {
  sort(array) {
    return [...array].sort((a, b) => a - b);
  }
}

// Стратегія сортування за спаданням
class DescendingSort extends SortStrategy {
  sort(array) {
    return [...array].sort((a, b) => b - a);
  }
}

// Стратегія сортування за парністю
class EvenOddSort extends SortStrategy {
  sort(array) {
    return [...array].sort((a, b) => {
      const isEvenA = a % 2 === 0;
      const isEvenB = b % 2 === 0;

      if (isEvenA && !isEvenB) return -1; // A парне, B непарне
      if (!isEvenA && isEvenB) return 1; // A непарне, B парне

      return a - b; // якщо обидва парні або обидва непарні
    });
  }
}

// Контекст для використання стратегій сортування
class SortContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  execute(array) {
    return this.strategy.sort(array);
  }
}

// Приклад використання
const numbers = [5, 2, 9, 1, 8, 3, 7, 4];

const ascending = new AscendingSort();
const descending = new DescendingSort();
const evenOdd = new EvenOddSort();

const context = new SortContext(ascending);

console.log("Сортування за зростанням:", context.execute(numbers));

context.setStrategy(descending);
console.log("Сортування за спаданням:", context.execute(numbers));

context.setStrategy(evenOdd);
console.log("Сортування за парністю:", context.execute(numbers));
