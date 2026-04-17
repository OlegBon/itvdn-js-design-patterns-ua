// Перевірте зв’язки між класами у вашому проєкті або знайдіть приклад такого коду у відкритому
// доступі. Визначте, де можна застосувати підходи "Заміна одностороннього зв'язку
// двонаправленим" або, навпаки, спростити зайві зв'язки.

// Уні/бі-направлені зв’язки

// 1. Потрібно додати двонаправлений зв’язок
// (Change Unidirectional Association to Bidirectional)
// Початковий код - односторонній зв’язок
// Customer не знає, які замовлення йому належать.
// Якщо потрібно отримати всі замовлення клієнта — доведеться шукати по всій системі.
// Це ускладнює бізнес‑логіку (історія покупок, статистика, аналітика).
// class Order {
//   constructor(id, customer) {
//     this.id = id;
//     this.customer = customer; // Order знає Customer
//   }
// }

// class Customer {
//   constructor(name) {
//     this.name = name;
//     // Customer НЕ знає свої замовлення
//   }
// }

// const customer = new Customer("Oleh");
// const order = new Order(1, customer);

// Рефакторинг - двонаправлений зв’язок
class Order {
  constructor(id, customer) {
    this.id = id;
    this.customer = customer;
    customer.addOrder(this); // ✔ встановлюємо зв’язок у двох напрямках
  }
}

class Customer {
  constructor(name) {
    this.name = name;
    this.orders = []; // ✔ тепер Customer знає свої замовлення
  }

  addOrder(order) {
    this.orders.push(order);
  }
}

const customer = new Customer("Oleh");
const order = new Order(1, customer);

console.log(customer.orders); // [Order]

// 2. Потрібно спростити зайвий двонаправлений зв’язок
// (Change Bidirectional Association to Unidirectional)
// Початковий код - зайвий двонаправлений зв’язок
// Product знає свою категорію, але це не завжди потрібно.
// Двонаправлений зв’язок ускладнює тестування.
// Може виникнути рекурсія або циклічні залежності.
// Категорія може містити тисячі продуктів - важко синхронізувати.
// class Product {
//   constructor(name) {
//     this.name = name;
//     this.category = null;
//   }
// }

// class Category {
//   constructor(name) {
//     this.name = name;
//     this.products = [];
//   }

//   addProduct(product) {
//     this.products.push(product);
//     product.category = this; // двонаправлений зв’язок
//   }
// }

// Рефакторинг - спрощення до одностороннього зв’язку
class Product {
  constructor(name) {
    this.name = name;
    // category більше не потрібен
  }
}

class Category {
  constructor(name) {
    this.name = name;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product); // тільки один напрямок
  }
}
