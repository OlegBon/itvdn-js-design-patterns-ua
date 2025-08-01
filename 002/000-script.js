// Реалізуйте клас для створення різних типів тварин (наприклад, кішка, собака, птах).
// Створіть базовий клас Animal із методом createAnimal, який буде перевизначатися у дочірніх класах.
// Кожен тип тварини повинен мати свою реалізацію з унікальними властивостями (наприклад, звук, яким вона видає, або спосіб пересування).

// Factory Method
// Базовий клас Animal
class Animal {
  // Метод для створення тварини
  createAnimal() {
    // Перевизначається у дочірніх класах
    throw new Error("Метод createAnimal повинен бути реалізований");
  }
}

// Класи для кожного типу тварини
class Cat extends Animal {
  createAnimal() {
    // Реалізація для кота
    return "Мяууууууууу! Я кіт. В мене є 4 лапи та хвіст.";
  }
}

class Dog extends Animal {
  createAnimal() {
    // Реалізація для собаки
    return "Гав-гав-гав! Я собака. В мене є 4 лапи та хвіст.";
  }
}

class Bird extends Animal {
  createAnimal() {
    // Реалізація для птаха
    return "Цвірі-цвірік! Я птах. В мене є 2 лапи та хвіст.";
  }
}

// Фабрика для створення тварин
class AnimalFactory {
  createAnimal(type) {
    switch (type) {
      case "cat":
        return new Cat().createAnimal();
      case "dog":
        return new Dog().createAnimal();
      case "bird":
        return new Bird().createAnimal();
      default:
        throw new Error("Невідома тварина");
    }
  }
}

// Приклад використання
const factory = new AnimalFactory(); // Створюємо фабрику

console.log(factory.createAnimal("cat")); // Виведе: Мяууууууууу! Я кіт. В мене є 4 лапи та хвіст.
console.log(factory.createAnimal("dog")); // Виведе: Гав-гав-гав! Я собака. В мене є 4 лапи та хвіст.
console.log(factory.createAnimal("bird")); // Виведе: Цвірі-цвірік! Я птах. В мене є 2 лапи та хвіст.
