// Додайте методи, які одночасно змінюють дані та повертають результат. Модифікуйте їх таким
// чином, щоб розділити на два або більше окремі методи для кращого розуміння коду і
// читабельності.

// Separate Query from Modifier

// Поганий приклад - метод змінює стан і повертає результат
// class Cart {
//   constructor() {
//     this.items = [];
//   }

//   addItem(item) {
//     this.items.push(item);
//     return this.items.length; // Повертає кількість товарів
//   }
// }

// const cart = new Cart();
// const count = cart.addItem({ name: "Laptop", price: 1000 });

// console.log("Items in cart:", count);

// Правильний варіант — розділення запиту і модифікатора
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item); // тільки змінює стан
  }

  getItemCount() {
    return this.items.length; // тільки повертає дані
  }
}

const cart = new Cart();
cart.addItem({ name: "Laptop", price: 1000 });

console.log("Items in cart:", cart.getItemCount());

// Ще приклад - метод змінює баланс і повертає результат
// updateBalance(amount) {
//     this.balance += amount;
//     return this.balance > 0;
// }

// Рефакторинг - розділення на два методи
// updateBalance(amount) {
//     this.balance += amount
// }

// isBalancePositive() {
//     return this.balance > 0;
// }
