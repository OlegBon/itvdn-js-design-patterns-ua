// Створіть клас MenuBuilder, який дозволяє створювати меню ресторану, додаючи окремі страви.
// Додайте методи для вибору назви страви, її опису, переліку алергенів та ціни.

class MenuBuilder {
  constructor() {
    this.menuItems = [];
  }

  addItem(name, description, allergens, price) {
    const item = {
      name,
      description,
      allergens,
      price,
    };
    this.menuItems.push(item);
  }

  selectItem(index) {
    return this.menuItems[index];
  }
}

// Приклад використання
const menuBuilder = new MenuBuilder();

menuBuilder.addItem("Стейк", "М'ясний стеїк", ["Глютен", "Лактоза"], 15.99);
menuBuilder.addItem(
  "Салат",
  "Красивий салат",
  ["Глютен", "Лактоза", "Глюкоза"],
  8.99
);

const steak = menuBuilder.selectItem(0);
console.log(steak.name); // Виведе "Стейк"
console.log(steak.description); // Виведе "М'ясний стеїк"
console.log(steak.allergens); // Виведе ["Глютен", "Лактоза"]
console.log(steak.price); // Виведе 15.99

console.log("---");

const salad = menuBuilder.selectItem(1);
console.log(salad.name); // Виведе "Салат"
console.log(salad.description); // Виведе "Красивий салат"
console.log(salad.allergens); // Виведе ["Глютен", "Лактоза", "Глюкоза"]
console.log(salad.price); // Виведе 8.99
