// Створіть клас MenuBuilder, який дозволяє створювати меню ресторану, додаючи окремі страви.
// Додайте методи для вибору назви страви, її опису, переліку алергенів та ціни.

// class MenuBuilder {
//   constructor() {
//     this.menuItems = [];
//   }

//   addItem(name, description, allergens, price) {
//     const item = {
//       name,
//       description,
//       allergens,
//       price,
//     };
//     this.menuItems.push(item);
//   }

//   selectItem(index) {
//     return this.menuItems[index];
//   }
// }

// // Приклад використання
// const menuBuilder = new MenuBuilder();

// menuBuilder.addItem("Стейк", "М'ясний стеїк", ["Глютен", "Лактоза"], 15.99);
// menuBuilder.addItem(
//   "Салат",
//   "Красивий салат",
//   ["Глютен", "Лактоза", "Глюкоза"],
//   8.99
// );

// const steak = menuBuilder.selectItem(0);
// console.log(steak.name); // Виведе "Стейк"
// console.log(steak.description); // Виведе "М'ясний стеїк"
// console.log(steak.allergens); // Виведе ["Глютен", "Лактоза"]
// console.log(steak.price); // Виведе 15.99

// console.log("---");

// const salad = menuBuilder.selectItem(1);
// console.log(salad.name); // Виведе "Салат"
// console.log(salad.description); // Виведе "Красивий салат"
// console.log(salad.allergens); // Виведе ["Глютен", "Лактоза", "Глюкоза"]
// console.log(salad.price); // Виведе 8.99

// клас для створення однієї страви
class MenuItemBuilder {
  constructor() {
    this.item = {};
  }

  setName(name) {
    this.item.name = name;
    return this;
  }

  setDescription(description) {
    this.item.description = description;
    return this;
  }

  setAllergens(allergens) {
    this.item.allergens = allergens;
    return this;
  }

  setPrice(price) {
    this.item.price = price;
    return this;
  }

  build() {
    return this.item;
  }
}

// Класс, який прийматиме вже готову страву
class MenuBuilder {
  constructor() {
    this.menuItems = [];
  }

  addItem(item) {
    this.menuItems.push(item);
  }

  selectItem(index) {
    return this.menuItems[index];
  }
}

// Приклад використання
// Створимо страву "Стейк"
const steak = new MenuItemBuilder()
  .setName("Стейк")
  .setDescription("М'ясний стеїк")
  .setAllergens(["Глютен", "Лактоза"])
  .setPrice(15.99)
  .build();

const menu = new MenuBuilder();
menu.addItem(steak);

const selectedSteak = menu.selectItem(0);
console.log(selectedSteak.name); // Виведе "Стейк"
console.log(selectedSteak.description); // Виведе "М'ясний стеїк"
console.log(selectedSteak.allergens); // Виведе ["Глютен", "Лактоза"]
console.log(selectedSteak.price); // Виведе 15.99

console.log("---");

// Створимо страву "Салат"
const salad = new MenuItemBuilder()
  .setName("Салат")
  .setDescription("Красивий салат")
  .setAllergens(["Глютен", "Лактоза", "Глюкоза"])
  .setPrice(8.99)
  .build();

menu.addItem(salad);

const selectedSalad = menu.selectItem(1);
console.log(selectedSalad.name); // Виведе "Салат"
console.log(selectedSalad.description); // Виведе "Красивий салат"
console.log(selectedSalad.allergens); // Виведе ["Глютен", "Лактоза", "Глюкоза"]
console.log(selectedSalad.price); // Виведе 8.99
