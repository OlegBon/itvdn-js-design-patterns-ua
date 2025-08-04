// Створіть клас Pizza, який містить базовий метод getCost().
// Реалізуйте декоратори для додавання інгредієнтів (наприклад, сир, гриби, салямі), які будуть змінюють вартість піци.

// Шаблон Decorator

// Базовий клас
class Pizza {
  getCost() {
    return 100; // Повертаємо базову вартість піци
  }
}

// Декоратор - базовий клас для всіх інгредієнтів
class PizzaDecorator {
  constructor(pizza) {
    this.pizza = pizza; // Обгортний об'єкт піци
  }
  getCost() {
    return this.pizza.getCost(); // Повертаємо вартість піци, яку декоруємо
  }
}

// Конкретні декоратори
class CheeseDecorator extends PizzaDecorator {
  getCost() {
    return this.pizza.getCost() + 10; // Додаємо 10 грн до вартості піци
  }
}

class PepperoniDecorator extends PizzaDecorator {
  getCost() {
    return this.pizza.getCost() + 15; // Додаємо 15 грн до вартості піци
  }
}

class MushroomsDecorator extends PizzaDecorator {
  getCost() {
    return this.pizza.getCost() + 5; // Додаємо 5 грн до вартості піци
  }
}

// Приклад використання
const pizza = new Pizza(); // Створюємо базову піцу
const cheesePizza = new CheeseDecorator(pizza); // Додаємо сир до піци
const pepperoniPizza = new PepperoniDecorator(pizza); // Додаємо пепероні до піци
const mushroomsPizza = new MushroomsDecorator(pizza); // Додаємо гриби до піци

console.log("Вартість базової піци:", pizza.getCost()); // Виводимо вартість базової піци
console.log("Вартість піци з сиром:", cheesePizza.getCost()); // Виводимо вартість піци з сиром
console.log("Вартість піци з пепероні:", pepperoniPizza.getCost()); // Виводимо вартість піци з пепероні
console.log("Вартість піци з грибами:", mushroomsPizza.getCost()); // Виводимо вартість піци з грибами

const totalCost = new MushroomsDecorator(
  new CheeseDecorator(new PepperoniDecorator(pizza))
); // Додаємо всі інгредієнти до піци
console.log("Вартість піци з всіма інгредієнтами:", totalCost.getCost()); // Виводимо вартість піци з всіма інгредієнтами
