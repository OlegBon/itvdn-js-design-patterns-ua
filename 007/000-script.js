// Реалізуйте шаблон Observer для системи сповіщення клієнтів магазину про нові товари.
// Створіть клас Store як суб'єкт і класи Customer як спостерігачі.

// Шаблон Observer

// Суб'єкт (Subject) - клас Store
class Store {
  constructor() {
    this.products = [];
    this.observers = [];
  }

  // Метод для підписки
  subscribe(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    } else {
      console.log(`${observer.name} вже підписаний на оновлення магазину`);
    }
  }

  // Метод для отримання списку спостерігачів
  listSubscribers() {
    return this.observers.map((o) => o.name).join(", ");
  }

  // Метод для відписки
  unsubscribe(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  // Метод для додавання товару
  addProduct(product) {
    this.products.push(product);
    this.notify(product);
  }

  // Метод для відправки повідомлення всім спостерігачам
  notify(message) {
    this.observers.forEach((observer) => observer.update(message));
  }
}

// Отримувач (Observer) - клас Customer
class Customer {
  constructor(name) {
    this.name = name;
  }

  // Метод для отримання повідомлення про новий товар
  update(message) {
    console.log(`${this.name} отримав повідомлення: ${message}`);
  }
}

// Приклад використання
const store = new Store();
const customer1 = new Customer("Клієнт 1");
const customer2 = new Customer("Клієнт 2");

store.subscribe(customer1);
store.subscribe(customer2);

store.addProduct("Новиий товар 1");
store.addProduct("Новий товар 2");

store.subscribe(customer1);

console.log("Список спостерігачів:", store.listSubscribers());
