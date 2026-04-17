// Реалізуйте код або знайдіть у наявному коді поле, яке зберігає просте значення (наприклад, рядок
// або число). Розгляньте, як його можна замінити об'єктом, щоб додати нові функції або поліпшити
// читабельність коду.

// Replace Data Value with Object

// Просте поле, яке з часом ускладнює код
// Уявімо, що в нас є клас User, який зберігає рядок email.
// Перевірка email розкидана по коду.
// Якщо потрібно додати валідацію - доведеться змінювати багато місць.
// Email — це не просто рядок, а сутність із поведінкою.
// Порушення SRP: User займається валідацією email.
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email; // просте значення
//   }

//   sendWelcomeMessage() {
//     if (!this.email.includes("@")) {
//       console.log("Некоректний email");
//       return;
//     }

//     console.log(`Відправляємо лист на ${this.email}`);
//   }
// }

// Рефакторинг: заміна простого поля об’єктом
// Створимо клас Email, який інкапсулює:
// валідацію,
// нормалізацію,
// форматування,
// майбутні функції (наприклад, маскування).

class Email {
  constructor(value) {
    this.value = value.trim().toLowerCase();
  }

  isValid() {
    return this.value.includes("@");
  }

  getDomain() {
    return this.value.split("@")[1];
  }

  toString() {
    return this.value;
  }
}

class User {
  constructor(name, email) {
    this.name = name;
    this.email = new Email(email); // заміна простого поля об’єктом
  }

  sendWelcomeMessage() {
    if (!this.email.isValid()) {
      console.log("Некоректний email");
      return;
    }

    console.log(`Відправляємо лист на ${this.email}`);
  }
}

const user = new User("Oleh", "  OLEH@example.com  ");
user.sendWelcomeMessage();

console.log("Домен:", user.email.getDomain());

// Інший приклад: числове поле → Money
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price; // число
//   }
// }

// Рефакторинг: заміна простого поля об’єктом
// class Money {
//   constructor(amount, currency = "USD") {
//     this.amount = amount;
//     this.currency = currency;
//   }

//   format() {
//     return `${this.amount.toFixed(2)} ${this.currency}`;
//   }
// }

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = new Money(price);
//   }
// }

// const product = new Product("Laptop", 1000);
// console.log(product.price.format());
