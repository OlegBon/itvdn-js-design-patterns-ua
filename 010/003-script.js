// Створіть два класи, які обмінюються даними напряму. Переробіть код так, щоб класи не залежали
// напряму один від одного використовуючи патерн "Посередник" або "Адаптер".

// Поганий приклад - пряме зв’язування
// User напряму викликає методи Order,
// Order напряму викликає методи User.
// Це жорстке зв’язування, яке ускладнює підтримку.
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   placeOrder(order) {
//     console.log(`${this.name} робить замовлення...`);
//     order.process(this);
//   }
// }

// class Order {
//   constructor(product) {
//     this.product = product;
//   }

//   process(user) {
//     console.log(
//       `Обробляємо замовлення для ${user.name} на товар "${this.product}"`,
//     );
//   }
// }

// const user = new User("Oleh");
// const order = new Order("Laptop");

// user.placeOrder(order);

//
// Рефакторинг через патерн Mediator
// Вводимо посередника, який координує взаємодію між класами.
// User не знає про Order,
// Order не знає про User,
// Вони знають тільки про Mediator.

class OrderMediator {
  processOrder(user, order) {
    console.log(`${user.name} робить замовлення...`);
    console.log(`Обробляємо замовлення на товар "${order.product}"`);
  }
}

class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  placeOrder(order) {
    this.mediator.processOrder(this, order);
  }
}

class Order {
  constructor(product) {
    this.product = product;
  }
}

// Приклад використання
const mediator = new OrderMediator();

const user = new User("Oleh", mediator);
const order = new Order("Laptop");

user.placeOrder(order);
