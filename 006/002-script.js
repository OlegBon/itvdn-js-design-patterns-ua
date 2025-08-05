// Створіть клас "Список покупок", який містить перелік продуктів.
// Реалізуйте шаблон Iterator для обходу цього списку, щоб вивести назви продуктів,
// які потрібно купити, у певному порядку.

// Шаблон Iterator

// Клас - Продукт
class Product {
  constructor(name, category) {
    this.name = name;
    this.category = category;
  }

  toString() {
    return `${this.name} [${this.category}]`;
  }
}

// Колекція - Список покупок
class ShoppingList {
  constructor(items = []) {
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
  }

  createIterator(reverse = false, category = null) {
    return new ShoppingListIterator(this, reverse, category);
  }
}

// Ітератор
class ShoppingListIterator {
  constructor(shoppingList, reverse = false, category = null) {
    let items = shoppingList.items;

    if (category) {
      items = items.filter((item) => item.category === category);
    }

    this.items = reverse ? [...items].reverse() : items;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.items.length;
  }

  next() {
    return this.hasNext() ? this.items[this.index++].toString() : null;
  }
}

// Приклад використання
const shoppingList = new ShoppingList([
  new Product("Хліб", "Випічка"),
  new Product("Молоко", "Напій"),
  new Product("Сир", "Молочне"),
  new Product("Помідори", "Овочі"),
  new Product("Картошка", "Овочі"),
  new Product("Печиво", "Випічка"),
  new Product("Кава", "Напій"),
]);

console.log("Звичайний обхід:");
let iterator = shoppingList.createIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}

console.log("\nЗворотній обхід:");
iterator = shoppingList.createIterator(true);
while (iterator.hasNext()) {
  console.log(iterator.next());
}

console.log("\nЛише овочі:");
iterator = shoppingList.createIterator(false, "Овочі");
while (iterator.hasNext()) {
  console.log(iterator.next());
}

console.log("\nЛише овочі (зворотній обхід):");
iterator = shoppingList.createIterator(true, "Овочі");
while (iterator.hasNext()) {
  console.log(iterator.next());
}
