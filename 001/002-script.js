// Реалізуйте клас Counter із властивістю count, дефолтне значення якої 0.
// Додайте методи increment для збільшення властивості на 50 та метод decrement для зменшення властивості на 50.
// Розширте клас, додавши метод reset, який встановлює властивість count в значення 0. Виконайте перевірку роботи методів.
// Переконайтеся, що можна створити лише один екземпляр Counter.

class CounterSingleton {
  constructor() {
    if (CounterSingleton.instance) {
      return CounterSingleton.instance;
    }
    CounterSingleton.instance = this;
    this.count = 0;
  }
  increment() {
    this.count += 50;
  }
  decrement() {
    this.count -= 50;
  }
  reset() {
    this.count = 0;
  }
}

// Перевірка роботи класу CounterSingleton
const counter1 = new CounterSingleton(); // Створюємо перший екземпляр
console.log(`counter1.count: ${counter1.count}`); // Виведе: 0
counter1.increment(); // Збільшуємо count на 50
counter1.increment();
counter1.increment();
console.log(`counter1.count: ${counter1.count}`); // Виведе: 150
counter1.decrement(); // Зменшуємо count на 50
console.log(`counter1.count: ${counter1.count}`); // Виведе: 100
counter1.reset(); // Скидаємо count до 0
console.log(`counter1.count: ${counter1.count}`); // Виведе: 0
const counter2 = new CounterSingleton(); // Спробуємо створити другий екземпляр
console.log(`counter2.count: ${counter2.count}`); // Виведе: 0, оскільки це той самий екземпляр
counter2.increment(); // Збільшуємо count на 50 через другий екземпляр
console.log(`counter1.count: ${counter1.count}`); // Виведе: 50, оскільки counter1 і counter2 це один і той самий екземпляр
console.log(`counter2.count: ${counter2.count}`); // Виведе: 50, оскільки counter1 і counter2 це один і той самий екземпляр
console.log(`counter1 === counter2: ${counter1 === counter2}`); // Виведе: true, оскільки це один і тий сам екземпляр
