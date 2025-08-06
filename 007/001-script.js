// Реалізуйте систему з використанням патерну Mediator для управління замовленнями в кафе.
// Напишіть клас OrderManager, який координуватиме дії між офіціантами, кухнею і касиром.

// Шаблон Mediator

// Клас Mediator (Посередник) - відповідає за координування дій між класами-компонентами
class OrderManager {
  constructor() {
    this.users = [];
  }

  // Реєстрація користувача
  registerUser(user) {
    this.users.push(user);
    user.setCoordinator(this);
  }

  // Координування дій між класами-компонентами
  notify(message, fromUser, toUser = null) {
    if (toUser) {
      toUser.receiveMessage(message, fromUser);
    } else {
      this.users.forEach((user) => {
        if (user !== fromUser) {
          user.receiveMessage(message, fromUser);
        }
      });
    }
  }
}

// Класи-компоненти (Класи, які мають залежності на Mediator)
// Загальний класс користувача
class User {
  constructor(name) {
    this.name = name;
    this.OrderManager = null;
  }

  // Встановлення посилання на OrderManager (Посередника, Mediator)
  setCoordinator(coordinator) {
    this.OrderManager = coordinator;
  }

  // Надсилання повідомлення
  sendMessage(message, toUser = null) {
    this.OrderManager.notify(message, this, toUser);
  }

  // Отримання повідомлення
  receiveMessage(message, fromUser) {
    console.log(
      `${this.name} отримав повідомлення: ${message} від ${fromUser.name}`
    );
  }
}

// Офіціант
class Waiter extends User {
  constructor(name) {
    super(name);
  }
}

// Кухня
class Kitchen extends User {
  constructor(name) {
    super(name);
  }
}

// Касир
class Cashier extends User {
  constructor(name) {
    super(name);
  }
}

// Приклад використання
const orderManager = new OrderManager();
const waiter = new Waiter("Офіціант");
const kitchen = new Kitchen("Кухня");
const cashier = new Cashier("Касир");

orderManager.registerUser(waiter);
orderManager.registerUser(kitchen);
orderManager.registerUser(cashier);

waiter.sendMessage("Нове замовлення отримано!");
cashier.sendMessage("Очікуємо на оплату", kitchen);
kitchen.sendMessage("Приготування замовлення", cashier);
