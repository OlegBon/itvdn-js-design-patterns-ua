// Виберіть код з полем-масивом у вашому коді або знайдіть такий код у відкритому доступі. Оцініть,
// чи доцільно замінити ці масиви на об’єкти. Проаналізуйте, які переваги та недоліки матиме така
// зміна.

// Replace Array with Object

// Масив використовується як структура з фіксованими індексами
// Потрібно пам’ятати, що address[0] — місто, address[1] — вулиця, address[2] — індекс.
// Якщо порядок зміниться — код зламається.
// Немає підказок у редакторі (autocomplete).
// Немає можливості додати поведінку (валідацію, форматування).
// Порушення принципу Self‑Documenting Code.
// class User {
//   constructor(name, addressArray) {
//     this.name = name;
//     this.address = addressArray;
//     // addressArray = ["Kharkiv", "Sumska 10", "61000"]
//   }

//   printAddress() {
//     console.log(`${this.address[0]}, ${this.address[1]}, ${this.address[2]}`);
//   }
// }

// const user = new User("Oleh", ["Kharkiv", "Sumska 10", "61000"]);
// user.printAddress();

// Рефакторинг: заміна масиву об’єктом
// Створимо клас Address, який:
// має іменовані поля,
// інкапсулює логіку,
// може розширюватися.
class Address {
  constructor(city, street, postalCode) {
    this.city = city;
    this.street = street;
    this.postalCode = postalCode;
  }

  format() {
    return `${this.city}, ${this.street}, ${this.postalCode}`;
  }
}

class User {
  constructor(name, address) {
    this.name = name;
    this.address = address; // ✔ тепер це об’єкт
  }

  printAddress() {
    console.log(this.address.format());
  }
}

const user = new User("Oleh", new Address("Kharkiv", "Sumska 10", "61000"));

user.printAddress();
