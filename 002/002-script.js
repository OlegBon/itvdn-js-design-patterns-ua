// Реалізуйте фабрику для створення елементів інтерфейсу користувача: кнопок і чекбоксів.
// Створіть дві реалізації фабрики: для Windows та MacOS, де кожна буде генерувати відповідні стилі для елементів.
// Factory Method

// Базовий клас для створення елементів інтерфейсу користувача
class UserInterface {
  constructor(button, checkbox) {
    this.button = button;
    this.checkbox = checkbox;
  }

  createButton() {
    return this.button;
  }

  createCheckbox() {
    return this.checkbox;
  }

  getInfo() {
    return `
      Кнопка: ${this.button}
      Чекбокс: ${this.checkbox}
    `;
  }
}

// Фабрика для створення елементів інтерфейсу користувача
class UserInterfaceFactory {
  static createElementInterface(type) {
    switch (type) {
      case "Windows":
        return new UserInterface("Windows button", "Windows checkbox");
      case "MacOS":
        return new UserInterface("MacOS button", "MacOS checkbox");
      default:
        throw new Error(
          "Невідома операційна система для створення елементів інтерфейсу користувача."
        );
    }
  }
}

// Приклад використання фабрики
const windowsUI = UserInterfaceFactory.createElementInterface("Windows");
console.log(windowsUI.getInfo()); // Виведе: Кнопка: Windows button, Чекбокс: Windows checkbox

const macOSUI = UserInterfaceFactory.createElementInterface("MacOS");
console.log(macOSUI.getInfo()); // Виведе: Кнопка: MacOS button, Чекбокс: MacOS checkbox

// Приклад використання фабрики з помилкою
try {
  const linuxUI = UserInterfaceFactory.createElementInterface("Linux");
} catch (error) {
  console.error(error.message); // Виведе: Невідома операційна система для створення елементів інтерфейсу користувача.
}
